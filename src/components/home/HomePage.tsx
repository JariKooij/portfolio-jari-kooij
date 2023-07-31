import Hero from "./Hero";
import About from "./About";
import ProjectsDisplay from "./ProjectsDisplay";

const HomePage: React.FC = () => {
    return (
        <div className="px-small sm:px-medium lg:px-large">
            <Hero />
            <About />
            <ProjectsDisplay />
        </div>
    );
};

export default HomePage;
