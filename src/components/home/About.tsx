import Image from "next/image";

import aboutText from "@/data/about-txt.json";
import skillIcons from "@/data/skill-icons.json";

const About: React.FC = () => {
    return (
        <div className="mx-auto mb-mobile_gap flex  max-w-[635px] flex-col gap-4 sm:mb-tablet_gap lg:mb-desktop_gap">
            <p className="mb-16 whitespace-pre-wrap text-justify text-[14px] [word-spacing:-.36em] sm:text-justify sm:text-base">
                {aboutText}
            </p>
            <div className="flex flex-wrap justify-center gap-2 gap-y-6 sm:gap-8">
                {skillIcons.map((icon) => (
                    <Image key={icon.title} src={icon.url} height={32} width={32} alt={icon.title} />
                ))}
            </div>
        </div>
    );
};

export default About;
