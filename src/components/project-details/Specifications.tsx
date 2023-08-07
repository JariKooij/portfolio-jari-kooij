import Image from "next/image";
import { Project } from "@/types";
import Label from "../ui/Label";
import Link from "next/link";
import Hover from "../common/Hover";

type TProps = {
    project: Project;
};

const Specifications: React.FC<TProps> = ({ project }) => {
    return (
        <div className="ml-small overflow-hidden rounded-l sm:ml-medium lg:ml-0">
            <div
                className={`flex h-max flex-col gap-12 bg-transparent-grey px-small py-medium sm:px-medium lg:gap-16 ${
                    project.demoUrl ? "lg:rounded-t" : "lg:rounded"
                } lg:p-8`}
            >
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
                                <li key={item + i} className="flex">
                                    <div className="rounded-lg bg-[#daf6ffa1] p-3 pr-6 text-14px leading-1 text-black sm:px-4 sm:pr-8 sm:text-16px lg:pr-6">
                                        {"// " + item}
                                    </div>

                                    <div className="grow">
                                        <div className="ml-auto h-full w-[calc(100%-8px)] rounded-lg bg-blue opacity-5" />
                                    </div>
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
                                    className="grow rounded-lg bg-transparent-black p-3 text-center text-14px leading-1 sm:px-4 sm:text-16px"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {project.demoUrl && (
                <Hover>
                    <Link
                        href={project.demoUrl}
                        target="_blank"
                        className="group flex grow justify-between bg-transparent-white px-4 py-6 transition-opacity hover:opacity-70  md:px-medium lg:mx-0 lg:rounded-b lg:px-8"
                    >
                        <span className="text-14px leading-1 sm:text-16px">Visit demo</span>
                        <Image
                            src={"/icons/arrow-right.svg"}
                            width={30}
                            height={13}
                            alt="Explore this project"
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </Link>
                </Hover>
            )}
        </div>
    );
};

export default Specifications;
