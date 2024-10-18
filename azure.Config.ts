//Blob Service
import { useEffect } from 'react';
import BlobService from './azure.Blobs'

useEffect(() =>{
  main()
})


function main () {
  BlobService().then(() => console.log(`Azure Main Executed successfully`)).catch((err: unknown) => {
    if (err instanceof Error) {
      console.log(err.message);
    }
});
}



