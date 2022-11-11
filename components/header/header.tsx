import React from "react";
import styles from './header.module.scss';
import {firstButtonHeader, fourthButtonHeader, secondButtonHeader, thirdButtonHeader} from "../../constants/content";
import {MobileHeaderContext} from "../../context";

const header: React.FC = (): React.ReactElement => {
    const context = React.useContext(MobileHeaderContext);


    function openMobileMenu() {
        console.log('click')
        context.open ? context.setOpen(false) : context.setOpen(true)
    }
    return (<header className={styles.container}>
        <div className={styles.logoContainer}>
            <img src={"/images/logo.png"} alt="Logo"/>
            <div className={styles.logoText}>Hounter</div>
        </div>
        <div className={styles.buttonsHeader}>
            <a href="#first">{firstButtonHeader}</a><a href="#second">{secondButtonHeader}</a><a href="#third">{thirdButtonHeader}</a><a
            href="#fourth">{fourthButtonHeader}</a>
        </div>
        <div className={styles.mobileMenu}>
            <button className={styles.mobileMenuBtn} onClick={(e) => openMobileMenu()}><img
                src="/icons/bars.png"/></button>
        </div>
    </header>);
}

export default header;
