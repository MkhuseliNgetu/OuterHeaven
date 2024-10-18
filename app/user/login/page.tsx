import { Input } from "@nextui-org/input";
import {Image} from "@nextui-org/image";

//Main Function
export default function Main_Login(){

const Images: string[] = ["LOD-1.jpg","LOD-2.jpg","LOD-3.jpg"]
const ImagePaths: string[] = ["/Images/"]

    return(
        <section className="flex">
        {/* Image */}
        <div className="Login-Image-One">
        <Image removeWrapper src={ImagePaths[0]+Images[0]} className="z-0 w-[40rem] h-[45rem] object-cover"/>
        </div>
        {/* Image */}
        <div className="Login-Image-Two">
        <Image removeWrapper src={ImagePaths[0]+Images[1]} className="z-0 w-[40rem] h-[45rem] object-cover"/>
        </div>
        {/* Image */}
        <div className="Login-Image-Three">
        <Image removeWrapper src={ImagePaths[0]+Images[2]} className="z-0 w-[40rem] h-[45rem] object-cover"/>
        </div>
        {/* Form */}
        <div className="Login-Form">

            <span className="title-font items-center">Login</span>
            <br />
            <form action="" method="post" className="">
            <Input color="default" isRequired type="email" label="Username" radius="lg"/>
            <br />
            <Input isRequired type="Password" label="Password" placeholder="Password" radius="lg"/>
            </form>
        </div>
        </section>
    );
}
