// connect-with-sas-token.js
import { BlobServiceClient, ContainerClient} from '@azure/storage-blob';

const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
const sasToken = process.env.AZURE_STORAGE_SAS_TOKEN;

if (!accountName) throw Error('Azure Storage accountName not found');
if (!sasToken) throw Error('Azure Storage accountKey not found');

const blobServiceUri = `https://${accountName}.blob.core.windows.net?${sasToken}`;

const credential = undefined;

const blobServiceClient = new BlobServiceClient(blobServiceUri, credential);

const containerName = process.env.AZURE_CONTAINER_NAME;

const fs = require('fs');

//Home Page
const mainlandingblobNames: string[] = ["LND-Zero-V1.jpg","LND-One-V3.jpg","LND-Two-V3.jpg"];
const altlandingblobNames: string[] = ["LND-AltOne-V1.jpg","LND-AltTwo-V1.jpg","LND-AltThree-V1.jpg"];
//Main Page - Default Season
const mainblobNames: string[] = ["MN-BannerOne-V1.jpg","MN-SaleOne-V1.jpg","MN-SaleTwo-V1.jpg",
                                    "MN-SaleThree-V1.jpg","MN-SaleFour-V1.jpg","MN-BannerTwo-V1.jpg",];

const SummerMainblobNames: string[] = ["MN-SummerBannerOne24-V1.png","MN-SummerSaleItemOne24-V1.jpg","MN-SummerSaleItemTwo24-V1.jpg",
                                    "MN-SummerSaleItemThree24-V1.jpg","MN-SummerSaleItemFour24-V1.jpg","MN-SummerBannerTwo24-V1.png",];

const AutumnMainblobNames: string[] = ["MN-BannerOne-V1.jpg","MN-SaleOne-V1.jpg","MN-SaleTwo-V1.jpg",
                                    "MN-SaleThree-V1.jpg","MN-SaleFour-V1.jpg","MN-BannerTwo-V1.jpg",];

const SpringMainblobNames: string[] = ["MN-BannerOne-V1.jpg","MN-SpringSaleItemOne24-V1.jpg","MN-SpringSaleItemTwo24-V1.jpg",
                                    "MN-SpringSaleItemThree24-V1.jpg","MN-SpringSaleItemFour24-V1.jpg","MN-BannerTwo-V1.jpg",];

//Clothing Page - Default
const ClothingMainblobNames: string[] = ["CLTMN-Coat-V1.jpg","CLTMN-Skirts-V1.jpg","CLTMN-Hoodie-V1.jpg",
    "CLTMN-Jacket-V1.jpg","CLTMN-Jean-V2.jpg","CLTMN-Leggings-V1.jpg","CLTMN-Shirts-V1.jpg","CLTMN-Sweatpants-V1.jpg","CLTMN-Tops-V1.jpg"];
                                    
//Login Page - Default
const loginblobNames: string[] = ["LOD-One-V1.jpg","LOD-Two-V1.jpg","LOD-Three-V1.jpg"];

//Login Page - Default
const registerblobNames: string[] = ["RGSTR-One-V1.jpg","RGSTR-Two-V1.jpg","RGSTR-Three-V1.jpg"];

//Accessories Page - Default
const accessoriesblobNames: string[] = ["ACC-Bandana-V1.jpg","ACC-Hats-V1.jpg","ACC-Necklace-V2.jpg",
                                        "ACC-Pefume-V2.jpg","ACC-Sunglassses-V1.jpg","ACC-Watches-V1.jpg"];
//Footwear Page - Default 
const footwearblobNames: string[] = ["FTW-Boots-V1.jpg","FTW-Sneakers-V1.jpg","FTW-Heels-V1.jpg",
  "FTW-Sandals-V1.jpg","FTW-Loafers-V1.jpg","FTW-Espadrille-V1.jpg"];

let containerClient: ContainerClient 
let blobClient 
let downloadResult


