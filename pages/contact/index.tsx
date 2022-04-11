import React from 'react'
import ContactForm from '../../components/contact/contact-form'
import classes from '../../components/contact/contact.module.scss'

const ContactPage = () => {
  return (
    <div className={classes.main}>
      <h1>Contact <span className={classes.color}>Form</span></h1>
      <h2>What can I help you with?</h2>
      <ContactForm />
    </div>
  )
}

export default ContactPage;