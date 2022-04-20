import Link from 'next/link';
import React, { useState } from 'react'
import HumburgerMenu from './hamburger-menu';
import classes from "./main-navigation.module.scss";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  function setOpenHandler(open: boolean) {
    setIsOpen(open);
  }
  return (
    <div className={classes.header}>
        {!isOpen && <div className={classes.logo}><h1><Link href="/">KIYO&apos;S BLOG</Link></h1></div>}
        {isOpen && <div className={classes.logo}><h1 onClick={() => setIsOpen(!isOpen)}><Link href="/">KIYO&apos;S BLOG</Link></h1></div>}

        <nav>
            <Link href="/skills"><a>Skills</a></Link>
            <Link href="/posts"><a>Posts</a></Link>
            <Link href="/devs"><a>Devs</a></Link>
            <Link href="/learn"><a>Learn</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
        </nav>
        {!isOpen && <a className={classes.menu} onClick={() => setIsOpen(!isOpen)}></a>}
        {isOpen && <a className={classes.menu_close} onClick={() => setIsOpen(!isOpen)}></a>}

        {isOpen && <HumburgerMenu openHandler={setOpenHandler} open={isOpen}/>}
    </div>
  )
}

export default MainNavigation;