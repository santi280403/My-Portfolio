import React from 'react'
import { Link } from 'react-router-dom'

// Components
import TextSliding from '../../Components/TextSliding/TextSliding'

// Styles
import styles from './Home.module.css'

export default class Home extends React.Component {

    state = {
        contentSliding: []
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
                    <div className={styles.brand}>
                        <h3>Santiago Ruiz</h3>
                    </div>
                    <div className={styles.sliding_container}>
                        <TextSliding
                            text="Manejo"
                            contentSlider={contentSliding}
                        />
                    </div>
                    <div className={styles.links}>
                        <Link to="">Sobre mi</Link>
                        <Link to="">Portafolio</Link>
                        <Link to="">Blog</Link>
                        <Link to="">Contacto</Link>
                    </div>
                </div>
            </div>

        )
    }

}