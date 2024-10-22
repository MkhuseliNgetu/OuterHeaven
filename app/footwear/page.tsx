import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Spacer} from "@nextui-org/spacer";

export default function Main() {

    const Images: string[] = ["FTW-0.jpg","FTW-1.jpg","FTW-2.jpg",
        "FTW-3.jpg","FTW-4.jpg","FTW-5.jpg"]
    const ImagePaths: string[] = ["/Images/Footwear/"]


    return (
        <section className="">

        <Spacer y={8} />
        <div className="flex w-full h-full">

        <Card isFooterBlurred className="col-span-8 md:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Boots</p>
        </CardHeader>
            <Image removeWrapper src={ImagePaths[0]+Images[0]} className="z-0 w-[25rem] h-[30rem] object-cover"/>
        </Card>

        <Spacer x={4} />


        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Sneakers</p>
        </CardHeader>
            <Image removeWrapper src={ImagePaths[0]+Images[1]} className="z-0 w-[25rem] h-[30rem] object-cover"/>
        </Card>

        <Spacer x={4} />
        
        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Heels</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[2]} className="z-0 w-[25rem] h-[30rem] object-cover"/>
        </Card>

        <Spacer x={4} />
        </div>
        
        <div className="flex w-full h-full">

        <Spacer y={8} />

        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Sandels</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[3]} className="z-0 w-[25rem] h-[30rem] object-cover"/>
        </Card>

        <Spacer x={4} />

        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Loafers</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[4]} className="z-0 w-[25rem] h-[30rem] object-cover"/>
        </Card>

        <Spacer x={4} />

        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Espadrille</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[5]} className="z-0 w-[25rem] h-[30rem] object-cover"/>
        </Card>
        
        <Spacer x={4} />
        </div>

    </section>
    );

}