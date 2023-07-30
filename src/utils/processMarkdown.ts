import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";

export const processMarkdown = async (value: any) => {
    const matterResult = matter(value);

    const processedContent = await remark().use(remarkGfm).use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return contentHtml;
};
