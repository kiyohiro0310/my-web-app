import React from 'react'
import classes from "../../components/skills/skills-page/skills-page.module.scss";
import SkillsDBList from '../../components/skills/skills-page/skills-db-list'
import SkillsFirstList from '../../components/skills/skills-page/skills-first-list'
import SkillsJSList from '../../components/skills/skills-page/skills-js-list'
import SkillsOtherList from '../../components/skills/skills-page/skills-others-list';

const SkillPage = () => {
  return (
    <div className={classes.main}>
      <h1>All Useable <span className={classes.color}>Skills</span></h1>
      <SkillsFirstList />
      <SkillsJSList />
      <SkillsDBList />
      <SkillsOtherList />
    </div>
  )
}

export default SkillPage