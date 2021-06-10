import React from 'react'
import styles from './styles.module.scss'

import { faLinkedin, faReact, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function GlassCard() {
    return (
        <div className={styles.background}>
            <div className={styles.glassCard}>
                <div className={styles.title}>
                    <h2 className={styles.entryCard}>{"<Entry Card />"}</h2>
                    <div>
                        <h2 className={styles.code}>11<br />100<br />011<br />10</h2>
                    </div>
                </div>
                <div className={styles.content}>
                    <img className={styles.avatarCircle} src='/images/circle-avatar.png' />
                    <div>
                        <h1>Gabriel Luiz da Silva</h1>
                        <div className={styles.subtitle}>
                            <a target="_blank" href="https://github.com/gabrielluizs1996">
                                <FontAwesomeIcon className={styles.icon} icon={faGithub} />
                            </a>
                            <a target="_blank" href="https://github.com/gabrielluizs1996">
                                <h2>gabrielluizs1996</h2>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.contentFooter}>
                        <FontAwesomeIcon className={styles.icon} icon={faReact} />
                        <div>
                            <h3>Desenvolvedor</h3>
                            <h3 style={{ color: 'var(--blue)' }}>React.Js</h3>
                        </div>
                    </div>
                    <div className={styles.linkedin}>
                        <a target="_blank" href="https://www.linkedin.com/in/gabrielluizs1996/">
                            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlassCard
