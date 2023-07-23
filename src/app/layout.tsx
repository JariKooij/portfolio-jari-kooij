"use client";
import "./globals.css";
import type { Metadata } from "next";

import Layout from "@/components/layout/Layout";

// todo metadata

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return <Layout>{children}</Layout>;
};

export default RootLayout;
