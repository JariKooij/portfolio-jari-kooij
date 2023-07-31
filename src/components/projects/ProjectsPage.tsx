import ArtProjectSection from "./ArtProjectSection";
import ProjectsGridSection from "./ProjectsGridSection";
import ProjectsHero from "./ProjectsHero";

const ProjectsPage: React.FC = () => {
    return (
        <div className="px-small sm:px-medium lg:px-large">
            <ProjectsHero />
            <ProjectsGridSection />
            <ArtProjectSection />
        </div>
    );
};

export default ProjectsPage;
