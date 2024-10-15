import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Spacer} from "@nextui-org/spacer";

export default function Main() {

    const Images: string[] = ["MN-0.jpg","MN-1.jpg","MN-2.jpg",
        "MN-3.jpg","MN-4.jpg","MN-5.jpg"]
    const ImagePaths: string[] = ["/Images/"]



    return (
        <section className="">

        <Spacer y={8} />
        <div className="flex w-full h-full">

        <Card isFooterBlurred className="col-span-8 md:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Bandanas</p>
        </CardHeader>
            <Image removeWrapper src={ImagePaths[0]+Images[1]} className="z-0 w-[25rem] h-[25rem] object-cover"/>
        </Card>

        <Spacer x={4} />


        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Hats</p>
        </CardHeader>
            <Image removeWrapper src={ImagePaths[0]+Images[1]} className="z-0 w-[25rem] h-[25rem] object-cover"/>
        </Card>

        <Spacer x={4} />
        
        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Necklacess</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[2]} className="z-0 w-[25rem] h-[25rem] object-cover"/>
        </Card>

        <Spacer x={4} />
        </div>
        
        <div className="flex w-full h-full">

        <Spacer y={8} />

        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Perfumes</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[3]} className="z-0 w-[25rem] h-[25rem] object-cover"/>
        </Card>

        <Spacer x={4} />

        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Sunglasses</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[4]} className="z-0 w-[25rem] h-[25rem] object-cover"/>
        </Card>

        <Spacer x={4} />

        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Watches</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[4]} className="z-0 w-[25rem] h-[25rem] object-cover"/>
        </Card>
        
        <Spacer x={4} />
        </div>

    </section>
    );

}