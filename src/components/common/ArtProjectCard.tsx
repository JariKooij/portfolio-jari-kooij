import Image from "next/image";
import Link from "next/link";

import SkillBubble from "./SkillBubble";
import Hover from "./Hover";

const ArtProjectCard: React.FC = () => {
    return (
        <article className="grow">
            <div className="group grow rounded-t bg-transparent-grey p-small_medium lg:p-medium">
                <div className="mb-6 flex justify-between gap-6">
                    <h3 className="text-20px font-medium">Digital art</h3>
                    <Image src={"/icons/smile.svg"} height={32} width={32} alt="personal project" />
                </div>

                <div className="mb-6 grid grid-cols-3 gap-6">
                    <div className="relative col-span-3 h-40 overflow-hidden rounded-lg md:col-span-2 md:h-64">
                        <Image
                            src={"https://storage.googleapis.com/portfolio-jari-kooij/art/FLOATING.jpg"}
                            fill
                            sizes={"(max-width: 1320px) 70vw, (max-width: 768px) 200vw, 1200px"}
                            alt={""}
                            style={{ objectFit: "cover" }}
                            className="transition-all duration-1000 group-hover:scale-105"
                        />
                    </div>
                    <div className="relative hidden overflow-hidden rounded-lg md:block">
                        <Image
                            src={"https://storage.googleapis.com/portfolio-jari-kooij/art/ISOLATION.jpg"}
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

            <Hover>
                <Link
                    href={`/projects/art`}
                    className="group flex justify-between rounded-b bg-transparent-white px-6 py-4 transition-opacity hover:opacity-70 lg:px-8"
                >
                    <span className="text-14px leading-1 sm:text-16px">Learn more</span>
                    <Image
                        src={"/icons/arrow-right.svg"}
                        width={30}
                        height={13}
                        alt="Explore this project"
                        className="transition-transform group-hover:translate-x-1"
                    />
                </Link>
            </Hover>
        </article>
    );
};

export default ArtProjectCard;
