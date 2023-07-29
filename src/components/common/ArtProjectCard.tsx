import Image from "next/image";
import Link from "next/link";

import SkillBubble from "./SkillBubble";

const ArtProjectCard: React.FC = () => {
    return (
        <article>
            <div className="group mb-3 rounded bg-transparent-grey p-small_medium lg:p-medium">
                <div className="flex items-start justify-between gap-6">
                    <div className="mb-2">
                        <h3 className="mb-3 text-20px font-medium">Digital art</h3>
                    </div>
                </div>

                <div className="mb-6 grid grid-cols-3 gap-6">
                    <div className="relative col-span-3 h-72 overflow-hidden rounded md:col-span-2">
                        <Image
                            src={"/images/projects/art/1.jpg"}
                            fill
                            sizes={"(max-width: 1320px) 70vw, (max-width: 768px) 200vw, 1200px"}
                            alt={""}
                            style={{ objectFit: "cover" }}
                            className="transition-all duration-1000 group-hover:scale-105"
                        />
                    </div>
                    <div className="relative hidden overflow-hidden rounded md:block">
                        <Image
                            src={"/images/projects/art/2.jpg"}
                            fill
                            sizes={"(max-width: 1320px) 70vw, 1200px"}
                            alt={""}
                            style={{ objectFit: "cover" }}
                            className="w-ful h-full transition-all duration-1000 group-hover:scale-125"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {["Photoshop", "Lightroom", "Adobe Creative Suite"].map((skill, i) => (
                        <SkillBubble key={skill + i} skill={skill} />
                    ))}
                </div>
            </div>

            <Link
                href={`/projects/art`}
                className="flex justify-between rounded bg-transparent-white px-6 py-4 transition-opacity hover:opacity-70 lg:px-8"
            >
                <span className="text-14px leading-1 sm:text-16px">Learn more</span>
                <Image src={"/icons/arrow-right.svg"} width={30} height={13} alt="Explore this project" />
            </Link>
        </article>
    );
};

export default ArtProjectCard;
