import { Project } from "@/types";
import Specifications from "./Specifications";
import { youtubeUrlValidator } from "@/utils";
import YoutubeIframe from "./YoutubeIframe";
import Image from "next/image";

type TProps = {
    project: Project;
    discussion: any;
};

const ProjectDetailsPage: React.FC<TProps> = ({ project, discussion }) => {
    const getVideoId = (url: string) => {
        const regResult = youtubeUrlValidator(url);
        return regResult![1] || regResult![2];
    };

    return (
        <article className="lg:px-large">
            <div className="mx-auto mb-12 flex max-w-full flex-col gap-8 pt-4 sm:mb-24 lg:gap-16 lg:pt-12">
                <h1 className="px-small text-40px font-medium leading-1 [word-spacing:-0.25em] sm:px-medium sm:text-48px lg:px-0 lg:text-64px">
                    {project.title}
                </h1>

                <div className="grid grid-cols-1 gap-x-large gap-y-huuge lg:grid-cols-[6fr_4fr]">
                    <Specifications project={project} />

                    <div
                        className="md order-last whitespace-pre-line px-small text-14px normal-case tracking-tight [word-spacing:-0.2em] sm:px-medium sm:text-16px lg:order-first lg:px-0"
                        dangerouslySetInnerHTML={{ __html: discussion || "" }}
                    />
                </div>

                <div className="flex flex-col gap-16 px-small sm:px-medium lg:px-0">
                    {project.videoUrl && (
                        <div className="flex h-min flex-col justify-between gap-4 lg:flex-row ">
                            <div className="grow rounded-lg bg-transparent-black px-8 py-4 sm:py-8 lg:rounded">
                                <div className="flex h-min w-full shrink-0 grow items-center justify-between gap-4 lg:min-w-max">
                                    <span className="text-24px font-medium">Video</span>
                                    <Image
                                        src={"/icons/video.svg"}
                                        height={40}
                                        width={40}
                                        alt={"video"}
                                        className="opacity-90"
                                    />
                                </div>
                            </div>

                            <div className="mx-auto w-full max-w-small overflow-hidden rounded-lg bg-transparent-black">
                                <YoutubeIframe
                                    title={project.title + " - YouTube video"}
                                    vidId={getVideoId(project.videoUrl)}
                                />
                            </div>
                        </div>
                    )}

                    {project.images && (
                        <div className="flex flex-col justify-between gap-4 lg:flex-row">
                            <div className="grow rounded-lg bg-transparent-black px-8 py-4 sm:py-8 lg:rounded">
                                <div className="flex h-min w-full shrink-0 grow items-center justify-between gap-4 lg:min-w-max">
                                    <span className="text-24px font-medium">
                                        {project.images.length > 1 ? "Images" : "Image"}
                                    </span>
                                    <Image
                                        src={"/icons/image.svg"}
                                        height={40}
                                        width={40}
                                        alt={"image(s)"}
                                        className="opacity-90"
                                    />
                                </div>
                            </div>

                            <div className="flex w-full max-w-small flex-col gap-8">
                                {project.images.map((image) => (
                                    <div
                                        className="relative mx-auto w-full gap-4 overflow-hidden rounded-lg"
                                        key={image}
                                    >
                                        <Image
                                            src={image}
                                            fill
                                            sizes={"(max-width: 1240px) 100vw, 2000px"}
                                            alt={""}
                                            className="custom_img"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProjectDetailsPage;
