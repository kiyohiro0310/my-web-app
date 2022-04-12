import { MongoClient, WithId } from "mongodb";
import { PostTemplate, templateForContent } from "./post-template";
import fs from "fs";

export async function connectToDatabase() {
    const client = await MongoClient.connect("mongodb+srv://Kiyohiro:a1b2c3d4e5A@cluster0.mvh0o.mongodb.net/KiyoWebApp?retryWrites=true&w=majority");

    return client;
}

export const getAllDBContent = async (client: MongoClient, collection: string) => {
    const db = client.db();

    const allDBContents = db.collection(collection).find().toArray();

    return allDBContents;
}

export const createFiles = async (contents: WithId<PostTemplate>[] | any) => {
    const fileData: any[] = [];

  for(let i = 0; i < contents.length; i++){
    fileData.push({
      title: contents[i].title,
      description: contents[i].description,
      image: contents[i].image,
      date: contents[i].date,
      content: contents[i].content,
      lang: contents[i].lang,
      coding: contents[i].coding,
      link: contents[i].link
    })
  }

  fileData.map((fileContent) => {
    const fileName = (fileContent.date as string).replaceAll("-", "") + "_" + (fileContent.title as string).toLowerCase().replaceAll(" ", "");
    fs.writeFileSync(
      `posts/${fileName}.md`,
      templateForContent(
        fileContent.title,
        fileContent.description,
        fileContent.image,
        fileContent.date,
        fileContent.content,
        fileContent.lang,
        fileContent.coding,
        fileContent.link
      )
    )
  }
  )
}