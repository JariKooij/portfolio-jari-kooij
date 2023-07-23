import Image from "next/image";
import Link from "next/link";

import { Project } from "@/types";
import SkillBubble from "./SkillBubble";

type TProps = {
    project: Project;
};

const ProjectCard: React.FC<TProps> = ({ project }) => {
    return (
        <div className="mx-auto w-full max-w-5xl rounded bg-transparent-grey p-small_medium lg:p-medium">
            <div className="flex items-start justify-between gap-6">
                <div className="mb-8">
                    <h3 className="mb-6 text-16px font-medium sm:mb-3 sm:text-20px">{project.title}</h3>
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

            <div className="mb-5 flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                    <SkillBubble key={skill + i} skill={skill} />
                ))}
            </div>

            <Link
                href={`/projects/${project.id}`}
                className="flex justify-between rounded bg-transparent-white px-4 py-2 transition-opacity hover:opacity-70"
            >
                <span>Learn more</span>
                <Image src={"/icons/arrow-right.svg"} width={30} height={13} alt="Explore this project" />
            </Link>
        </div>
    );
};

export default ProjectCard;
