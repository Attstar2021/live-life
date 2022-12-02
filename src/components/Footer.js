import React from "react";
import styles from "../styles/Footer.module.css";


const Footer = () => {
  return (
    <Container className={styles.Social} fluid align-text-bottom>
		<MDBBtn style={{ backgroundColor: '#55acee' }} href="https://www.facebook.com">
        <MDBIcon className='me-2' fab icon="facebook" /> Facebook
    	</MDBBtn> <MDBBtn style={{ backgroundColor: '#55acee' }} href="https://www.twitter.com">>
      	<MDBIcon className='me-2' fab icon="twitter" /> Twitter
    	</MDBBtn> <MDBBtn style={{ backgroundColor: '#55acee' }} href="https://www.instagram.com">
      	<MDBIcon className='me-2' fab icon="instagram" /> Instagram
    	</MDBBtn>
	</Container>
  );
};

export default Footer;