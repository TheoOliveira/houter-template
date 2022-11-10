import React from "react";
import {MobileHeaderContext} from "../../../context";
import styles from './mobileMenu.module.scss'
import {firstButtonHeader, fourthButtonHeader, secondButtonHeader, thirdButtonHeader} from "../../../constants/content";

const MobileMenu: React.FC = (): React.ReactElement => {
    const context = React.useContext(MobileHeaderContext);

    function openMobileMenu() {
        context.open ? context.setOpen(false) : context.setOpen(true)
    }
    return (
        <div className={context.open ? `${styles.mobileMenuBar} ${styles['active']}` : `${styles.mobileMenuBar}`}>
            <div className={styles.closeBtn} onClick={()=> openMobileMenu()}></div>
            <ul className={styles.mobileMenuList}>
                <li><a href="#first" onClick={()=> openMobileMenu()}>{firstButtonHeader}</a></li>
                <li><a href="#second" onClick={()=> openMobileMenu()}>{secondButtonHeader}</a></li>
                <li><a href="#third" onClick={()=> openMobileMenu()}>{thirdButtonHeader}</a></li>
                <li><a href="#fourth" onClick={()=> openMobileMenu()}>{fourthButtonHeader}</a></li>
            </ul>
        </div>
    );
}

export default MobileMenu;
