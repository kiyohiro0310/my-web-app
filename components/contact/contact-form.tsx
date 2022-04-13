import React, { FormEvent, useContext } from 'react'
import NotificationContext from '../notification/notification-context';
import classes from './contact.module.scss'
import { useRouter } from 'next/router';

const ContactForm = () => {
  const nameRef = React.createRef<HTMLInputElement>();
  const mailRef = React.createRef<HTMLInputElement>();
  const messageRef = React.createRef<HTMLTextAreaElement>();
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);

  function submitHandler(event: FormEvent) {
    event.preventDefault();

    notificationCtx.showNotification({
      title: "Sending",
      message: "Sending your message...",
      status: "pending"
    });

    const enteredName = nameRef.current!.value;
    const enteredEmail = mailRef.current!.value;
    const enteredMessage = messageRef.current!.value;


    fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({
        name: enteredName.trim(),
        mail: enteredEmail.trim(),
        message: enteredMessage.trim()
      }),
      headers: {
        "Content-Type": "applicaton/json"
      }
    })
    .then(res => {
      if(res.ok){
        return res.json()
      }else{
        res.json().then(data => {
          throw new Error(data.message || "Error");
        })
      }
    })
    .then(data => {
      notificationCtx.showNotification({
        title: "Success!",
        message: "Sent your message successfully!",
        status: "success"
      })
    })
    .catch(error => {
      notificationCtx.showNotification({
        title: "Failed",
        message: error || "Sending message failed...",
        status: "error"
      });
    })
    router.push("/");
  }

  return (
    <div className={classes.container}>
      <form method='POST' action='/contact' onSubmit={submitHandler}>
        <div className={classes.info}>
          <div>
            <label htmlFor="name">Your Name</label>
            <input type="text" id='name' required ref={nameRef}/>
          </div>
          <div>
            <label htmlFor='email'>Your Email</label>
            <input type="mail" id='email' required ref={mailRef}/>
          </div>
        </div>
        <div className={classes.message}>
          <label htmlFor="message">Your Message</label>
          <textarea name="message" id='message' rows={10} cols={50} required ref={messageRef} />
        </div>
        <div className={classes.button}>
          <button type='submit'>Submit Message</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm