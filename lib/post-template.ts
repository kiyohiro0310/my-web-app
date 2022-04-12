export interface PostTemplate {
    _id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    content: string;
    lang: string;
    coding: string;
    link: string;
}

export function templateForContent(
    title: string,
    description: string,
    image: string,
    date: string,
    content: string,
    lang: string,
    coding: string,
    link: string
    ){
    return `---
    title: ${title}
    description: ${description}
    image: ${image}
    date: ${date}
---

${content}

\`\`\`${lang}
${coding}
\`\`\`

Click [here](${link}) to learn more.`
    };