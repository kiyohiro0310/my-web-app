import React, { FormEvent, useContext, useRef } from 'react'
import classes from "./learn-form.module.scss"
import { PostTemplate } from '../../lib/post-template';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import NotificationContext from '../notification/notification-context';

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

    const router = useRouter();
    const notificationCtx = useContext(NotificationContext);

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

        notificationCtx.showNotification({
            title: "Sending",
            message: "Sending data...",
            status: "pending"
        })

        if(enteredTitle
            && enteredDescription
            && enteredImage
            && enteredDate
            && enteredContent
            && enteredLang
            && enteredCode
            && enteredLink
            ){
                const newPost = {
                    title: enteredTitle.trim(),
                    description: enteredDescription.trim(),
                    image: enteredImage.trim(),
                    date: enteredDate.trim(),
                    content: enteredContent.trim(),
                    lang: enteredLang.trim(),
                    coding: enteredCode.trim(),
                    link: enteredLink.trim()
                }

                props.onAdd(newPost);
                router.push("/");

            }
        }

  return (
    <div className={classes.container}>
        <form method='POST' action='/learn' onSubmit={submitHandler}>
            <div className={classes.input_section}>
                <label htmlFor="title">Title</label>
                <input type="text" id='title' placeholder='Next.js' ref={titleRef} required/>
            </div>
            <div className={classes.input_section}>
                <label htmlFor="description">Description</label>
                <textarea id='description' rows={3} placeholder='How to use getStaticProps() in Next.js.' ref={descriptionRef} required/>
            </div>
            <div className={classes.input_section}>
                <label htmlFor="image">Image URL</label>
                <input type="url" id='image' placeholder='Copy link of image source, not from your folder.' ref={imageRef} required/>
            </div>
            <div className={classes.input_section}>
                <label htmlFor="date">Date</label>
                <input type="text" id='date' placeholder='2022-4-6' ref={dateRef} required/>
            </div>
            <div className={classes.input_section}>
                <label htmlFor="content">Content</label>
                <textarea id='content' rows={6} ref={contentRef} placeholder='getStaticProps() is the method to pre-render data before web pages show up. Usually, when it&apos;s necessary to show the pages quickly, this method is quite useful.' required/>
            </div>
            <div className={classes.input_section}>
                <label htmlFor="code">Code</label>
                <input type="text" id="lang" placeholder='js, jsx, tsx, etc.' className={classes.lang} ref={langRef} required/>
                <textarea id='code' rows={10} placeholder='Paste your code or write here' className={classes.code} ref={codeRef} required/>
            </div>
            <div className={classes.input_section}>
                <label htmlFor="link">Link</label>
                <input type="link" id='link' ref={linkRef} placeholder='https://nextjs.org/docs/basic-features/data-fetching/get-static-props' required/>
            </div>
            <button className={classes.button}>Share</button>
        </form>
    </div>
  )
}

export default LearnForm