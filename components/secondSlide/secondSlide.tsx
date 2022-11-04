import React, {useEffect, useState} from "react";
import styles from './secondSlide.module.scss'
import {thirdSlideArray, thirdSlideSubtitle, thirdSlideTitle} from "../../constants/content";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

const SecondSlide: React.FC = (props): React.ReactElement => {
    const [width, setWidth] = useState(null);
    const breakPoint = 900;

    function checkSize(size) {
        if (size === null) return 2;
        if (size > breakPoint) return 2
        if (size < breakPoint) return 1
    }

    useEffect(() => {
        if (typeof window !== undefined) {
            const handleResizeWindow = () => setWidth(window.innerWidth);
            // subscribe to window resize event "onComponentDidMount"
            window.addEventListener("resize", handleResizeWindow);
            return () => {
                // unsubscribe "onComponentDestroy"
                window.removeEventListener("resize", handleResizeWindow);
            };
        }

    }, [])

    return <div className={styles.container}>
        <div className={styles.titleWrapper}>
            <div className={styles.subTitle}><span>{thirdSlideSubtitle}</span></div>
            <div className={styles.title}><h3>{thirdSlideTitle}</h3></div>
        </div>
        <div className={styles.sliderWrapper}>
            <Carousel
            centerMode={true}
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            centerSlidePercentage={50}
            >

                    {thirdSlideArray.map((item, i) => (
                        <div key={i}  className={styles.slide}>
                            <img src={item.image}/>
                            <div className={styles.slideContainer}>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))
                    }

            </Carousel>

        </div>
    </div>

}

export default SecondSlide;
