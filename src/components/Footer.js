import React from "react";
import styles from "../styles/Footer.module.css";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Container className={styles.Social} fluid align-text-bottom>
		<NavLink
			to="https://www.facebook.com">
        	<i class="fab fa-facebook"></i>
     	</NavLink>
		<NavLink
			to="https://www.twitter.com">
        	<i className="fab fa-twitter"></i>
     	</NavLink>
		<NavLink to="https://www.instagram.com">
        	<i className="fab fa-instagram"></i>
     	</NavLink>
	</Container>
  );
};

export default Footer;