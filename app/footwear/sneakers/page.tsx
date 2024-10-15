import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Spacer} from "@nextui-org/spacer";

//Main Function
export default function Main_Sneakers(){

        const Images: string[] = ["MN-0.jpg","MN-1.jpg","MN-2.jpg",
            "MN-3.jpg","MN-4.jpg","MN-5.jpg"]
        const ImagePaths: string[] = ["/Images/Footwear"]



        return (
            <section className="">
            {/* Main Banner */}
            <div className="flex">
                <Card isFooterBlurred className="col-span-8 sm:col-span-2" >
                <Image removeWrapper src={ImagePaths[0]+Images[0]} className="card-main-banner"/>
                <CardFooter className="absolute z-10 bottom-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">[placeholder percentage] off [sale type]</p>
                <h4 className="text-white font-medium text-large"> [sale type] sale</h4>
                </CardFooter>
            </Card>
            </div>

            <Spacer y={8} />
            <div className="flex">

            <Card isFooterBlurred className="col-span-8 sm:col-span-2">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">[placeholder percentage] off [sale type]</p>
            <h4 className="text-white font-medium text-large"> [sale type] sale</h4>
            </CardHeader>
                <Image removeWrapper src={ImagePaths[0]+Images[1]} className="card-images-lg"/>
            <CardFooter>
            </CardFooter>
            </Card>

            <Spacer x={4} />

            <Card isFooterBlurred className="col-span-8 sm:col-span-2">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">[placeholder percentage] off [sale type]</p>
            <h4 className="text-white font-medium text-large"> [sale type] sale</h4>
            </CardHeader>
            <Image removeWrapper src={ImagePaths[0]+Images[2]} className="card-images-lg"/>
            <CardFooter>
            </CardFooter>

            </Card>

            <Spacer x={4} />
            
            <Card isFooterBlurred className="col-span-12 sm:col-span-4">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">[placeholder percentage] off [sale type]</p>
            <h4 className="text-white font-medium text-large"> [sale type] sale</h4>
            </CardHeader>
            <Image removeWrapper src={ImagePaths[0]+Images[3]} className="card-images-lg"/>
            <CardFooter>
            </CardFooter>
            </Card>

            <Spacer x={4} />

            <Card isFooterBlurred className="col-span-12 sm:col-span-4">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">[placeholder percentage] off [sale type]</p>
            <h4 className="text-white font-medium text-large"> [sale type] sale</h4>
            </CardHeader>
            <Image removeWrapper src={ImagePaths[0]+Images[4]} className="card-images-lg"/>
            <CardFooter>
            </CardFooter>
            </Card>

            </div>

            <Spacer y={8} />
            {/* Sub-banner */}

            <div className="flex">
            <Card isFooterBlurred className="col-span-8 sm:col-span-2">
            <Image removeWrapper src={ImagePaths[0]+Images[5]} className="card-sub-banner"/>
            <CardFooter className="absolute z-10 bottom-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">[placeholder percentage] off [sale type]</p>
            <h4 className="text-white font-medium text-large"> [sale type] sale</h4>
            </CardFooter>
            </Card>
            </div>

            </section>
        );

}
