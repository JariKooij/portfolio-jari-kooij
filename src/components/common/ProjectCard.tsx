import Image from "next/image";
import Link from "next/link";

import { Project } from "@/types";
import SkillBubble from "./SkillBubble";

type TProps = {
    project: Project;
};

const ProjectCard: React.FC<TProps> = ({ project }) => {
    return (
        <article className="flex flex-col">
            <div className="group flex grow flex-col justify-between rounded-t bg-transparent-grey p-small_medium lg:p-medium">
                <div className="flex items-start justify-between gap-6">
                    <div className="mb-8">
                        <h3 className="mb-6 text-20px font-medium">{project.title}</h3>
                        <ul>
                            {project.contributions.map((item) => (
                                <li
                                    key={item}
                                    className="relative mb-2 pl-5 text-14px font-light before:absolute before:-translate-x-5 before:content-['-'] sm:text-16px"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Image
                        src={project.iconUrl}
                        height={project.iconHeight}
                        width={project.iconWidth}
                        alt={project.companyName}
                    />
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                        <SkillBubble key={skill + i} skill={skill} />
                    ))}
                </div>
            </div>

            <Link
                href={`/projects/${project.id}`}
                className="flex justify-between rounded-b bg-transparent-white px-6 py-4 transition-opacity hover:opacity-70 lg:px-8"
            >
                <span className="text-14px leading-1 sm:text-16px">Learn more</span>
                <Image src={"/icons/arrow-right.svg"} width={30} height={13} alt="Explore this project" />
            </Link>
        </article>
    );
};

export default ProjectCard;
