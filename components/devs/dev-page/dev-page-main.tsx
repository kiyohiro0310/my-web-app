import React, { useEffect, useState } from 'react'
import { ContentModel } from '../../../Model/dev-content-model';
import DevContents from './dev-page-content';
import classes from './dev-page.module.scss';
import { NextPage } from 'next';

const DevPage: NextPage= () => {
    const devs_content =
    [
      {
          "id": "a00001",
          "title": "ABC Optical",
          "date": "2022-3-25",
          "imgPath": "/images/devs/abc_optical.png",
          "description": "This single web page is created for tafe assessment task and test patterns of resonsive screen.So despite of single page website, this css code is quite long.",
          "link": "https://kiyohiro-abc-optical.netlify.app/"
      },
      {
          "id": "a00002",
          "title": "My First Page",
          "date": "2022-2-8",
          "imgPath": "/images/devs/first_page.png",
          "description": "This single web page is created for practice html and css. I leard how from Udemy.",
          "link": "https://kiyo-first-page.netlify.app/"
      }
    ]

  return (
    <div className={classes.list}>
        <DevContents devContents={devs_content}/>
    </div>
  )
}

export default DevPage