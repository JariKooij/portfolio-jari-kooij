import PageWrapper from "@/components/common/PageWrapper";
import ProjectDetailsPage from "@/components/project-details/ProjectDetailsPage";
import projects from "@/data/projects.json";
import { notFound } from "next/navigation";
import * as fs from "fs";
import { processMarkdown } from "@/utils";
import { join } from "path";

type TProps = {
    params: {
        id: string;
    };
};

const ProjectDetails: React.FC<TProps> = async ({ params }) => {
    const project = projects.find((project) => project.id === parseInt(params.id));
    if (!project) notFound();

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
