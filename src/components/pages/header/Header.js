import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <Navbar expand="md" className={styles.transparentNavbar}>
      <Nav navbar className={styles.centerNav}>
        <NavItem>
          <a href="https://github.com/JankiJans" className={styles.navItemText}>
          <i className={`fa fa-github-square  ${styles.githubIcon}`}></i>
          </a>
        </NavItem>
        <NavItem>
          <a href="https://www.linkedin.com/in/jan-k%C4%99dzierski-7a5787293/" className={styles.navItemText}>
          <i className={`fa fa-linkedin-square ${styles.linkedinIcon}`}></i>
          </a>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
