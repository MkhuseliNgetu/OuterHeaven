// connect-with-sas-token.js
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';
import * as dotenv from 'dotenv';
const { moveFile } = require('@npmcli/fs');
dotenv.config();

const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
const sasToken = process.env.AZURE_STORAGE_SAS_TOKEN;

if (!accountName) throw Error('Azure Storage accountName not found');
if (!sasToken) throw Error('Azure Storage accountKey not found');

const blobServiceUri = `https://${accountName}.blob.core.windows.net?${sasToken}`;

const credential = undefined;

const blobServiceClient = new BlobServiceClient(blobServiceUri, credential);

let blobClient;

let downloadResult;

let containerClient: ContainerClient;

const containerName = 'outerheaven';

//Home Page
const blobNames: string[] = ["LND-Zero-V1.jpg","LND-One-V3.jpg","LND-Two-V3.jpg"];
//Main Page
const mainblobNames: string[] = ["MN-BannerOne-V1.jpg","MN-SaleOne-V1.jpg","MN-SaleTwo-V1.jpg",
                                    "MN-SaleThree-V1.jpg","MN-SaleFour-V1.jpg","MN-BannerTwo-V1.jpg",];

async function main() {

}

async function GetLandingPageImages() {

containerClient = await blobServiceClient.getContainerClient(
    containerName
);

//Landing Page Images
for (let index = 0; index < blobNames.length; index++) {

  const element = blobNames[index];

  const timestamp = Date.now().toPrecision();
  const fileNames =`LND-${timestamp}.jpg`;
  const fileNamesV1 = './public/Images/'+'LND-'+index+'.jpg'

  blobClient = await containerClient.getBlockBlobClient(element);

  downloadResult = await blobClient.downloadToFile(fileNamesV1);
  
  if (downloadResult?.errorCode) throw Error(downloadResult.errorCode);

  // console.log(
  // `${fileNames} downloaded ${downloadResult?.contentType}, isCurrentVersion: ${downloadResult?.isCurrentVersion}`
  // );

  //V2
  console.log(
    `${fileNamesV1} downloaded ${downloadResult?.contentType}, isCurrentVersion: ${downloadResult?.isCurrentVersion}`
    );
}
}

async function GetMainPageImages() {
containerClient = await blobServiceClient.getContainerClient(
    containerName
);

     //Main Page Images
     for (let index = 0; index < mainblobNames.length; index++) {

      const element = mainblobNames[index];

      const timestamp = Date.now().toPrecision();
      const fileNames =`MN-${timestamp}.jpg`;
      const fileNamesV2 = './public/Images/'+'MN-'+index+'.jpg'

      blobClient = await containerClient.getBlockBlobClient(element);

      downloadResult = await blobClient.downloadToFile(fileNamesV2);

    if (downloadResult?.errorCode) throw Error(downloadResult.errorCode);


    console.log(
      `${fileNamesV2} downloaded ${downloadResult?.contentType}, isCurrentVersion: ${downloadResult?.isCurrentVersion}`
      );
    }

}

main().then(() => console.log(`Azure Main Executed successfully`)).catch((err: unknown) => {
    if (err instanceof Error) {
      console.log(err.message);
    }
  });

GetLandingPageImages().then(() => console.log(`LandingPageImages Executed successfully`)).catch((err: unknown) => {
    if (err instanceof Error) {
      console.log(err.message);
    }
  });

GetMainPageImages().then(() => console.log(`MainPageImages success`)).catch((err: unknown) => {
    if (err instanceof Error) {
      console.log(err.message);
    }
  });