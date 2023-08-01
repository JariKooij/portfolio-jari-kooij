import Image from "next/image";
import Link from "next/link";

import socialIcons from "@/data/social-icons.json";
import Hover from "./Hover";

const SocialIcons: React.FC = () => {
    return (
        <>
            {socialIcons.map((icon: { url: string; img: string }) => (
                <Link key={icon.url} href={icon.url} target="_blank" className="transition-all hover:scale-125">
                    <Hover>
                        <Image src={icon.img} height={24} width={24} alt="linkedin" />
                    </Hover>
                </Link>
            ))}
        </>
    );
};

export default SocialIcons;
