import Image from "next/image";
import Link from "next/link";

import SkillBubble from "./SkillBubble";
import Hover from "./Hover";

const ArtProjectCard: React.FC = () => {
    return (
        <Hover>
            <Link href={`/projects/art`} className="flex grow">
                <article className="flex grow flex-col transition-transform duration-200 hover:scale-[.98]">
                    <div className="group grow rounded-t bg-transparent-grey p-small_medium lg:p-medium">
                        <div className="mb-6 flex justify-between gap-6">
                            <h3 className="text-20px font-medium sm:text-24px">Digital art</h3>
                            <Image src={"/icons/smile.svg"} height={32} width={32} alt="personal project" />
                        </div>

                        <div className="mb-6 grid grid-cols-3 gap-6">
                            <div className="relative col-span-3 h-40 overflow-hidden rounded-lg md:col-span-2 md:h-64">
                                <Image
                                    src={"https://storage.googleapis.com/portfolio-jari-kooij/art/FLOATING.jpg"}
                                    fill
                                    sizes={"(max-width: 768px) 150vw, (max-width: 1320px) 100vw,  1200px"}
                                    alt={""}
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className="relative hidden overflow-hidden rounded-lg md:block">
                                <Image
                                    src={"https://storage.googleapis.com/portfolio-jari-kooij/art/ISOLATION.jpg"}
                                    fill
                                    sizes={"(max-width: 1320px) 50vw, 1200px"}
                                    alt={""}
                                    style={{ objectFit: "cover" }}
                                    className="w-ful h-full"
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {["Photoshop", "Lightroom", "Adobe Creative Suite"].map((skill, i) => (
                                <SkillBubble key={skill + i} skill={skill} />
                            ))}
                        </div>
                    </div>

                    <button className="group flex grow justify-between rounded-b bg-transparent-white px-6 py-4 uppercase transition-opacity hover:opacity-70 lg:px-8">
                        <span className="text-14px leading-1 sm:text-16px">Visit gallery</span>
                        <Image
                            src={"/icons/arrow-right.svg"}
                            width={30}
                            height={13}
                            alt="Explore this project"
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </button>
                </article>
            </Link>
        </Hover>
    );
};

export default ArtProjectCard;
