import React from 'react'
import classes from './contact.module.scss'

const ContactForm = () => {
  return (
    <div className={classes.container}>
      <form>
        <div className={classes.info}>
          <div>
            <label htmlFor="name">Your Name</label>
            <input type="text" id='name' />
          </div>
          <div>
            <label htmlFor='email'>Your Email</label>
            <input type="mail" id='email'/>
          </div>
        </div>
        <div className={classes.message}>
          <label htmlFor="message">Your Message</label>
          <textarea name="message" id='message' rows={10} cols={50}></textarea>
        </div>
        <div className={classes.button}>
          <button type='submit'>Submit Message</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm