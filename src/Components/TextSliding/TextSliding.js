import React from 'react'

// Styles
import styles from './TextSliding.module.css'

const TextSliding = ({ text, contentSlider }) => {

    return(
        <div className={styles.wrapper}>
            {text}
            <div className={styles.slider}>
                {
                    contentSlider.map((content, i) => {
                        return(
                            <div>
                                {content.text}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default TextSliding