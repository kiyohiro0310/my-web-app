import { GetStaticProps, NextPage } from 'next';
import React from 'react'
import AllPostsList from '../../components/posts/posts-page/all-posts-list';
import { getAllFilesContent } from '../../lib/post-utils';
import { FileModel } from '../../Model/file-model';
import classes from "../../components/posts/posts-page/all-posts-list.module.scss";
import { connectToDatabase, getAllDBContent } from '../../lib/db-utils';
import { PostTemplate, templateForContent } from '../../lib/post-template';
import fs from 'fs';

interface TypeProps {
  posts: FileModel[],
  data: any
}

const AllPostsPage: NextPage<TypeProps> = (props) => {
  const { posts, data } = props;

  return (
    <div className={classes.main}>
      <h1>All Learn <span className={classes.color}>Posts</span></h1>
      <AllPostsList posts={posts}/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = await connectToDatabase();

  const allFilesContent = await getAllDBContent(client, "LearnPosts");

  const fileData: any[] = [];

  for(let i = 0; i < allFilesContent.length; i++){
    fileData.push({
      title: allFilesContent[i].title,
      description: allFilesContent[i].description,
      image: allFilesContent[i].image,
      date: allFilesContent[i].date,
      content: allFilesContent[i].content,
      lang: allFilesContent[i].lang,
      coding: allFilesContent[i].coding,
      link: allFilesContent[i].link
    })
  }

  fileData.map((fileContent) => {
    const fileName = (fileContent.date as string) + "_" + (fileContent.title as string).toLowerCase();
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

  const allPostsContent = getAllFilesContent();

  return {
    props: {
      posts: allPostsContent,
      data: fileData
    },
    revalidate: 1
  }
}
export default AllPostsPage