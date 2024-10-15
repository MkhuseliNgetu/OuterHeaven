//Blob Service
import BlobService from './azure.Blobs'


async function main () {
  BlobService()
}

main().then(() => console.log(`Azure Main Executed successfully`)).catch((err: unknown) => {
     if (err instanceof Error) {
       console.log(err.message);
     }
});

