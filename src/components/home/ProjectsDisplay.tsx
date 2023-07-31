import Link from "next/link";

import projects from "@/data/projects.json";
import ProjectCard from "../common/ProjectCard";
import ArtProjectCard from "../common/ArtProjectCard";
import Reveal from "../common/Reveal";

const ProjectsDisplay: React.FC = () => {
    return (
        <>
            <div className="mx-auto mb-mobile_gap flex max-w-small flex-col gap-medium overflow-x-hidden sm:mb-desktop_gap lg:gap-huuge">
                <h2 className="mr-[-.75em] text-center text-[7vw] font-medium tracking-huuge sm:text-24px lg:text-32px">
                    Featured projects
                </h2>

                {projects.map((project) =>
                    project.featured && !project.hidden ? (
                        <Reveal key={project.id} transition="moveUp">
                            <ProjectCard key={project.id} project={project} />
                        </Reveal>
                    ) : null
                )}

                <Reveal transition="moveUp">
                    <ArtProjectCard />
                </Reveal>

                <Link href="/projects" className="mx-auto text-14px font-medium hover:underline sm:text-16px">
                    Show me more!
                </Link>
            </div>
        </>
    );
};

export default ProjectsDisplay;
