import styles from "../styles/Price.module.css"

export default function Price() {
    return(
        <div className={styles.main}>
            <div className={styles.priceRow}>
                <span className={styles.oldPrice}>₹1,49,086</span>
                <span><span className={styles.newPrice}>₹1,00,086</span><span className={styles.newPriceNight}>/Night</span></span>
            </div>
            <button className={styles.checkAvailabilityButton}>Check Availability</button>
        </div>
    )
}