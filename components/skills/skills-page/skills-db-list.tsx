import Link from 'next/link';
import Image from 'next/image';
import React, { Fragment } from 'react'
import classes from "./skills-page.module.scss";

const SkillsDBList = () => {
  return (
    <div className={classes.container}>
      <Link href="https://www.techtarget.com/searchdatamanagement/definition/database">
        <a className={classes.skills_subHeader}>
          <div className={classes.img}>
            <Image src="/images/skills/skills-page/db/database-storage.png" alt="database image" width={100} height={100}/>
          </div>
          <div className={classes.img_description}>
            <h1>Database</h1>
          </div>
        </a>
      </Link>

      <div className={classes.list}>
        <Link href="https://www.mysql.com/">
          <a className={classes.box}>
            <Image src="/images/skills/skills-page/db/mysql.png" alt="mysql image" width={170} height={170}/>
            <h2>MySQL</h2>
          </a>
        </Link>
        <Link href="https://www.mongodb.com/">
          <a className={classes.box}>
            <Image src="/images/skills/skills-page/db/mongodb.png" alt="mongodb image" width={170} height={170}/>
            <h2>mongoDB</h2>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SkillsDBList