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
        <p>Git, Postman, etc.</p>
      </div>
      <div className={styles.halfWidthContainer}>
        <div className={styles.frontEndBox}>
          <p>Front End</p>
          <div className={styles.backendLogos}>
            <div className={styles.firstSet}>
            <img src={js}></img>
            <img src={html}></img>
            <img src={css}></img>
            <img src={react}></img>
            <img src={bootstrap}></img>
            <img src={git}></img>
            <img src={npm}></img>
            <img src={webpack}></img>
            <img src={sass}></img>
            </div>
            </div>
        </div>
        <div className={styles.backEndBox}>
          <p>Back End</p>
          <div className={styles.backendLogos}>
            <div className={styles.firstSet}>
              <img src={mongo}></img>
              <img src={typeScript}></img>
              <img src={nestJs}></img>
              <img src={Prisma}></img>
              <img src={MySql}></img>
              <img src={ex}></img>       
              <img src={Ajax}></img>
              <img src={node}></img>
              <img src={mongos}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
