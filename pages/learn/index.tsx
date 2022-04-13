import React, { useContext } from 'react'
import LearnForm from '../../components/learn/learn-form';
import classes from '../../components/learn/learn-form.module.scss';
import NotificationContext from '../../components/notification/notification-context';
import { PostTemplate } from '../../lib/post-template';

const LearnPage = () => {
    const notificationCtx = useContext(NotificationContext);


    function addData(fileData: PostTemplate){
        fetch("/api/learn", {
            method: "POST",
            body: JSON.stringify(fileData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if(res.ok){
                res.json()
            }else{
                res.json().then(data => {
                    throw new Error(data.message || "Error!");
                });
            }
        })
        .then(data => {
            notificationCtx.showNotification({
                title: "Success!",
                message: "Sending data successfully",
                status: "success"
            })
        })
        .catch(error => {
            notificationCtx.showNotification({
                title: "Error",
                message: error.message || "Error",
                status: "error"
            })
        })
    }

  return (
    <div className={classes.main}>
        <h1>What did you <span className={classes.color}>learn</span>?</h1>
        <h2>Let&apos;s share what you have learnt!</h2>
        <LearnForm onAdd={addData}/>
    </div>
  )
}

export default LearnPage;