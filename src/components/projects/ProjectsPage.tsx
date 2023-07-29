import ArtProjectSection from "./ArtProjectSection";
import ProjectsGridSection from "./ProjectsGridSection";
import ProjectsHero from "./ProjectsHero";

const ProjectsPage: React.FC = () => {
    return (
        <div className="mx-auto h-full w-full max-w-full">
            <ProjectsHero />
            <ProjectsGridSection />
            <ArtProjectSection />
        </div>
    );
};

export default ProjectsPage;
