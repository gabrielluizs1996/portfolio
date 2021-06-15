import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

function Index() {
    return (
        <div className={styles.background}>
            <div className={styles.content} >
                <div className={styles.divIcon}>
                    <FontAwesomeIcon className={styles.icon} icon={faQuoteLeft} />
                </div>
                <div className={styles.divQuote}>
                    <p className={styles.icon}>Olá, eu sou um <span>viajante do espaço</span> desenvolvedor React.Js
                        obcecado pelo universo e amante da astronomia. Atualmente estudo conceitos de desenvolvimento
                        Web Moderno e trabalho numa startup colocando os meus conhecimentos em prática todos os dias
                        e assim como o campo gravitacional de um buraco negro absorve matéria, eu absorvo conhecimento
                        e experiências neste período como desenvolvedor e cá entre nós que viagem incrível essa.</p>
                </div>
            </div>
        </div>
    )
}

export default Index
