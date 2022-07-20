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
          <div className={styles.footer_col4}>
            <h3>DOWNLOAD THE APP</h3>
            <p>Download App for Android and ios mobile phone.</p>
            <div className={styles.app_logo}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Get-it-on-google-play-badge.png" alt="" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Available_on_the_App_Store_%28black%29.png" alt="" />
            </div>
          </div>
          <div>
            <h3>NEWSLETTER</h3>
            <input type="email" placeholder="Email: " />
          </div>
        </div>
        <hr />
        <p>CopyRight 2022 - Easy Tutorials</p>
      </div>
    </div>
  );
}
