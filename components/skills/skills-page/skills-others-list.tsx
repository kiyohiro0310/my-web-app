import Link from 'next/link';
import Image from 'next/image';
import React, { Fragment } from 'react'
import classes from "./skills-page.module.scss";

const SkillsOtherList = () => {
  return (
    <div className={classes.container}>
        <div className={classes.subHeader}>
          <div className={classes.img}>
            <Image src="/images/skills/skills-page/others/other.png" alt="gear image" width={100} height={100}/>
          </div>
          <div className={classes.img_description}>
            <h1>Others</h1>
          </div>
        </div>

      <div className={classes.other_list}>
        <Link href="https://git-scm.com/">
          <a className={classes.others_box}>
            <Image src="/images/skills/skills-page/others/git.png" alt="github image" width={120} height={120}/>
            <h2>Git</h2>
          </a>
        </Link>
        <Link href="https://www.docker.com/">
          <a className={classes.others_box}>
            <Image src="/images/skills/skills-page/others/docker.png" alt="docker image" width={120} height={120}/>
            <h2>Docker</h2>
          </a>
        </Link>
        <Link href="https://aws.amazon.com/">
          <a className={classes.others_box}>
            <Image src="/images/skills/skills-page/others/aws.png" alt="aws image" width={120} height={120}/>
            <h2>AWS</h2>
          </a>
        </Link>
        <Link href="https://circleci.com/">
          <a className={classes.others_box}>
            <Image src="/images/skills/skills-page/others/circleci.png" alt="circleci image" width={120} height={120}/>
            <h2>CircleCI</h2>
          </a>
        </Link>

      </div>
    </div>
  )
}

export default SkillsOtherList