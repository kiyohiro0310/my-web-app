import React from 'react'
import classes from './intro.module.scss';
import Image from 'next/image';

const Intro = () => {
  return (
    <div className={classes.main}>
        <div className={classes.container}>
            <div>
                <Image className={classes.img} src="/images/intro/kiyohiro.jpeg" alt="Kiyohiro Kambayashi" width={400} height={400} />
            </div>
            <div>
                <h1>Hi, I&apos;m <span className={classes.color}>Kiyohiro</span>.</h1>
                <p>
                    I was born and raised in Japan.<br/>
                    This website is created using Next.js, TypeScript, Sass and MongoDB. <br/>
                    I&apos;ll post some here after I learn something new.<br/>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Intro