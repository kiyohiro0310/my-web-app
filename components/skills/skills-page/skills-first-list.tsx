import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import classes from "./skills-page.module.scss";

const SkillsFirstList = () => {
  return (
    <div className={classes.container}>
      <div className={classes.subHeader}>
        <div className={classes.img}>
          <Image src="/images/skills/skills-page/first/front_logo.png" alt="labtop image" width={100} height={100}/>
        </div>
        <div className={classes.img_description}>
          <h1>Front side</h1>
        </div>
      </div>


      <div className={classes.list}>
        <Link href="https://www.w3schools.com/html/">
          <a className={classes.box}>
            <Image src="/images/skills/skills-page/first/html-5.png" alt="html image" width={170} height={170}/>
            <h2>HTML 5</h2>
          </a>
        </Link>
        <Link href="https://www.w3schools.com/css/">
          <a className={classes.box}>
            <Image src="/images/skills/skills-page/first/css-3.png" alt="css image" width={170} height={170}/>
            <h2>CSS 3</h2>
          </a>
        </Link>
        <Link href="https://sass-lang.com/documentation/cli/dart-sass">
          <a className={classes.box}>
            <Image src="/images/skills/skills-page/first/sass.png" alt="sass image" width={170} height={170}/>
            <h2>Sass</h2>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SkillsFirstList