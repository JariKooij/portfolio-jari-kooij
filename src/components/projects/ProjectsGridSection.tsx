import projects from "@/data/projects.json";
import ProjectCard from "../common/ProjectCard";

const ProjectsGridSection: React.FC = () => {
    return (
        <section className="mb-48 grid justify-stretch gap-8 lg:grid-cols-2">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </section>
    );
};

export default ProjectsGridSection;
