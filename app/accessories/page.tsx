import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import {Image} from "@nextui-org/image";
import {Spacer} from "@nextui-org/spacer";

export default function Main() {

    const Images: string[] = ["ACC-0.jpg","ACC-1.jpg","ACC-2.jpg",
        "ACC-3.jpg","ACC-4.jpg","ACC-5.jpg"]
    const ImagePaths: string[] = ["/Images/Accessories/"]



    return (
        <section className="">

        <Spacer y={8} />
        <div className="flex w-full h-full">

        <Card isFooterBlurred className="col-span-8 md:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Bandanas</p>
        </CardHeader>
            <Image removeWrapper src={ImagePaths[0]+Images[0]} className="z-0 w-[25rem] h-[30rem] object-cover"/>
        </Card>

        <Spacer x={4} />


        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Hats</p>
        </CardHeader>
            <Image removeWrapper src={ImagePaths[0]+Images[1]} className="z-0 w-[25rem] h-[30rem] object-cover"/>
        </Card>

        <Spacer x={4} />
        
        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Necklaces</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[2]} className="z-0 w-[25rem] h-[30rem] object-cover"/>
        </Card>

        <Spacer x={4} />
        </div>

        <div className="flex w-full h-full">

        <Spacer y={8} />
        
        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Perfumes</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[3]} className="z-0 w-[25rem] h-[30rem] object-cover"/>
        </Card>

        <Spacer x={4} />

        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Sunglasses</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[4]} className="z-0 w-[25rem] h-[30rem] object-cover"/>
        </Card>

        <Spacer x={4} />

        <Card isFooterBlurred className="col-span-8 sm:col-span-2">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Watches</p>
        </CardHeader>
        <Image removeWrapper src={ImagePaths[0]+Images[5]} className="z-0 w-[25rem] h-[30rem] object-cover"/>
        </Card>
        
        <Spacer x={4} />
        </div>

    </section>
    );

}