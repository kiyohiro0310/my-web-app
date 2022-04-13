import { NextPage } from 'next';
import React from 'react'
import classes from './notification.module.scss';

interface TypeProps {
  title: string;
  message: string;
  status: string;
}

const Notification  = (props: TypeProps) => {
  const { title, message, status } = props;

  let activeClass = "";

  if(status === "pending"){
    activeClass = `${classes.notification} ${classes.pending}`
  }
  if(status === "success"){
    activeClass = `${classes.notification} ${classes.success}`
  }
  if(status === "error"){
    activeClass = `${classes.notification} ${classes.error}`
  }
  return (
    <div className={activeClass}>
        <h2>{title}</h2>
        <p>{message}</p>
    </div>
  )
}

export default Notification;