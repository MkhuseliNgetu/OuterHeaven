import { Input } from "@nextui-org/input";
import {Image} from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { CircleArrowRight } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";

//Main Function
export default function Main_Register(){

const Images: string[] = ["RGSTR-0.jpg","RGSTR-1.jpg","RGSTR-2.jpg"]
const ImagePaths: string[] = ["/Images/Register/"]


    return(
        <section className="flex">
        {/* Image */}
        <div className="Login-Image-One">
        <Image removeWrapper src={ImagePaths[0]+Images[0]} className="z-0 w-[30rem] h-[45rem] object-cover"/>
        </div>
        {/* Image */}
        <div className="Login-Image-Two">
        <Image removeWrapper src={ImagePaths[0]+Images[1]} className="z-0 w-[30rem] h-[45rem] object-cover"/>
        </div>
        {/* Image */}
        <div className="Login-Image-Three">
        <Image removeWrapper src={ImagePaths[0]+Images[2]} className="z-0 w-[30rem] h-[45rem] object-cover"/>
        </div>
        {/* Form */}
        <div className="Login-Form">

            <span className="title-font">Register</span>
            <br />
            <form action="" method="post">
            <Input color="default" isRequired type="email" placeholder="Username" label="Username" radius="lg" size="md"/>
            <br />
            <Input isRequired type="Password" label="Password" placeholder="Password" radius="lg" size="md"/>
            <br/>
            <Popover placement="right">
                <PopoverTrigger>
                    <Button size="lg" color="primary" radius="full" endContent={ <CircleArrowRight />}>
                     Register
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-1 py-2">
                    <div className="text-small font-bold">Under Construction</div>
                    </div>
                </PopoverContent>
            </Popover>
            </form>
        </div>
        </section>
    );
}
