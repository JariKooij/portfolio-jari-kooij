import Image from "next/image";
import Link from "next/link";

import { Project } from "@/types";
import SkillBubble from "./SkillBubble";
import Hover from "./Hover";

type TProps = {
    project: Project;
};

const ProjectCard: React.FC<TProps> = ({ project }) => {
    return (
        <article className="flex grow flex-col">
            <div className="group flex grow flex-col justify-between gap-6 rounded-t bg-transparent-grey p-small sm:p-small_medium lg:p-medium">
                <div>
                    <div className="mb-6 mt-1 flex w-full items-start justify-between gap-2">
                        <h3 className="text-20px font-medium sm:text-24px">{project.title}</h3>
                        <Image
                            src={project.iconUrl}
                            height={project.iconHeight}
                            width={project.iconWidth}
                            alt={project.companyName}
                        />
                    </div>

                    <ul>
                        {project.contributions.map((item) => (
                            <li key={item} className="relative mb-2 flex last-of-type:mb-0">
                                <div className="rounded-lg bg-[#daf6ffa1] px-4 py-2 text-14px text-black sm:pr-8 sm:text-16px">
                                    {"// " + item}
                                </div>

                                <div className="grow">
                                    <div className="ml-auto h-full w-[calc(100%-8px)] rounded-lg bg-blue opacity-5" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                        <SkillBubble key={skill + i} skill={skill} />
                    ))}
                </div>
            </div>
            <Hover>
                <Link
                    href={`/projects/${project.id}`}
                    className="group flex justify-between rounded-b bg-transparent-white px-6 py-4 transition-opacity hover:opacity-70  lg:px-8"
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

export default ProjectCard;
