import React from 'react'
import classes from './skills.module.scss';
import Image from "next/image";
import Link from 'next/link';

const Skills = () => {
  return (
    <div className={classes.skills}>
      <h1>My Current Active Skills</h1>
      <div className={classes.container}>
        <Link href="https://nextjs.org/">
          <a className={classes.box}>
            <Image src="/images/skills/nextjs.jpeg" alt="" width={300} height={170} layout="responsive"/>
            <h2>Next.js</h2>
            <p>Next.js gives you the best developer experience with all the features you need for production</p>
          </a>
        </Link>

        <Link href="https://www.typescriptlang.org/">
          <a className={classes.box}>
            <Image src="/images/skills/typescript.jpeg" alt="" width={300} height={170} layout="responsive"/>
            <h2>TypeScript</h2>
            <p>TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.</p>
          </a>
        </Link>

        <Link href="https://sass-lang.com/">
          <a className={classes.box}>
            <Image src="/images/skills/sass.png" alt="" width={300} height={170} layout="responsive"/>
            <h2>Sass</h2>
            <p>Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>
          </a>
        </Link>

      </div>
    </div>
  )
}

export default Skills