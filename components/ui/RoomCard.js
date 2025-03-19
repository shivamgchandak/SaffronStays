import styles from "../../styles/RoomCard.module.css";
import Image from "next/image";

export default function RoomCard({image, title, description}){
    return(

        <div className={styles.roommain}>

            <Image className={styles.roomimage} src={image} alt={title} width={300} height={185}/>

            <ul className={styles.description}>
                <li className={styles.descriptioncontent}>{description[0]}</li>
                <li className={styles.descriptioncontent}>{description[1]}</li>
            </ul>

        </div>

    )
}