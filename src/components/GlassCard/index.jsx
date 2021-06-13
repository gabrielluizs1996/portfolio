import React from 'react'
import styles from './styles.module.scss'
import styled from 'styled-components'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { faLinkedin, faReact, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function GlassCard() {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useTransform(y, [-100, 100], [30, -30])
    const rotateY = useTransform(x, [-100, 100], [-30, 30])


    return (
        <div className={styles.background}>
            <CardContainer className={styles.glassCard}
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileHover={{ cursor: 'pointer' }}
                whileTap={{ cursor: 'grabbing' }}
            >
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
            </CardContainer>
        </div>
    )
}

const CardContainer = styled(motion.div)`
    height: 291px;
    width: 480px;
    border-radius: 25px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0.5rem;

    //Glassmorphism
    background: rgba(202, 172, 255, 0.1);
    box-shadow: inset 0px 0px 50px 0px rgba(202, 172, 255, 0.3);
    /* box-shadow: 10px 10px 20px -15px rgba(202, 172, 255, 0.3); */
    backdrop-filter: blur(7px);
    border-right: 3px solid rgba(202, 172, 255, 0.3);
    border-bottom: 2px solid rgba(202, 172, 255, 0.3);
`

export default GlassCard
