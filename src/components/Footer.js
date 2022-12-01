import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.social}>
		<Container>
			<Row>
				<Col>
					<a href="https://www.facebook.com"> <i class="fab fa-facebook"></i></a>
					<a href="https://www.twitter.com"><i class="fab fa-twitter"></i></a>
					<a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>
				</Col>
			</Row>
      </Container>

	</div>
  );
};

export default Footer;