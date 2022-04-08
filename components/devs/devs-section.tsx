import classes from "./dev-sections.module.scss";

import Link from 'next/link'
import React from 'react'
import Image from "next/image";

const DevSection = () => {
  return (
    <div className={classes.devs}>
      <h1>Previous <span className={classes.color}>Developments</span> </h1>
      <div className={classes.container}>
        <Link href={"https://kiyohiro-abc-optical.netlify.app/"}>
          <a className={classes.dev_item}>
            <div className={classes.img}>
              <Image src="/images/devs/abc_optical.png" alt="" width={100} height={58} layout="responsive"/>
            </div>
          </a>
        </Link>
        <Link href={"https://kiyo-first-page.netlify.app/"}>
          <a className={classes.dev_item}>
            <div className={classes.img}>
              <Image src="/images/devs/first_page.png" alt="" width={100} height={58} layout="responsive"/>
            </div>

          </a>
        </Link>
      </div>
    </div>

  )
}

export default DevSection