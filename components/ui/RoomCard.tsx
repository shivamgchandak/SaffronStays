import React from "react";
import styles from "../../styles/RoomCard.module.css";
import Image from "next/image";

interface RoomCardProps {
 image: string;
 title?: string;
 description: string[];
}

const RoomCard: React.FC<RoomCardProps> = ({ image, title = "", description }) => {
 return (
   <div className={styles.roommain}>
     <Image 
       className={styles.roomimage} 
       src={image} 
       alt={title} 
       width={300} 
       height={185}
     />
     <ul className={styles.description}>
       <li className={styles.descriptioncontent}>{description[0]}</li>
       <li className={styles.descriptioncontent}>{description[1]}</li>
     </ul>
   </div>
 );
};

export default RoomCard;