import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

import Layout from "@/components/layout/Layout";

const fira_code = Fira_Code({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_HOST!),
    title: {
        template: "%s | Portfolio Jari Kooij",
        default: "Portfolio Jari Kooij",
    },
    description:
        "Hi there! My name is Jari Kooij, and I am a third year software engineering student at Windesheim University of Applied Sciences and recently started working as a Junior Software Developer at Het Medialab. I like to experiment with new technologies and find it super rewarding and motivating to learn new skills and develop myself further. Let's get in touch!",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <Layout font={fira_code}>{children}</Layout>
        </html>
    );
};

export default RootLayout;