export default async function MainBlobs() {

GetFonts().then(() => console.log(`GetFonts Executed successfully`)).catch((err: unknown) => {
        if (err instanceof Error) {
          console.log(err.message);
         }
      });

GetLandingPageImages().then(() => console.log(`LandingPageImages Executed successfully`)).catch((err: unknown) => {
        if (err instanceof Error) {
          console.log(err.message);
        }
      });

GetRegisterPageImages().then(() => console.log(`RegisterPageImages Executed successfully`)).catch((err: unknown) => {
        if (err instanceof Error) {
          console.log(err.message);
        }
      });

GetLoginPageImages().then(() => console.log(`LoadingPageImages Executed successfully`)).catch((err: unknown) => {
        if (err instanceof Error) {
          console.log(err.message);
        }
      });
       
GetMainPageImages().then(() => console.log(`MainPageImages Executed successfully`)).catch((err: unknown) => {
        if (err instanceof Error) {
          console.log(err.message);
         }
       });

GetClothingMainPageImages().then(() => console.log(`ClothingPageImages Executed successfully`)).catch((err: unknown) => {
        if (err instanceof Error) {
              console.log(err.message);
            }
        });

GetFootwearMainPageImages().then(() => console.log(`FootwearMainPageImages Executed successfully`)).catch((err: unknown) => {
          if (err instanceof Error) {
                console.log(err.message);
              }
          });

GetAccessoryMainPageImages().then(() => console.log(`AccessoryMainPageImages Executed successfully`)).catch((err: unknown) => {
          if (err instanceof Error) {
                console.log(err.message);
              }
          });
}


//Fonts
export const GetFonts = async () => {

    const font = "Chiralla - Free Version.ttf"
    const fontNamesV0 = './public/Fonts/'+font

    containerClient = blobServiceClient.getContainerClient(containerName as string);

    if(fs.existsSync(fontNamesV0)){
      console.log(`${fontNamesV0}`+" already exists."+"\t"+"Skipping over to the next...");
    }else{

        blobClient = containerClient.getBlockBlobClient(font);
    
        downloadResult = await blobClient.downloadToFile(fontNamesV0);
    
        if (downloadResult?.errorCode) throw Error(downloadResult.errorCode);
        console.log(
        `${fontNamesV0} downloaded ${downloadResult?.contentType}, isCurrentVersion: ${downloadResult?.isCurrentVersion}`
        );
      }


}

//Register
export const GetRegisterPageImages = async () => {

  containerClient = blobServiceClient.getContainerClient(containerName as string);
  
  //Landing Page Images
  for (let index = 0; index < registerblobNames.length; index++) {
  
    const element = registerblobNames[index];
  
    const timestamp = Date.now().toPrecision();
    const fileNames =`RGSTR-${timestamp}.jpg`;
    const fileNamesV1 = './public/Images/Register/'+'RGSTR-'+index+'.jpg'
  
    if(fs.existsSync(fileNamesV1)){
      console.log(`${fileNamesV1}`+" already exists."+"\t"+"Skipping over to the next...");
      }else{
      blobClient = containerClient.getBlockBlobClient(element);

      downloadResult = await blobClient.downloadToFile(fileNamesV1);

      if (downloadResult?.errorCode) throw Error(downloadResult.errorCode);
      console.log(
      `${fileNamesV1} downloaded ${downloadResult?.contentType}, isCurrentVersion: ${downloadResult?.isCurrentVersion}`
      );
    }
  }

}

//Login
export const GetLoginPageImages = async () => {

    containerClient = blobServiceClient.getContainerClient(containerName as string);
    
    //Landing Page Images
    for (let index = 0; index < loginblobNames.length; index++) {
    
      const element = loginblobNames[index];
    
      const timestamp = Date.now().toPrecision();
      const fileNames =`LOD-${timestamp}.jpg`;
      const fileNamesV1 = './public/Images/'+'LOD-'+index+'.jpg'
    
      if(fs.existsSync(fileNamesV1)){
        console.log(`${fileNamesV1}`+" already exists."+"\t"+"Skipping over to the next...");
        }else{
        blobClient = containerClient.getBlockBlobClient(element);

        downloadResult = await blobClient.downloadToFile(fileNamesV1);
  
        if (downloadResult?.errorCode) throw Error(downloadResult.errorCode);
        console.log(
        `${fileNamesV1} downloaded ${downloadResult?.contentType}, isCurrentVersion: ${downloadResult?.isCurrentVersion}`
        );
      }
    }

}

//Landing
export const GetLandingPageImages = async () => {

  containerClient = blobServiceClient.getContainerClient(containerName as string);
  
  //Landing Page Images
  for (let index = 0; index < altlandingblobNames.length; index++) {
  
    const element = altlandingblobNames[index];
  
    const timestamp = Date.now().toPrecision();
    const fileNames =`LND-${timestamp}.jpg`;
    const fileNamesV2 = './public/Images/'+'LND-'+index+'.jpg'
  
    if(fs.existsSync(fileNamesV2)){
      console.log(`${fileNamesV2}`+" already exists."+"\t"+"Skipping over to the next...");
      }else{
      blobClient = containerClient.getBlockBlobClient(element);

      downloadResult = await blobClient.downloadToFile(fileNamesV2);

      if (downloadResult?.errorCode) throw Error(downloadResult.errorCode);
      console.log(
      `${fileNamesV2} downloaded ${downloadResult?.contentType}, isCurrentVersion: ${downloadResult?.isCurrentVersion}`
      );
    }
  }

}


