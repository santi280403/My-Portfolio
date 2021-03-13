import React from 'react'

// Styles
import styles from './TextSliding.module.css'

const TextSliding = ({ text }) => {

    return(
        <div className={styles.wrapper}>
            {text}
            <div className={styles.slider}>
                <div className={styles.slider_text_1}>
                    Node js
                </div>
                <div className={styles.slider_text_2}>
                    Python
                </div>
                <div className={styles.slider_text_3}>
                    Golang
                </div>
            </div>
        </div>
    )

}

export default TextSliding