import React from "react";
import styles from "../styles/Footer.module.css";
import Button from "react-bootstrap/Button";
import {FaTwitter} from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Container } from "react-bootstrap";


const Footer = () => {
  return (
	<div className={styles.Footer}>
    <Container className={styles.Social} fluid align-text-bottom="True">
		<Button href="https://www.facebook.com" target="_blank" aria-label="Find us on Facebook (link opens in a new tab)"><FaFacebook color="#ffffff"/></Button>
		{' '}
		<Button href="https://www.instagram.com" target="_blank" aria-label="Find us on Instagram (link opens in a new tab)">< FaInstagram color="#00ace"/></Button>
		{' '}
		<Button href="https://www.twitter.com" target="_blank" aria-label="Find us on Twitter (link opens in a new tab)"><FaTwitter color="#00ace"/></Button>
	</Container>
	</div>
  );
};

export default Footer;