import ArtPage from "@/components/art/ArtPage";
import PageWrapper from "@/components/common/PageWrapper";
import { readdir } from "fs/promises";
import { Metadata } from "next";
import images from "@/data/gallery-art-images.json";

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
    // const files = await readdir(process.cwd() + "/public/images/art");

    return (
        <PageWrapper>
            <ArtPage images={images} />
        </PageWrapper>
    );
};

export default Art;
