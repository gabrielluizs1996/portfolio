import React from 'react'
import styles from './styles.module.scss'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJsSquare, faHtml5, faCss3Alt, faSass, faGit } from '@fortawesome/free-brands-svg-icons'

function Skills() {
    return (
        <>
            <div className={styles.skillsTitle}>
                <h1>Skills</h1>
            </div>
            <div className={styles.skills}>
                <div className={styles.skillsContainer}>
                    <SkillCard
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <FontAwesomeIcon style={{ color: '#26B3CC' }} className={styles.icon} icon={faReact} />
                    </SkillCard>
                    <SkillCard
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <FontAwesomeIcon style={{ color: '#FAFF1A' }} className={styles.icon} icon={faJsSquare} />
                    </SkillCard>
                    <SkillCard
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <FontAwesomeIcon style={{ color: '#FF7A1A' }} className={styles.icon} icon={faHtml5} />
                    </SkillCard>
                    <SkillCard
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <FontAwesomeIcon style={{ color: '#1A83FF' }} className={styles.icon} icon={faCss3Alt} />
                    </SkillCard>
                    <SkillCard
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <FontAwesomeIcon style={{ color: '#ED1AFF' }} className={styles.icon} icon={faSass} />
                    </SkillCard>
                    <SkillCard
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <FontAwesomeIcon style={{ color: '#FF431A' }} className={styles.icon} icon={faGit} />
                    </SkillCard>
                </div>
            </div>
        </>
    )
}

const SkillCard = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.875rem;
    margin: 1rem;
    height: 100px;
    width: 100px;
    border-radius: 25px;
    background-image: linear-gradient( to bottom right, #181D26, #465573);
    /* box-shadow: 10px 10px 20px -15px rgba(202, 172, 255, 0.8); */
    border-right: 2px solid #C1C9D933;
    border-bottom: 2px solid #C1C9D933;
`

export default Skills
