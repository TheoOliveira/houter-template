import React from 'react';
import styles from './index.module.scss';
import Header from "../header/header";
import HeroSection from "../heroSection/heroSection";
import FirstSlide from "../firstSlide/firstSlide";
import DetailSection from "../detailSection/detailSection";
import SecondSlide from "../secondSlide/secondSlide";
import BlogSection from "../blogSection/blogSection";
import SubscribeSection from "../subscribeSection/subscribeSection";
import Footer from "../footer/footer";


function Layout() {
    return (
        <div className={styles.container}>
            <Header/>
            <HeroSection/>
            <FirstSlide/>
            <DetailSection/>
            <SecondSlide/>
            <BlogSection/>
            <SubscribeSection/>
            <Footer/>
        </div>
    );
}

export default Layout;