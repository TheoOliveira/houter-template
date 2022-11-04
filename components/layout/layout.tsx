import React from 'react';
import styles from './index.module.scss';
import Header from "../header/header";
import HeroSection from "../heroSection/heroSection";
import FirstSlide from "../firstSlide/firstSlide";
import DetailSection from "../detailSection/detailSection";
import SecondSlide from "../secondSlide/secondSlide";


function Layout() {
    return (
        <div className={styles.container}>
            <Header/>
            <HeroSection/>
            <FirstSlide/>
            <DetailSection/>
            <SecondSlide/>
        </div>
    );
}

export default Layout;