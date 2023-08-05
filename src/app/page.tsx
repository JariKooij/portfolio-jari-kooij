import PageWrapper from "@/components/common/PageWrapper";
import HomePage from "@/components/home/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: "Portfolio Jari Kooij",
        description:
            "Hi there! My name is Jari Kooij, and I am a third year software engineering student at Windesheim University of Applied Sciences and recently started working as a Junior Software Developer at Het Medialab. Let's get in touch!",
        url: "/",
        siteName: "Portfolio Jari Kooij",
    },
};

export default function Home() {
    return (
        <PageWrapper>
            <HomePage />
        </PageWrapper>
    );
}
