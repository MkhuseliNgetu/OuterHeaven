import { Button } from "@nextui-org/button";
import {Image} from "@nextui-org/image";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

import '../azure.Config'
import {GetMainPageImages} from '../azure.Blobs'

export default function Home() {

  const Images: string[] = ["LND-0.jpg","LND-1.jpg","LND-2.jpg"]
  const ImagePaths: string[] = ["/Images/"]


  
  return (

    <section className="flex flex-col items-left justify-left">
      <div className="LND-Three">
        <span className="title-font">Outer Heaven</span>
        <Button size="lg" color="primary" radius="full" endContent={ <ShoppingBag />}>
                    <Link href={'/main'}>Start Shopping</Link>
                    
        </Button>
      </div>
      <section className="LND-Zero">
        <Image src={ImagePaths[0]+Images[0]}
        alt="Home Image-0" className="LND-Zero-Img" />
      </section>
      <section className="LND-One">
        <Image src={ImagePaths[0]+Images[1]}
        alt="Home Image-1" className="LND-One-Img" />
      </section>

      <section className="LND-Two">
        <Image isBlurred src={ImagePaths[0]+Images[2]}
        alt="Home Image-2" className="LND-Two-Img" />
      </section>
    </section>
    
  );
}
