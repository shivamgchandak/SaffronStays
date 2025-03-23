import React from "react";
import AmenitiesAndMeals from "./AmenitiesAndMeals";
import Location from "./Location";
import RealMoment from "./RealMoment";
import Rooms from "./Rooms";
import styles from "../styles/Other.module.css";

const Other: React.FC = () => {
  return (
    <div className={styles.othercontainer}>
        <AmenitiesAndMeals/>
        <RealMoment/>
        <Location/>
        <Rooms/>
    </div>
  );
};

export default Other;