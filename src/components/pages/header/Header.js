import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <Navbar expand="md" className={styles.transparentNavbar}>
      <Nav navbar className={styles.centerNav}>
        <NavItem>
          <NavLink to="/subpage1" className={styles.navItemText}>
          <i className={`fa fa-github-square  ${styles.githubIcon}`}></i>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/subpage2" className={styles.navItemText}>
          <i className={`fa fa-linkedin-square ${styles.linkedinIcon}`}></i>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
