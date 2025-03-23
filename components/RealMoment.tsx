import React from "react";
import styles from "../styles/RealMoment.module.css";
import RealCard from "./ui/RealCard";

interface RealData {
  id: number;
  image: string;
  title: string;
  date: string;
}

const RealMoment: React.FC = () => {
  const realData: RealData[] = [
    {
      id: 1,
      image: "/realmoment.png",
      title: "Vinay",
      date: "Sep 03, 2023",
    },
    {
      id: 2,
      image: "/realmoment.png",
      title: "Vinay",
      date: "Sep 03, 2023",
    },
    {
      id: 3,
      image: "/realmoment.png",
      title: "Vinay",
      date: "Sep 03, 2023",
    },
    {
      id: 4,
      image: "/realmoment.png",
      title: "Vinay",
      date: "Sep 03, 2023",
    },
    {
      id: 5,
      image: "/realmoment.png",
      title: "Vinay",
      date: "Sep 03, 2023",
    },
    {
      id: 6,
      image: "/realmoment.png",
      title: "Vinay",
      date: "Sep 03, 2023",
    },
    {
      id: 7,
      image: "/realmoment.png",
      title: "Vinay",
      date: "Sep 03, 2023",
    },
    {
      id: 8,
      image: "/realmoment.png",
      title: "Vinay",
      date: "Sep 03, 2023",
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.realMomentContainer}>
        <h2 className={styles.heading}>Real Moments</h2>

        <div className={styles.slider}>
          <div className={styles.slideTrack}>
            {/* Repeat the data twice to create infinite loop effect */}
            {[...realData].map((real, index) => (
              <RealCard
                key={index} // use index because of duplicate data
                image={real.image}
                title={real.title}
                date={real.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealMoment;