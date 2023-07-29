"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

import Layout from "@/components/layout/Layout";

const fira_code = Fira_Code({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

// todo metadata

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <Layout font={fira_code}>{children}</Layout>
        </html>
    );
};

export default RootLayout;
