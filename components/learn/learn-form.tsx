import React, { FormEvent, useRef } from 'react'
import classes from "./learn-form.module.scss"
import { PostTemplate } from '../../lib/post-template';
import { NextPage } from 'next';

interface TypeProps {
    onAdd: (fileData: PostTemplate) => void;
}
const LearnForm: NextPage<TypeProps> = (props) => {
    const titleRef = React.createRef<HTMLInputElement>();
    const descriptionRef = React.createRef<HTMLTextAreaElement>();
    const imageRef = React.createRef<HTMLInputElement>();
    const dateRef = React.createRef<HTMLInputElement>();
    const contentRef = React.createRef<HTMLTextAreaElement>();
    const langRef = React.createRef<HTMLInputElement>();
    const codeRef = React.createRef<HTMLTextAreaElement>();
    const linkRef = React.createRef<HTMLInputElement>();

    function submitHandler(event: FormEvent) {
        event.preventDefault();

        const enteredTitle = titleRef.current!.value;
        const enteredDescription = descriptionRef.current!.value;
        const enteredImage = imageRef.current!.value;
        const enteredDate = dateRef.current!.value;
        const enteredContent = contentRef.current!.value;
        const enteredLang = langRef.current!.value;
        const enteredCode = codeRef.current!.value;
        const enteredLink = linkRef.current!.value;

        const newPost = {
            title: enteredTitle,
            description: enteredDescription,
            image: enteredImage,
            date: enteredDate,
            content: enteredContent,
            lang: enteredLang,
            coding: enteredCode,
            link: enteredLink
        }

        props.onAdd(newPost);

    }
  return (
    <div className={classes.container}>
        <form method='POST' action='/learn' onSubmit={submitHandler}>
            <div className={classes.input_section}>
                <label htmlFor="title">Title</label>
                <input type="text" id='title' placeholder='Next.js' ref={titleRef}/>
            </div>
            <div className={classes.input_section}>
                <label htmlFor="description">Description</label>
                <textarea id='description' rows={3} placeholder='How to use getStaticProps() in Next.js.' ref={descriptionRef}/>
            </div>
            <div className={classes.input_section}>
                <label htmlFor="image">Image URL</label>
                <input type="url" id='image' placeholder='Copy link of image source, not from your folder.' ref={imageRef}/>
            </div>
            <div className={classes.input_section}>
                <label htmlFor="date">Date</label>
                <input type="text" id='date' placeholder='2022-4-6' ref={dateRef}/>
            </div>
            <div className={classes.input_section}>
                <label htmlFor="content">Content</label>
                <textarea id='content' rows={6} ref={contentRef} placeholder='getStaticProps() is the method to pre-render data before web pages show up. Usually, when it&apos;s necessary to show the pages quickly, this method is quite useful.'/>
            </div>
            <div className={classes.input_section}>
                <label htmlFor="code">Code</label>
                <input type="text" id="lang" placeholder='js, jsx, tsx, etc.' className={classes.lang} ref={langRef}/>
                <textarea id='code' rows={10} placeholder='Paste your code or write here' className={classes.code} ref={codeRef}/>
            </div>
            <div className={classes.input_section}>
                <label htmlFor="link">Link</label>
                <input type="text" id='link' ref={linkRef} placeholder='https://nextjs.org/docs/basic-features/data-fetching/get-static-props'/>
            </div>
            <button className={classes.button}>Share</button>
        </form>
    </div>
  )
}

export default LearnForm