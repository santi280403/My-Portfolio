import React from 'react'

// Components
import LazyImg from '../LazyImage/LazyImage'

import styles from './Card.module.css'

const Card = ({ img, title, text }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imgBx}>
                <LazyImg 
                    src={img.src}
                    alt={img.alt}
                    className={styles.img_card}
                />
            </div>
            <div className={styles.contentBx}>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Card