import Image from "next/image";
import Link from "next/link";

import SkillBubble from "./SkillBubble";

const ArtProjectCard: React.FC = () => {
    return (
        <div className="group mx-auto w-full max-w-5xl rounded bg-transparent-grey p-small_medium lg:p-medium">
            <div className="flex items-start justify-between gap-6">
                <div className="mb-2">
                    <h3 className="mb-3 text-16px font-medium sm:text-20px">Digital art and Photoshop compositing</h3>
                </div>
            </div>

            <div className="mb-6 grid grid-cols-3 gap-6">
                <div className="relative col-span-3 h-72 overflow-hidden rounded md:col-span-2">
                    <Image
                        src={"/images/projects/art/1.jpg"}
                        fill
                        sizes={"(max-width: 1320px) 70vw, (max-width: 768px) 200vw, 800px"}
                        alt={""}
                        style={{ objectFit: "cover" }}
                        className="transition-all duration-1000 group-hover:scale-105"
                    />
                </div>
                <div className="relative hidden overflow-hidden rounded md:block">
                    <Image
                        src={"/images/projects/art/2.jpg"}
                        fill
                        sizes={"(max-width: 1320px) 50vw, 800px"}
                        alt={""}
                        style={{ objectFit: "cover" }}
                        className="w-ful h-full transition-all duration-1000 group-hover:scale-125"
                    />
                </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
                {["Photoshop", "Lightroom", "Adobe Creative Suite"].map((skill, i) => (
                    <SkillBubble key={skill + i} skill={skill} />
                ))}
            </div>

            <Link
                href={`/projects/art`}
                className="flex justify-between rounded bg-transparent-white px-4 py-2 transition-opacity hover:opacity-70"
            >
                <span>Learn more</span>
                <Image src={"/icons/arrow-right.svg"} width={30} height={13} alt="Explore this project" />
            </Link>
        </div>
    );
};

export default ArtProjectCard;
