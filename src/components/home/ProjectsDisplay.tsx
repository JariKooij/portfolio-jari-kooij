import Link from "next/link";
import ProjectCard from "../common/ProjectCard";
import projects from "@/data/projects.json";
import ArtProjectCard from "../common/ArtProjectCard";

const ProjectsDisplay: React.FC = () => {
    return (
        <>
            <div className="mb-mobile_gap flex flex-col gap-medium overflow-x-hidden sm:mb-tablet_gap lg:mb-desktop_gap lg:gap-huuge">
                <h2 className="mr-[-.75em] text-center text-[6vw] font-medium tracking-huuge sm:text-24px lg:text-32px">
                    Featured projects
                </h2>

                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}

                <ArtProjectCard />

                <Link href="/projects" className="mx-auto text-14px font-medium hover:underline sm:text-16px">
                    Show me more!
                </Link>
            </div>
        </>
    );
};

export default ProjectsDisplay;
