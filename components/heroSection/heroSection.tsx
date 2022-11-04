import React from 'react';
import styles from './heroSection.module.scss'
import {heroParagraph, heroText} from "../../constants/content";
import ActionButton from "../actionButton/actionButton";

function HeroSection() {
    return (
        <main className={styles.container}>
          <div className={styles.heroWrapper}>
              <h1>{heroText}</h1>
              <p>{heroParagraph}</p>
              <ActionButton label={"Check more"} url={""}/>
          </div>
        </main>
    );
}

export default HeroSection;