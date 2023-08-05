import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${process.cwd()}/sitemap.xml`,
    };
};

export default robots;
