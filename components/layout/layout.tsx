import React, {useState} from 'react';
import styles from './index.module.scss';
import Header from "../header/header";
import HeroSection from "../heroSection/heroSection";
import FirstSlide from "../firstSlide/firstSlide";
import DetailSection from "../detailSection/detailSection";
import SecondSlide from "../secondSlide/secondSlide";
import BlogSection from "../blogSection/blogSection";
import SubscribeSection from "../subscribeSection/subscribeSection";
import Footer from "../footer/footer";
import {MobileHeaderContext} from "../../context";
import MobileMenu from "../header/mobileMenu/mobileMenu";


function Layout() {
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.container}>
            <MobileHeaderContext.Provider value={{open: open, setOpen: setOpen }}>
                <Header/>
                <MobileMenu/>
            </MobileHeaderContext.Provider>
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