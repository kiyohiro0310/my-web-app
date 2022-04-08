import classes from "./main-footer.module.scss";

import React from 'react'
import Image from "next/image";
import Link from "next/link";

const MainFooter = () => {
  return (
    <div className={classes.footer}>
        <div className={classes.container}>
            <div>
                <Link href="/">
                    <a>
                        <div className={classes.img}>
                            <Image className={classes.img} src="/images/main-footer/kiyo_dev.png" alt="Kiyohiro-logo" width={200} height={200} />
                        </div>
                    </a>
                </Link>
                <h1 className={classes.logo_name}>Kiyohiro</h1>
            </div>
            <div>
            <li>
                <Link href="/skills">Skills</Link></li>
                <li><Link href="/posts">Posts</Link></li>
                <li><Link href="/devs">Devs</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </div>
            <div>
                <div className={classes.details}>
                    <h2>Kiyohiro Kambayashi</h2>
                    <h3>Age: 26</h3>
                    <h3>Nationality: Japan</h3>
                    <p>Please contact me, if you&apos;d like to advertise your business.</p>
                </div>
            </div>
        </div>
        <div>
            <p>&copy;Kiyohiro Kambayashi</p>
        </div>
    </div>
  )
}

export default MainFooter