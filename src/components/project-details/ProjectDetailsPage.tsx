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
        <article className="mx-auto mb-mobile_gap flex max-w-full flex-col gap-8 pt-12 sm:mb-desktop_gap lg:gap-16">
            <h1 className="text-40px font-medium leading-1 sm:text-48px lg:text-64px">{project.title}</h1>

            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[6fr_4fr]">
                <Specifications project={project} />

                <div
                    className="md order-last whitespace-pre-line pt-8 text-14px normal-case tracking-tight [word-spacing:-0.2em] sm:text-16px lg:order-first"
                    dangerouslySetInnerHTML={{ __html: discussion || "" }}
                />
            </div>

            <div className="flex flex-col gap-16 rounded">
                {project.videoUrl && (
                    <div className="flex h-min flex-col justify-between gap-4 lg:flex-row ">
                        <div className="grow rounded bg-transparent-grey p-8">
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

                        <div className="mx-auto w-full max-w-small overflow-hidden rounded-md bg-transparent-black">
                            <YoutubeIframe
                                title={project.title + " - YouTube video"}
                                vidId={getVideoId(project.videoUrl)}
                            />
                        </div>
                    </div>
                )}

                {project.images && (
                    <div className="flex flex-col justify-between gap-4 lg:flex-row">
                        <div className="grow rounded bg-transparent-black p-8">
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
                                <div className="relative mx-auto w-full gap-4 overflow-hidden rounded-md" key={image}>
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
        </article>
    );
};

export default ProjectDetailsPage;
