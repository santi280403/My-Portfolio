import React, { Fragment } from 'react'

import styles from './skillsBars.module.css'

const Languages = ({ data }) => {
    
    return (
        <div>
            <h2>Lenguages</h2>
            {
                data.map(language => {                    
                    return (
                        <div className={styles.content_bar} key={language.percent}>
                            <h3>{language.language}</h3>
                            <div className={styles.container_bar}>
                                <div 
                                    style={{ width: language.percent + '%' }} 
                                    className={styles.percent_bar}
                                >
                                    {language.percent}%
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

const Frameworks = ({ data }) => {

    return (
        <div>
            <h2>Frameworks</h2>
            {
                data.map(framework => {
                    return (
                        <div className={styles.content_bar} key={framework.percent}>
                            <h3>{framework.framework}</h3>
                            <div className={styles.container_bar}>
                                <div 
                                    style={{ width: framework.percent + '%' }} 
                                    className={styles.percent_bar}
                                >
                                    {framework.percent}%
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

const SkillsBars = ({ languages, frameworks, typeSkill }) => {

    return (
        <div className={styles.content_skills}>
            {
                typeSkill === "language" ? (
                    <Languages data={languages} />
                ) : typeSkill === "framework" ? (
                    <Frameworks data={frameworks} />
                ) : <></>
            }
        </div>
    )

}

export default SkillsBars
