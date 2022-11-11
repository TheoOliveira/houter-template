import React, {useEffect, useState} from "react";
import styles from './firstSlide.module.scss'
import 'pure-react-carousel/dist/react-carousel.es.css';
import {ButtonBack, ButtonNext, CarouselProvider, Slide, Slider} from 'pure-react-carousel';
import {slideArray, slideSubtitle, slideTitle} from "../../constants/content";

const FirstSlide: React.FC = (): React.ReactElement => {
    const [width, setWidth] = useState(null);
    const breakPoint = 900;

    function checkSize(size) {
        if (size === null) return 3;
        if (size > breakPoint) return 3
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
    return <>
        <div id="first" className={styles.container}>
            <div className={styles.sliderWrapper}>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={150}
                    totalSlides={slideArray.length}
                    infinite={true}
                    visibleSlides={checkSize(width)}
                >
                    <div className={styles.subTitle}><span>{slideSubtitle}</span></div>
                    <div className={styles.titleWrapper}>
                        <div className={styles.title}><h3>{slideTitle}</h3></div>
                        <div className={styles.arrows}>
                            <ButtonNext className={styles.back}>{''}</ButtonNext>
                            <ButtonBack className={styles.next}>{''}</ButtonBack>
                        </div>
                    </div>
                    <Slider className={styles.slideItem}>
                        {slideArray.map((item, i) => (
                            <Slide key={i} index={i} className={styles.card}>
                                <img src={item.image}/>
                                <h4>{item.description}</h4>
                            </Slide>
                        ))}

                    </Slider>
                </CarouselProvider>
            </div>
        </div>
    </>;
}

export default FirstSlide;
