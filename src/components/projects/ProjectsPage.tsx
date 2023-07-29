import ArtProjectSection from "./ArtProjectSection";
import ProjectsGridSection from "./ProjectsGridSection";
import ProjectsHero from "./ProjectsHero";

const ProjectsPage: React.FC = () => {
    return (
        <div>
            <ProjectsHero />
            <ProjectsGridSection />
            <ArtProjectSection />
        </div>
    );
};

export default ProjectsPage;
