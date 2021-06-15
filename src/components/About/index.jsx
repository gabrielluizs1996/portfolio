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
                    <p className={styles.icon}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                        in justo interdum, vehicula ex ac, mattis nibh. Mauris et viverra
                        ex. Nulla vitae molestie neque, at euismod tortor. Curabitur
                        euismod, nisl vel eleifend cursus, urna nunc ullamcorper nulla,
                        a ullamcorper tellus massa et turpis. Nam rutrum tempus felis,
                        volutpat iaculis libero tempus vel. Sed ornare, mi sit amet
                        auctor venenatis, orci metus condimentum urna, ut varius massa
                        nunc nec est. Morbi vel dolor sit amet leo dictum ullamcorper.</p>
                </div>
            </div>
        </div>
    )
}

export default Index
