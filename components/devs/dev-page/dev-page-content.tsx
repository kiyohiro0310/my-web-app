import React, { Fragment } from 'react'
import { ContentModel } from '../../../Model/dev-content-model';
import classes from './dev-page.module.scss';
import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

interface TypeProps{
    devContents: ContentModel[]
}
const DevContents: NextPage<TypeProps> = (props) => {
    const {devContents} = props;

  return (
      <Fragment>
            {devContents.map((devContent: ContentModel) => (
                <div className={classes.container} key={devContent.id}>
                  <Link href={devContent.link}>
                          <a className={classes.item_img}>
                              <div className={classes.img}>
                                  <Image src={devContent.imgPath} alt={devContent.title} width={280} height={200} />
                              </div>
                          </a>
                  </Link>
                  <div className={classes.item_description}>
                      <h2>{devContent.title}</h2>
                      <time>{devContent.date}</time>
                      <p>{devContent.description}</p>
                      <p className={classes.link}>
                          <Link href={"https://kiyohiro-abc-optical.netlify.app/"}><a>{devContent.link}</a></Link>
                      </p>
                  </div>
              </div>

            ))}

      </Fragment>

  )
}

export default DevContents;