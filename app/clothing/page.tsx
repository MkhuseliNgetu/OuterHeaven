import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Spacer} from "@nextui-org/spacer";

export default function Main() {

    const Images: string[] = ["CLTMN-0.jpg","CLTMN-1.jpg","CLTMN-2.jpg",
        "CLTMN-3.jpg","CLTMN-4.jpg","CLTMN-5.jpg","CLTMN-6.jpg","CLTMN-7.jpg","CLTMN-8.jpg"];
    const ImagePaths: string[] = ["/Images/Clothing/"]

    return (
        <section className="">

        <Spacer y={8} />
        <div className="flex w-full h-full">

        <Card isFooterBlurred className="col-span-8 md:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Coats</p>
        </CardHeader>
            <Image removeWrapper src={ImagePaths[0]+Images[0]} className="z-0 w-[25rem] h-[25rem] object-cover"/>
        </Card>

        <Spacer x={4} />


        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Dresses</p>
        </CardHeader>
            <Image removeWrapper src={ImagePaths[0]+Images[1]} className="z-0 w-[25rem] h-[25rem] object-cover"/>
        </Card>

        <Spacer x={4} />
        
        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Hoodies</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[2]} className="z-0 w-[25rem] h-[25rem] object-cover"/>
        </Card>

        <Spacer x={4} />
        </div>
        
        <div className="flex w-full h-full">

        <Spacer y={8} />

        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Jackets</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[3]} className="z-0 w-[25rem] h-[25rem] object-cover"/>
        </Card>

        <Spacer x={4} />

        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Jeans</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[4]} className="z-0 w-[25rem] h-[25rem] object-cover"/>
        </Card>

        <Spacer x={4} />

        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Leggings</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[5]} className="z-0 w-[25rem] h-[25rem] object-cover"/>
        </Card>
        
        <Spacer x={4} />
        </div>

        <div className="flex w-full h-full">

        <Spacer y={8} />

        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Shirts</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[6]} className="z-0 w-[25rem] h-[25rem] object-cover"/>
        </Card>

        <Spacer x={4} />

        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Sweatpants</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[7]} className="z-0 w-[25rem] h-[25rem] object-cover"/>
        </Card>

        <Spacer x={4} />

        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Tops</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[8]} className="z-0 w-[25rem] h-[25rem] object-cover"/>
        </Card>
        
        <Spacer x={4} />
        </div>


    </section>
    );

}