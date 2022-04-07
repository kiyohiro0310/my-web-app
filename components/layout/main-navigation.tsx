import Link from 'next/link';
import React from 'react'
import classes from "./main-navigation.module.scss";

const MainNavigation = () => {
  return (
    <div className={classes.header}>
        <div><h1><Link href="/">KIYO&apos;s BLOG</Link></h1></div>
        <nav>
            <Link href="/skills"><a>Skills</a></Link>
            <Link href="/posts"><a>Posts</a></Link>
            <Link href="/devs"><a>Devs</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
        </nav>
    </div>
  )
}

export default MainNavigation