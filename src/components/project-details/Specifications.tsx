import Image from "next/image";
import { Project } from "@/types";
import Label from "../ui/Label";
import Link from "next/link";

type TProps = {
    project: Project;
};

const Specifications: React.FC<TProps> = ({ project }) => {
    return (
        <div className="lg:pr-large">
            <div className="flex h-max flex-col gap-12 bg-transparent-grey px-small py-medium sm:px-medium lg:gap-16 lg:rounded lg:p-8">
                <div className="flex items-center justify-between gap-8">
                    <div>
                        <Label>Company</Label>
                        <p className="text-14px sm:text-16px">{project.companyName}</p>
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
                                <li
                                    key={item + i}
                                    className="rounded bg-[#daf6ffa1] p-3 text-14px leading-1 text-black sm:p-4 sm:text-16px"
                                >
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
                                    className="grow rounded bg-transparent-black p-3 text-center text-14px leading-1 sm:p-4 sm:text-16px"
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
                    className="mt-small flex justify-between bg-transparent-white p-4 transition-opacity hover:opacity-70 sm:mx-medium sm:rounded lg:mx-0 lg:px-8"
                >
                    <span className="text-14px leading-1 sm:text-16px">Visit demo</span>
                    <Image src={"/icons/arrow-right.svg"} width={30} height={13} alt="Explore this project" />
                </Link>
            )}
        </div>
    );
};

export default Specifications;