//Main   
export const GetMainPageImages = async () =>{
    
    containerClient = blobServiceClient.getContainerClient(containerName as string);
    
    
         //Main Page Images
         for (let index = 0; index < SpringMainblobNames.length; index++) {
    
          const element = SpringMainblobNames[index];
    
          const timestamp = Date.now().toPrecision();
          const fileNames =`MN-${timestamp}.jpg`;
          const fileNamesV3 = './public/Images/'+'MN-'+index+'.jpg'
    
            if(fs.existsSync(fileNamesV3)){
                console.log(`${fileNamesV3}`+" already exists."+"\t"+"Skipping over to the next...");
            }else{
                blobClient = containerClient.getBlockBlobClient(element);
    
                downloadResult = await blobClient.downloadToFile(fileNamesV3);
          
                if (downloadResult?.errorCode) throw Error(downloadResult.errorCode);
                console.log(
                `${fileNamesV3} downloaded ${downloadResult?.contentType}, isCurrentVersion: ${downloadResult?.isCurrentVersion}`
                );
              }
            }
       
    
    }

//Clothing   
export const GetClothingMainPageImages = async () =>{
    
    containerClient = blobServiceClient.getContainerClient(containerName as string);

         //Main Page Images
         for (let index = 0; index < ClothingMainblobNames.length; index++) {
    
          const element = ClothingMainblobNames[index];
    
          const timestamp = Date.now().toPrecision();
          const fileNames =`CLTMN-${timestamp}.jpg`;
          const fileNamesV4 = './public/Images/Clothing/'+'CLTMN-'+index+'.jpg'
    
            if(fs.existsSync(fileNamesV4)){
                console.log(`${fileNamesV4}`+" already exists."+"\t"+"Skipping over to the next...");
            }else{
                blobClient = containerClient.getBlockBlobClient(element);
    
                downloadResult = await blobClient.downloadToFile(fileNamesV4);
          
                if (downloadResult?.errorCode) throw Error(downloadResult.errorCode);
                console.log(
                `${fileNamesV4} downloaded ${downloadResult?.contentType}, isCurrentVersion: ${downloadResult?.isCurrentVersion}`
                );
              }
            }
       
    
    }

//Footwear  
export const GetFootwearMainPageImages = async () =>{
    
     containerClient = blobServiceClient.getContainerClient(containerName as string);
    
          //Main Page Images
          for (let index = 0; index < footwearblobNames.length; index++) {
    
           const element = footwearblobNames[index];
    
           const timestamp = Date.now().toPrecision();
           const fileNames =`FTW-${timestamp}.jpg`;
           const fileNamesV5 = './public/Images/Footwear/'+'FTW-'+index+'.jpg'
    
             if(fs.existsSync(fileNamesV5)){
                 console.log(`${fileNamesV5}`+" already exists."+"\t"+"Skipping over to the next...");
             }else{
                 blobClient = containerClient.getBlockBlobClient(element);
    
                 downloadResult = await blobClient.downloadToFile(fileNamesV5);
          
                 if (downloadResult?.errorCode) throw Error(downloadResult.errorCode);
          
                 console.log(
                 `${fileNamesV5} downloaded ${downloadResult?.contentType}, isCurrentVersion: ${downloadResult?.isCurrentVersion}`
                 );
               }
             }
       
    
}

//Accessories 
export const GetAccessoryMainPageImages = async () =>{
    
     containerClient = blobServiceClient.getContainerClient(containerName as string);
    
          //Main Page Images
          for (let index = 0; index < accessoriesblobNames.length; index++) {
    
           const element = accessoriesblobNames[index];
    
           const timestamp = Date.now().toPrecision();
           const fileNames =`ACC-${timestamp}.jpg`;
           const fileNamesV6 = './public/Images/Accessories/'+'ACC-'+index+'.jpg'
    
             if(fs.existsSync(fileNamesV6)){
                 console.log(`${fileNamesV6}`+" already exists."+"\t"+"Skipping over to the next...");
             }else{
                 blobClient = containerClient.getBlockBlobClient(element);
    
                 downloadResult = await blobClient.downloadToFile(fileNamesV6);
          
                 if (downloadResult?.errorCode) throw Error(downloadResult.errorCode);
                 console.log(
                 `${fileNamesV6} downloaded ${downloadResult?.contentType}, isCurrentVersion: ${downloadResult?.isCurrentVersion}`
                 );
              }
             }
}