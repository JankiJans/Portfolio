import React from 'react';
import styles from './SkillPage.module.scss';

import mongo from '../../../images/MongoDB.png';
import typeScript from '../../../images/typeScript.png';
import Jira from '../../../images/Jira.png';
import Prisma from '../../../images/Prisma.png';
import nestJs from '../../../images/nestjs.png';
import MySql from '../../../images/MySQL.png';
import ex from '../../../images/express.png';
import Ajax from '../../../images/Ajax.png';
import node from '../../../images/nodeJs.png';
import redux from '../../../images/redux.png'
import mongos from '../../../images/moongose.png'
import npm from '../../../images/npm.png'
import git from '../../../images/git.png'
import js from '../../../images/js.png'
import webpack from '../../../images/webpack.png'
import html from '../../../images/html.png'
import css from '../../../images/css.png'
import bootstrap from '../../../images/bootstrap.png'
import react from '../../../images/react.png'
import sass from '../../../images/sass.png'

const SkillPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.fullWidthBox}>
        <h5 className={styles.boxTitle}>During an intensive course, I learned many useful extensions that facilitate the process of creating and developing websites.</h5>
      </div>
      <div className={styles.halfWidthContainer}>
        <div className={styles.frontEndBox}>
          <p>Front End</p>
          <div className={styles.backendLogos}>
            <div className={styles.firstSet}>
            <img src={js} alt='js'></img>
            <img src={html} alt='js'></img>
            <img src={css} alt='js'></img>
            <img src={react} alt='js'></img>
            <img src={bootstrap} alt='js'></img>
            <img src={git} alt='js'></img>
            <img src={npm} alt='js'></img>
            <img src={webpack} alt='js'></img>
            <img src={sass} alt='js'></img>
            <img src={redux} alt='js'></img>
            </div>
            </div>
        </div>
        <div className={styles.backEndBox}>
          <p>Back End</p>
          <div className={styles.backendLogos}>
            <div className={styles.firstSet}>
              <img src={mongo} alt='js'></img>
              <img src={typeScript} alt='js'></img>
              <img src={nestJs} alt='js'></img>
              <img src={Prisma} alt='js'></img>
              <img src={MySql} alt='js'></img>
              <img src={ex} alt='js'></img>       
              <img src={Ajax} alt='js'></img>
              <img src={node} alt='js'></img>
              <img src={mongos} alt='js'></img>
              <img src={Jira} alt='js'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
