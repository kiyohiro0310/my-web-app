import React, { FormEvent, useContext } from 'react'
import classes from './contact.module.scss'
import { useRouter } from 'next/router';
import { TypeMessage } from '../../Model/dev-content-model';
import { NextPage } from 'next';
import NotificationContext from '../notification/notification-context';

interface TypeProps {
  onAdd: (newMessage: TypeMessage) => void;
}
const ContactForm: NextPage<TypeProps> = (props) => {
  const nameRef = React.createRef<HTMLInputElement>();
  const mailRef = React.createRef<HTMLInputElement>();
  const messageRef = React.createRef<HTMLTextAreaElement>();

  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);

  function submitHandler(event: FormEvent) {
    event.preventDefault();

    const enteredName = nameRef.current!.value;
    const enteredEmail = mailRef.current!.value;
    const enteredMessage = messageRef.current!.value;

    notificationCtx.showNotification({
      title: "Sending",
      message: "Sending your message...",
      status: "pending"
    });

    if(enteredName && enteredEmail && enteredMessage){
      const newMessage = {
        name: enteredName.trim(),
        mail: enteredEmail.trim(),
        message: enteredMessage.trim()
      }

      props.onAdd(newMessage);
      router.replace("/");

    }
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