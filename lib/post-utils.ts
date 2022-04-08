import fs from "fs";
import path from "path";
import matter from "gray-matter"

const dirPath = path.join(process.cwd(), "posts");

export const getAllFiles = () => {
    const allFiles = fs.readdirSync(dirPath);
    return allFiles;
}

export const getOneFileContent = (file: string) => {
    const nameForSlug = file.replace(/\.md$/, '');
    const filePath = path.join(dirPath, `${nameForSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const { data, content } = matter(fileContent);

    const newContent = {
        slug: nameForSlug,
        ...data,
        content: content
    }

    return newContent;
}

export const getAllFilesContent = () => {
    const allFiles = getAllFiles();

    const allFilesContent = allFiles.map(file => getOneFileContent(file));

    const sortedFilesContent = allFilesContent.sort((fileA: any, fileB: any) => fileA.date > fileB.date ? -1 : 1);

    return sortedFilesContent;
}