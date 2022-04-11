import classes from './all-posts-list.module.scss';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react'
import { FileModel } from '../../../Model/file-model'
import Image from "next/image";

interface TypeProps {
    post: FileModel;
}
const AllPostsItem: NextPage<TypeProps> = (props) => {
    const { slug, title, description, image, date, content } = props.post;

    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
      <Link href={linkPath}>
          <a className={classes.post_card}>
            <div className={classes.img}>
              <Image src={imagePath} alt={description} width={180} height={120} />
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

export default AllPostsItem