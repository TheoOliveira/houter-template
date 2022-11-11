import React, {useState} from "react";
import styles from './blogSection.module.scss'
import ActionButton from "../actionButton/actionButton";
import {blogPostsArray, blogSectionSubtitle, blogSectionTitle} from "../../constants/content";


const BlogSection: React.FC = (props): React.ReactElement => {
    const [selected, setSelected] = useState(blogPostsArray[0])
    function selectedImage(index){
        setSelected(blogPostsArray[index])
    }
    return <div id="fourth" className={styles.container}>
        <div className={styles.titleWrapper}>
            <div className={styles.subTitle}><span>{blogSectionSubtitle}</span></div>
            <div className={styles.title}><h3>{blogSectionTitle}</h3></div>
            <ActionButton label="More" url={""}/>
        </div>
        <div className={styles.blogWrapper}>
            <div className={styles.firstColumn}>
                <div className={styles.detailBlogWrapper}>
                    {blogPostsArray.map((item, i) => (
                        <div key={i} className={styles.detailBlogItem} onClick={()=> selectedImage(i)}>
                        <div className={styles.image}><img src={item.image}/></div>
                        <div className={styles.detailTextWrapper}>
                        <h4>{item.title}</h4>
                        </div>
                        </div>
                        ))}

                </div>
            </div>
            <div className={styles.secondColumn}>
                <div className={styles.highlightWrapper}>
                    <div>
                        <img src={selected.image}/>
                    </div>
                    <h4>{selected.title}</h4>
                    <p>{selected.description}</p>
                </div>
            </div>
        </div>
    </div>;
}

export default BlogSection;
