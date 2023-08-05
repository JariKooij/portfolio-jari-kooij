import PageWrapper from "@/components/common/PageWrapper";
import ProjectDetailsPage from "@/components/project-details/ProjectDetailsPage";
// import projects from "@/data/projects.json";
import { notFound } from "next/navigation";
import * as fs from "fs";
import { processMarkdown } from "@/utils";
import { join } from "path";
import { Metadata } from "next";

type TProps = {
    params: {
        id: string;
    };
};

const projects = [
    {
        id: 1,
        featured: true,
        title: "Capgemini internships platform",
        companyName: "Capgemini NL",
        contributions: ["Front-end development", "UX/UI design"],
        skills: ["Next.js", "TypeScript", "SCSS", "Figma", "Scrum"],
        iconUrl: "/icons/projects/capgemini.svg",
        iconHeight: 40,
        iconWidth: 43,
        demoUrl: "https://www.google.com",
        discussionPath: "/markdown/discussion-1.md",
        images: ["/images/projects/capgemini/1.jpg", "/images/projects/capgemini/2.jpg"],
        hidden: false,
    },
    {
        id: 2,
        featured: true,
        title: "DDAMA AR Art-Tour APP",
        companyName: "Dutch Digital Art Museum Almere",
        contributions: ["App development", "Front-end development", "UX/UI design"],
        skills: ["Unity", "C#", "React", "SCSS", "Figma"],
        iconUrl: "/icons/projects/ddama.svg",
        iconHeight: 40,
        iconWidth: 40,
        discussionPath: "/markdown/discussion-1.md",
        videoUrl: "https://www.youtube.com/watch?v=p01JA8ch2Ns",
        hidden: false,
    },
    {
        id: 3,
        featured: false,
        title: "Salesprof",
        companyName: "Capgemini",
        contributions: ["Front-end development", "Backend development"],
        skills: ["Next.js", "TypeScript", "SCSS", "Figma"],
        iconUrl: "/icons/projects/capgemini.svg",
        iconHeight: 40,
        iconWidth: 43,
        discussionPath: "/markdown/discussion-1.md",
        hidden: false,
    },
    {
        id: 4,
        featured: false,
        title: "Personal portfolio",
        companyName: "Dutch Digital Art Museum Almere",
        contributions: ["App development", "Front-end development", "UX/UI design"],
        skills: ["Unity", "C#", "React", "SCSS", "Figma"],
        iconUrl: "/icons/projects/ddama.svg",
        iconHeight: 40,
        iconWidth: 40,
        discussionPath: "/markdown/discussion-1.md",
        hidden: false,
    },
];

export const generateStaticParams = async () => {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
};

const fetchProject = (id: string) => {
    const project = projects.find((project) => project.id === parseInt(id));
    if (!project) notFound();

    return project;
};

export const generateMetadata = async ({ params }: TProps): Promise<Metadata> => {
    const { id } = params;

    const project = fetchProject(id);

    return {
        title: project.title,
        description: `A discription of the project "${project.title}", to which I contributed`,
        alternates: {
            canonical: `/projects/${project.id}`,
        },
        openGraph: {
            title: project.title,
            description: `A discription of the project "${project.title}", to which I contributed`,
            url: `/projects/${project.id}`,
            siteName: "Portfolio Jari Kooij",
        },
    };
};

const ProjectDetails: React.FC<TProps> = async ({ params }) => {
    const project = fetchProject(params.id);

    const filePath = join(process.cwd(), "public", project.discussionPath!);

    const discussionMd = fs.readFileSync(filePath, "utf8");
    const processedMd = discussionMd ? await processMarkdown(discussionMd) : undefined;

    return (
        <PageWrapper>
            <ProjectDetailsPage project={project} discussion={processedMd} />
        </PageWrapper>
    );
};

export default ProjectDetails;
