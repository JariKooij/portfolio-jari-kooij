import PageWrapper from "@/components/common/PageWrapper";
import ProjectsPage from "@/components/projects/ProjectsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Some of the projects I worked on recently",
    alternates: {
        canonical: `/projects`,
    },
    openGraph: {
        title: "Projects",
        description: "Some of the projects I worked on recently",
        url: "/projects",
        siteName: "jarikooij.com",
    },
};

const Projects: React.FC = () => {
    return (
        <PageWrapper>
            <ProjectsPage />
        </PageWrapper>
    );
};

export default Projects;
