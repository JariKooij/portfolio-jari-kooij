import Image from "next/image";
import { Project } from "@/types";
import Label from "../ui/Label";
import Link from "next/link";

type TProps = {
    project: Project;
};

const Specifications: React.FC<TProps> = ({ project }) => {
    return (
        <div>
            <div className="flex h-max flex-col gap-8 rounded bg-transparent-grey p-4 sm:p-8 lg:gap-16">
                <div className="flex items-center justify-between gap-8">
                    <div>
                        <Label>Company</Label>
                        <p>{project.companyName}</p>
                    </div>

                    <Image
                        src={project.iconUrl}
                        height={project.iconHeight}
                        width={project.iconWidth}
                        alt={project.companyName}
                    />
                </div>

                <div className="flex flex-col gap-8 lg:gap-16">
                    <div className="grow basis-0">
                        <Label>Contributions</Label>
                        <ul className="mt-2 flex flex-col gap-2">
                            {project.contributions.map((item, i) => (
                                <li key={item + i} className="rounded bg-[#daf6ffa1] p-4 leading-1 text-black">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grow basis-0">
                        <Label>Skills</Label>
                        <ul className="mt-2 flex flex-wrap gap-2">
                            {project.skills.map((item, i) => (
                                <li
                                    key={item + i}
                                    className="grow rounded bg-transparent-black p-4 text-center leading-1"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {project.demoUrl && (
                <Link
                    href={project.demoUrl}
                    className="mt-4 flex justify-between rounded bg-transparent-white p-4 transition-opacity hover:opacity-70 lg:px-8"
                >
                    <span className="text-14px leading-1 sm:text-16px">Visit demo</span>
                    <Image src={"/icons/arrow-right.svg"} width={30} height={13} alt="Explore this project" />
                </Link>
            )}
        </div>
    );
};

export default Specifications;
