import { GetStaticProps, NextPage } from 'next';
import React from 'react'
import AllPostsList from '../../components/posts/posts-page/all-posts-list';
import { getAllFilesContent } from '../../lib/post-utils';
import { FileModel } from '../../Model/file-model';
import classes from "../../components/posts/posts-page/all-posts-list.module.scss";

interface TypeProps {
  posts: FileModel[]
}

const AllPostsPage: NextPage<TypeProps> = (props) => {
  const { posts } = props;

  return (
    <div className={classes.main}>
      <h1>All Learn <span className={classes.color}>Posts</span></h1>
      <AllPostsList posts={posts}/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const allFilesContent = getAllFilesContent();

  return {
    props: {
      posts: allFilesContent
    }
  }
}
export default AllPostsPage