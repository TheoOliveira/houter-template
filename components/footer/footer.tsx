import React from "react";
import styles from './footer.module.scss'
import {
    addressWords,
    contactTitle,
    facebookIcon,
    firstLinkArray,
    firstLinkTitle,
    footerDescription,
    instagramIcon,
    logoImage,
    secondLinkArray,
    secondLinkTitle,
    title,
    twitterIcon
} from "../../constants/content";

const Footer: React.FC = (): React.ReactElement => {
    return <div className={styles.container}>
        <div className={styles.firstColumn}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}><img src={logoImage}/></div>
                <div className={styles.logoText}><h3>{title}</h3></div>
            </div>
            <div className={styles.logoDescription}>
                <p>{footerDescription}</p>
            </div>
            <div className={styles.socials}>
                <div><img src={facebookIcon}/></div>
                <div><img src={twitterIcon}/></div>
                <div><img src={instagramIcon}/></div>
            </div>
        </div>
        <div className={styles.secondColumn}>
            <div className={styles.firstLinks}>
                <h3>{firstLinkTitle}</h3>
                <ul>
                {
                    firstLinkArray.map((item, i) => (
                        <li key={i}><a href={item.url}>{item.label}</a></li>
                    ))
                }
                </ul>
            </div>
            <div className={styles.secondLinks}>
                <h3>{secondLinkTitle}</h3>
                <ul>
                {
                    secondLinkArray.map((item, i) => (
                        <li key={i}><a  href={item.url}>{item.label}</a></li>
                    ))
                }
                </ul>
            </div>
            <div className={styles.contact}>
                <h3>{contactTitle}</h3>
                <p>{addressWords.address}</p>
                <p>{addressWords.telephone}</p>
                <p>{addressWords.email}</p>

            </div>

        </div>
    </div>;
}

export default Footer;
