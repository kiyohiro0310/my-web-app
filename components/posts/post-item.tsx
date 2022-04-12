import classes from './post-section.module.scss';
import React from 'react'

import { FileModel } from '../../Model/file-model';
import { NextPage } from 'next';

import Link from 'next/link';
import Image from 'next/image';

interface TypeProps {
  postContent: FileModel;
}

const PostItem: NextPage<TypeProps> = (props) => {
  const { title, description, image, date, slug, content } = props.postContent;

  const linkPath = `/posts/${slug}`;

  return (
    <Link href={linkPath}>
        <a className={classes.post_card}>
          <div className={classes.img}>
            <Image src={image} alt={description} width={280} height={200} layout="responsive"/>
          </div>
          <div className={classes.description}>
            <h2>{title}</h2>
            <h3>{date}</h3>
            <p>{description}</p>
          </div>
        </a>
    </Link>
  )
}

export default PostItem;