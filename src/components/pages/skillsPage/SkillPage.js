import React from "react";
import styles from './SkillPage.module.scss';

import mongo from '../../../images/MongoDB.png'
import typeScript from '../../../images/typeScript.png'
import Jira from '../../../images/Jira.png'
import Prisma from '../../../images/Prisma.png'
import nestJs from '../../../images/nestjs.png'
import MySql from '../../../images/MySQL.png'
import ex from '../../../images/express.png'
import Ajax from '../../../images/Ajax.png'


const SkillPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.fullWidthBox}>
        <p>Git, Postman, etc.</p>
        
      </div>
      <div className={styles.halfWidthContainer}>
        <div className={styles.frontEndBox}>
          <p>Front End</p>
        </div>
        <div className={styles.backEndBox}>
          <p>Back End</p>
          <div className={styles.backendLogos}>
            <div className={styles.firstSet}>
            <img src={mongo}></img>
            <img src={typeScript}></img>
            <img src={nestJs}></img>
            </div>
            <div className={styles.firstSet}>
            <img src={Prisma}></img>
            <img src={MySql}></img>
            <img src={ex}></img>
            </div>
            <div className={styles.firstSet}>
            <img src={Ajax}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
