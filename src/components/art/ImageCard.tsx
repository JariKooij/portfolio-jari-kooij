import Image from "next/image";
import Hover from "../common/Hover";
import { HostedImage } from "@/types";

type TProps = {
    image: HostedImage;
};

const ImageCard: React.FC<TProps> = ({ image }) => {
    return (
        <Hover type="image">
            <div className="group relative flex h-full grow flex-col justify-between gap-4 border-[1px] border-transparent-white bg-transparent-black p-4">
                <Image
                    src={image.url}
                    fill
                    sizes={"(max-width: 680px) 200vw, (max-width: 1000px) 100vw, 700px"}
                    alt={image.title}
                    className="custom_img transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                />
                <p className="my-4 text-center font-light">{image.title}</p>
            </div>
        </Hover>
    );
};

export default ImageCard;
