import SubTitle from "../ui/SubTitle";

const ProjectsHero: React.FC = () => {
    return (
        <div className="pb-8 pt-12 sm:pb-32 lg:pt-24">
            <h1 className="max-w-min text-[17vw] font-medium leading-1 md:text-9xl lg:max-w-max">Projects</h1>

            <span className="block h-full justify-self-end bg-white lg:w-[1px]" />

            <div className="max-w-[250px] sm:max-w-none">
                <SubTitle>{"Some of the projects I worked on recently"}</SubTitle>
            </div>
        </div>
    );
};

export default ProjectsHero;
