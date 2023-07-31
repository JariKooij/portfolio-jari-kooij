"use client";
import projects from "@/data/projects.json";
import ProjectCard from "../common/ProjectCard";
import Reveal from "../common/Reveal";

const ProjectsGridSection: React.FC = () => {
    return (
        <section className="mb-24 grid justify-stretch gap-8 sm:mb-mobile_gap lg:grid-cols-2">
            {projects.map((project, i) =>
                !project.hidden ? (
                    <Reveal key={project.id} transition="moveUp">
                        <ProjectCard project={project} />
                    </Reveal>
                ) : null
            )}
        </section>
    );
};

export default ProjectsGridSection;
