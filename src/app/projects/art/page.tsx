import ArtPage from "@/components/art/ArtPage";
import PageWrapper from "@/components/common/PageWrapper";
import { readdir } from "fs/promises";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Art",
    description: `A gallery of digital artworkes I created.`,
    alternates: {
        canonical: `/projects/art`,
    },
    openGraph: {
        title: "Digital Art",
        description: `A gallery of digital artworkes I created.`,
        url: `/projects/art`,
        siteName: "Portfolio Jari Kooij",
    },
};

const Art: React.FC = async () => {
    // const files = await readdir(process.cwd() + "/public/images/projects/art");
    const files: string[] = [];
    return (
        <PageWrapper>
            <ArtPage files={files} />
        </PageWrapper>
    );
};

export default Art;
