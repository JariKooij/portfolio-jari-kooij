import projects from "@/data/projects.json";

const sitemap = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_HOST;

    const projectUrls =
        projects?.map((project) => {
            return {
                url: `${baseUrl}/projects/${project.id}`,
                lastModified: new Date(),
            };
        }) ?? [];

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
        },
        ...projectUrls,
    ];
};

export default sitemap;
