import React from "react";
import styles from "../styles/Footer.module.css";
import Button from "react-bootstrap/Button";
import {FaTwitter} from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { useState, useRef} from "react";
import { Overlay } from "react-bootstrap";


  function GoodToKnow() {
	const [show, setShow] = useState(false);
	const target = useRef(null);
  
	return (
	  <>
		<Button variant="primary" ref={target} onClick={() => setShow(!show)}>
		  Live!
		</Button>
		<Overlay target={target.current} show={show} placement="right">
		  {({ placement, arrowProps, show: _show, popper, ...props }) => (
			<div {...props} className={styles.style1}>
			  Please be respectful in you comments
			</div>
		  )}
		</Overlay>
	  </>
	);
  }

  function GoodToShare() {
	const [show, setShow] = useState(false);
	const target = useRef(null);
  
	return (
	  <>
		<Button variant="primary" ref={target} onClick={() => setShow(!show)}>
		  Life!
		</Button>
		<Overlay target={target.current} show={show} placement="left">
		  {({ placement, arrowProps, show: _show, popper, ...props }) => (
			<div {...props} className={styles.style2}>
			  share goodness to bring happiness
			</div>
		  )}
		</Overlay>
	  </>
	);
  }
const Footer = () => {
  return (
	<div className={styles.Footer}>
	<GoodToKnow />
    <Container className={styles.Social} fluid align-text-bottom="True">
		<Button href="https://www.facebook.com" target="_blank" aria-label="Find us on Facebook (link opens in a new tab)"><FaFacebook color="#ffffff"/></Button>
		{' '}
		<Button href="https://www.instagram.com" target="_blank" aria-label="Find us on Instagram (link opens in a new tab)">< FaInstagram color="#00ace"/></Button>
		{' '}
		<Button href="https://www.twitter.com" target="_blank" aria-label="Find us on Twitter (link opens in a new tab)"><FaTwitter color="#00ace"/></Button>
	</Container>
	<GoodToShare />
	</div>
  );
};

export default Footer;