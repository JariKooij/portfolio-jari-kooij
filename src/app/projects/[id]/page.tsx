import PageWrapper from "@/components/common/PageWrapper";
import ProjectDetailsPage from "@/components/project-details/ProjectDetailsPage";
import projects from "@/data/projects.json";
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
            siteName: "jarikooij.com",
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
