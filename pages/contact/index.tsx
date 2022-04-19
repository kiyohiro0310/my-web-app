import React, { useContext } from 'react'
import ContactForm from '../../components/contact/contact-form'
import classes from '../../components/contact/contact.module.scss'
import NotificationContext from '../../components/notification/notification-context'
import { TypeMessage } from '../../Model/dev-content-model'

const ContactPage = () => {
  const notificationCtx = useContext(NotificationContext);

  function addData(newMessage: TypeMessage){

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      if(res.ok){
        res.json();
      }else{
        res.json().then(data => {
          throw new Error(data.message || "Error");
        });
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
  }
  return (
    <div className={classes.main}>
      <h1>Contact <span className={classes.color}>Form</span></h1>
      <h2>What can I help you with?</h2>
      <ContactForm onAdd={addData}/>
    </div>
  )
}

export default ContactPage;