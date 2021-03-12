import React from 'react'

// styles
import styles from './Loader.module.css'

const LoadingPage = () => {
    return (
        <div className={styles.loading_content}>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

const Loader = ({ type }) => {

    if (type === 'page') {
        return <LoadingPage />
    }

    return <></>
}

export default Loader