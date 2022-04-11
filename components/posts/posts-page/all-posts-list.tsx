import classes from './all-posts-list.module.scss';
import { NextPage } from 'next'
import React from 'react'
import { FileModel } from '../../../Model/file-model'
import AllPostsItem from './all-posts-item'

interface TypeProps {
  posts: FileModel[]
}
const AllPostsList: NextPage<TypeProps> = (props) => {
  const { posts } = props;

  return (
    <div className={classes.post_list}>
      {posts.map((post) => ( <AllPostsItem key={post.slug} post={post}/>))}
    </div>
  )
}

export default AllPostsList;