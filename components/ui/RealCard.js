import styles from "../../styles/RealCard.module.css";
import Image from "next/image";

export default function RealCard({image, title, date}){
    return(

        <div className={styles.realmain}>

            <Image className={styles.realimage} src={image} alt={title} width={300} height={375}/>

            <div className={styles.realcontent}>

                <h1 className={styles.realtitle}>{title}</h1>

                <span className={styles.realdot}></span>

                <p className={styles.realdate}>{date}</p>

            </div>

        </div>

    )
}