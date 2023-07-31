import Hero from "./Hero";
import About from "./About";
import ProjectsDisplay from "./ProjectsDisplay";

const HomePage: React.FC = () => {
    return (
        <div className="px-small sm:px-medium lg:px-large">
            <div className="mx-auto max-w-full">
                <Hero />
                <About />
                <ProjectsDisplay />
            </div>
        </div>
    );
};

export default HomePage;
