import React, { Component } from 'react';
import styles from './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className={styles.Footer}>
          <img className={styles.headerImg} src="src/assets/header.png" /> 
          <p>&copy; 2020 -  Nick Brimmer ||  Dr. Mellow ||  Aaron Edward Glenn</p>
          
        </footer>
      </>
    );
  }
}
 