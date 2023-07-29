import Hero from "./Hero";
import About from "./About";
import ProjectsDisplay from "./ProjectsDisplay";

const HomePage: React.FC = () => {
    return (
        <div>
            <Hero />
            <About />
            <ProjectsDisplay />
        </div>
    );
};

export default HomePage;
