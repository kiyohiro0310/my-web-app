import React from 'react'
import LearnForm from '../../components/learn/learn-form';
import classes from '../../components/learn/learn-form.module.scss';
import { PostTemplate } from '../../lib/post-template';

const LearnPage = () => {
    function addData(fileData: PostTemplate){
        fetch("/api/learn", {
            method: "POST",
            body: JSON.stringify(fileData),
            headers: {
                "Content-Type": "application/json"
            }
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