import React from 'react'
import { Link } from 'react-router-dom'

// Components
import TextSliding from '../../Components/TextSliding/TextSliding'
import LazyImg from '../../Components/LazyImage/LazyImage'

// Assets
import logo from '../../assets/logo.svg'

// Styles
import styles from './Home.module.css'

export default class Home extends React.Component {

    state = {
        contentSliding: []
    }

    componentDidMount() {
        this.fillContent();
    }

    fillContent() {
        let { contentSliding } = this.state

        contentSliding = [
            { text: "Node js" },
            { text: "Python" },
            { text: "Golang" }
        ]

        this.setState({
            contentSliding
        })

    }

    render() {
        const { contentSliding } = this.state
        return (

            <div className={styles.container_home}>
                <div>
                    <LazyImg 
                        src={logo}
                        alt="Logo"
                        className={styles.img_logo}
                    />
                    <div className={styles.brand}>
                        <h1>Santiago Ruiz</h1>
                    </div>
                    <div className={styles.sliding_container}>
                        <TextSliding
                            text="Manejo"
                            contentSlider={contentSliding}
                        />
                    </div>
                    <div className={styles.links}>
                        <Link to="/about_me">Sobre mi</Link>
                        <Link to="/portfolio">Portafolio</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/conctact">Contacto</Link>
                    </div>
                </div>
            </div>

        )
    }

}