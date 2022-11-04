import React from "react";
import styles from './detailSection.module.scss'
import {
    detailDescription,
    detailSubtitle,
    detailTitle,
    houseDetailArray,
    houseDetailImage,
    houseDetailTitle
} from "../../constants/content";
import ActionButton from "../actionButton/actionButton";


const DetailSection: React.FC = (props): React.ReactElement => {
    return <div className={styles.container}>
        <div className={styles.detailWrapper}>
            <div className={styles.firstColumn}>
                <div className={styles.subTitle}><span>{detailSubtitle}</span></div>
                <div className={styles.title}><h3>{detailTitle}</h3></div>
                <div className={styles.description}><p>{detailDescription}</p></div>
                <div className={styles.houseDetail}>
                    <h4>{houseDetailTitle}</h4>
                    <div className={styles.houseDetailWrapper}>
                        {houseDetailArray.map((item, i) => (
                            <div key={i} className={styles.detailItem}>
                                  <img src={item.icon}/>
                                <span>{item.description}</span>
                            </div>
                        ))}

                    </div>
                </div>
                <ActionButton label="Contate Agora" url={""}></ActionButton>
            </div>
            <div className={styles.secondColumn}>
                <img src={houseDetailImage}/>
            </div>
        </div>
    </div>;
}

export default DetailSection;
