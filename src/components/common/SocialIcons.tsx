import Image from "next/image";
import Link from "next/link";

import socialIcons from "@/data/social-icons.json";

const SocialIcons: React.FC = () => {
    return (
        <>
            {socialIcons.map((icon: { url: string; img: string }) => (
                <Link key={icon.url} href={icon.url} target="_blank" className="transition-all hover:scale-125">
                    <Image src={icon.img} height={24} width={24} alt="linkedin" />
                </Link>
            ))}
        </>
    );
};

export default SocialIcons;
