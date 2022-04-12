import { GetStaticProps, NextPage } from 'next';
import React from 'react'
import AllPostsList from '../../components/posts/posts-page/all-posts-list';
import { getAllFilesContent } from '../../lib/post-utils';
import { FileModel } from '../../Model/file-model';
import classes from "../../components/posts/posts-page/all-posts-list.module.scss";
import { connectToDatabase, getAllDBContent, createFiles } from '../../lib/db-utils';
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

  createFiles(allFilesContent)

  const allPostsContent = getAllFilesContent();

  return {
    props: {
      posts: allPostsContent,
    },
    revalidate: 600
  }
}
export default AllPostsPage