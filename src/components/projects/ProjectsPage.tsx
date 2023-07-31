import Reveal from "../common/Reveal";
import ArtProjectSection from "./ArtProjectSection";
import ProjectsGridSection from "./ProjectsGridSection";
import ProjectsHero from "./ProjectsHero";

const ProjectsPage: React.FC = () => {
    return (
        <div className="px-small sm:px-medium lg:px-large">
            <div className="mx-auto max-w-full">
                <ProjectsHero />
                <ProjectsGridSection />

                <ArtProjectSection />
            </div>
        </div>
    );
};

export default ProjectsPage;
