import Hero from "./Hero";
import About from "./About";
import ProjectsDisplay from "./ProjectsDisplay";

const HomePage: React.FC = () => {
    return (
        <div className="mx-auto h-full w-full max-w-full">
            <Hero />
            <About />
            <ProjectsDisplay />
        </div>
    );
};

export default HomePage;
