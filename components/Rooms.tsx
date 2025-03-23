import React from "react";
import styles from "../styles/Rooms.module.css";
import RoomCard from "./ui/RoomCard";

interface RoomData {
 id: number;
 image: string;
 description: string[];
}

const Rooms: React.FC = () => {
 const roomData: RoomData[] = [
   {
     id: 1,
     image: "/realmoment.png",
     description: [
       "Tucked away cosily in the lap of nature, this is the perfect destination getaway.",
       "The tourist-favourite Bhimtal Lake is only a stone's throw away."
     ]
   },
   {
     id: 2,
     image: "/realmoment.png",
     description: [
       "Tucked away cosily in the lap of nature, this is the perfect destination getaway.",
       "The tourist-favourite Bhimtal Lake is only a stone's throw away."
     ]
   },
   {
     id: 3,
     image: "/realmoment.png",
     description: [
       "Tucked away cosily in the lap of nature, this is the perfect destination getaway.",
       "The tourist-favourite Bhimtal Lake is only a stone's throw away."
     ]
   },
   {
     id: 4,
     image: "/realmoment.png",
     description: [
       "Tucked away cosily in the lap of nature, this is the perfect destination getaway.",
       "The tourist-favourite Bhimtal Lake is only a stone's throw away."
     ]
   },
   {
     id: 5,
     image: "/realmoment.png",
     description: [
       "Tucked away cosily in the lap of nature, this is the perfect destination getaway.",
       "The tourist-favourite Bhimtal Lake is only a stone's throw away."
     ]
   },
   {
     id: 6,
     image: "/realmoment.png",
     description: [
       "Tucked away cosily in the lap of nature, this is the perfect destination getaway.",
       "The tourist-favourite Bhimtal Lake is only a stone's throw away."
     ]
   },
   {
     id: 7,
     image: "/realmoment.png",
     description: [
       "Tucked away cosily in the lap of nature, this is the perfect destination getaway.",
       "The tourist-favourite Bhimtal Lake is only a stone's throw away."
     ]
   },
   {
     id: 8,
     image: "/realmoment.png",
     description: [
       "Tucked away cosily in the lap of nature, this is the perfect destination getaway.",
       "The tourist-favourite Bhimtal Lake is only a stone's throw away."
     ]
   },
 ];

 return (
   <div className={styles.main}>
     <div className={styles.roomContainer}>
       <h2 className={styles.heading}>Rooms & Beds</h2>

       <div className={styles.slider}>
         <div className={styles.slideTrack}>
           {/* Repeat the data twice to create infinite loop effect */}
           {[...roomData].map((real, index) => (
             <RoomCard
               key={index} // use index because of duplicate data
               image={real.image}
               description={real.description}
             />
           ))}
         </div>
       </div>
     </div>
   </div>
 );
};

export default Rooms;