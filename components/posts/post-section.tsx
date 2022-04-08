import React from 'react'
import PostItem from './post-item';
import classes from './post-section.module.scss';
import { FileModel } from '../../Model/file-model';
import { NextPage } from 'next';

interface TypeProps {
    allPosts: FileModel[];
}

const PostSection: NextPage<TypeProps> = (props) => {
    const { allPosts } = props;

    const ThreePosts = [];

    for(let i = 0; i < 3; i++) {
        if(allPosts[i]){
            ThreePosts.push(allPosts[i]);
        }
    }
  return (
    <div className = {classes.post_list}>
        <h1>Latest Learn</h1>
        {ThreePosts.map(post =>
            <PostItem key={post.slug} postContent={post}/>
        )}
    </div>
  )
}

export default PostSection