import { NextPage } from 'next';
import Link from 'next/link'
import React, { useState } from 'react'
import classes from "./main-navigation.module.scss"
import {motion} from "framer-motion";

interface TypeProps{
    openHandler: (open: boolean) => void;
    open: boolean;
}

const HumburgerMenu: NextPage<TypeProps> = (props) => {
    const [isOpen, setIsOpen] = useState(true);

    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    props.openHandler(isOpen);
  return (
    <div className={classes.hamburger}>
        <motion.a initial={animateFrom} animate={animateTo} transition={{delay: 0.05}}><Link href="/skills"><a onClick={() => {setIsOpen(!isOpen)}}>Skills</a></Link></motion.a>
        <motion.a initial={animateFrom} animate={animateTo} transition={{delay: 0.10}}><Link href="/posts"><a onClick={() => {setIsOpen(!isOpen)}}>Posts</a></Link></motion.a>
        <motion.a initial={animateFrom} animate={animateTo} transition={{delay: 0.15}}><Link href="/devs"><a onClick={() => {setIsOpen(!isOpen)}}>Devs</a></Link></motion.a>
        <motion.a initial={animateFrom} animate={animateTo} transition={{delay: 0.20}}><Link href="/learn"><a onClick={() => {setIsOpen(!isOpen)}}>Learn</a></Link></motion.a>
        <motion.a initial={animateFrom} animate={animateTo} transition={{delay: 0.25}}><Link href="/contact"><a onClick={() => {setIsOpen(!isOpen)}}>Contact</a></Link></motion.a>
    </div>
  )
}

export default HumburgerMenu;