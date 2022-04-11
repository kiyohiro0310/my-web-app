import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import classes from "./skills-page.module.scss";

const SkillsJSList = () => {
  return (
    <div className={classes.container}>
      <Link href="https://www.javascript.com/">
        <a className={classes.skills_subHeader}>
          <div className={classes.img}>
            <Image src="/images/skills/skills-page/js/js.png" alt="" width={100} height={100}/>
          </div>
          <div className={classes.img_description}>
            <h1>JavaScript</h1>
          </div>
        </a>
      </Link>

      <div className={classes.list}>
        <Link href="https://jquery.com/">
          <a className={classes.box}>
            <Image src="/images/skills/skills-page/js/jquery.png" alt="jquery image" width={170} height={170}/>
            <h2>jQuery</h2>
          </a>
        </Link>
        <Link href="https://expressjs.com/">
          <a className={classes.box}>
            <Image src="/images/skills/skills-page/js/nodejs.png" alt="express image" width={170} height={170}/>
            <h2>Express</h2>
          </a>
        </Link>
        <Link href="https://www.typescriptlang.org/">
          <a className={classes.box}>
            <Image src="/images/skills/skills-page/js/typescript.png" alt="typescript image" width={170} height={170}/>
            <h2>TypeScript</h2>
          </a>
        </Link>
      </div>
      <div className={classes.list}>
        <Link href="https://reactjs.org/">
          <a className={classes.box}>
            <Image src="/images/skills/skills-page/js/physics.png" alt="react image" width={170} height={170}/>
            <h2>React</h2>
          </a>
        </Link>
        <Link href="https://nextjs.org/">
          <a className={classes.box}>
            <Image src="/images/skills/skills-page/js/nextjs.jpeg" alt="nextjs image" width={250} height={170}/>
            <h2>Next.js</h2>
          </a>
        </Link>

      </div>
    </div>
  )
}

export default SkillsJSList