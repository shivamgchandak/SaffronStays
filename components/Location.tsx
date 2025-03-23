import React from "react";
import styles from "../styles/location.module.css";
import CustomButton from "./ui/CustomButton";

const Location: React.FC = () => {
  const latitude: number = 18.749528;
  const longitude: number = 72.878528;

  const mapsLink: string = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  const handleGetDirection = (): void => {
    window.open(mapsLink, "_blank");
  };

  return (
    <div className={styles.main}>
        <section className={styles.locationSection}>
            <h2 className={styles.heading}>Location</h2>

            <div className={styles.mapContainer}>
                <iframe
                src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
                title="Google Map"
                ></iframe>
            </div>

            <CustomButton width={200} onClick={handleGetDirection}>
                Get Direction
            </CustomButton>
        </section>
    </div>
  );
};

export default Location;