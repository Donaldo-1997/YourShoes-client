import React from "react";
import styles from "./About.module.css";
export default function About() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footer_col}>
            <h3>ABOUT</h3>
            <ul>
              <li>ABOUT US</li>
              <li>COMMUNITY</li>
              <li>CONTACT</li>
              <li>LEGAL</li>
            </ul>
          </div>
          <div className={styles.footer_col2}>
            <h3>PRODUCTS</h3>
            <ul>
              <li>ZAPATILLAS PARA LA FLIA</li>
            </ul>
          </div>
          <div className={styles.footer_col3}>
            <h3>SUPPORT</h3>
            <ul>
              <li>FAQ</li>
              <li>CONTACT SUPPORT</li>
              <li>SERVICE CENTER</li>
            </ul>
          </div>
          <div>
            <h3>NEWSLETTER</h3>
            <input type="email" placeholder="Email: " />
          </div>
        </div>
        <hr />
      
      </div>
    </div>
  );
}
