import React, { Component } from 'react'

// Assets
import projectsJSON from '../../assets/projects.json'

import styles from './Portfolio.module.css'

export default class Portfolio extends Component {

    state = {
        projects: []
    }

    componentDidMount() {
        this.fillContent()
    }

    fillContent() {
        let { projects } = this.state

        projects = projectsJSON

        this.setState({
            projects
        })

    }

    render() {
        const { projects } = this.state
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.content_portfolio}>
                        <h2>Mi Portafolio</h2>
                        <div className={styles.projects}>
                            {
                                projects.map(project => (
                                    <div 
                                        style={{background: project.back, color: project.color}}
                                        className={styles.project}
                                    >
                                        <div className={styles.project_main}>
                                            <div>
                                                <h3>{project.name}</h3>
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    Codigo
                                                </a>
                                            </div>
                                        </div>
                                        <div className={styles.project_desc}>
                                            <p>
                                                {project.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
