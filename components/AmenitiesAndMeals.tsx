import { useState } from "react";
import Image from "next/image";
import CustomButton from "./ui/CustomButton";
import styles from "../styles/AmenitiesAndMeals.module.css";

interface Amenity {
  icon: string;
  text: string;
}

const AmenitiesAndMeals: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const amenities: Amenity[] = [
    { icon: "/bed.png", text: "4 Bedrooms" },
    { icon: "/guestperson.png", text: "12 Guests" },
    { icon: "/parking.png", text: "Free Parking" },
    { icon: "/AC.png", text: "Air conditioning" },
    { icon: "/bed.png", text: "4 Bedrooms" },
    { icon: "/guestperson.png", text: "12 Guests" },
    { icon: "/parking.png", text: "Free Parking" },
    { icon: "/AC.png", text: "Air conditioning" },
    { icon: "/bed.png", text: "4 Bedrooms" },
    { icon: "/guestperson.png", text: "12 Guests" },
    { icon: "/parking.png", text: "Free Parking" },
    { icon: "/AC.png", text: "Air conditioning" },
  ];

  const defaultVisibleCount = 3;
  const handleToggle = (): void => setShowAll(!showAll);

  const displayedAmenities = showAll
    ? amenities
    : amenities.slice(0, defaultVisibleCount * 2); // 2 per row

  return (
    <div className={styles.container}>
      {/* Amenities */}
      <div className={styles.section1}>
        <h1 className={styles.title1}>Amenities</h1>

        <div className={styles.amenitiesGrid}>
          {Array.from({ length: Math.ceil(displayedAmenities.length / 2) }).map(
            (_, rowIndex) => (
              <div key={rowIndex} className={styles.row}>
                {displayedAmenities
                  .slice(rowIndex * 2, rowIndex * 2 + 2)
                  .map((amenity, index) => (
                    <div key={index} className={styles.item}>
                      <Image
                        src={amenity.icon}
                        alt={amenity.text}
                        width={20}
                        height={20}
                      />
                      <p>{amenity.text}</p>
                    </div>
                  ))}
              </div>
            )
          )}
        </div>

        <div className={styles.buttonContainer}>
          <CustomButton width={180} onClick={handleToggle}>
            {showAll ? "Show Less" : "View All Amenities"}
          </CustomButton>
        </div>
      </div>

      {/* Meals */}
      <div className={styles.section2}>
        <h1 className={styles.title2}>Meals</h1>

        <p className={styles.description}>
          A cook is available to prepare local specialties and a delicious spread
          of home-cooked meals all day, at an additional charge
        </p>

        <div className={styles.tags}>
          <div className={styles.vegcontainer}>
            <Image src="/veg.png" alt="veg" width={24} height={24} />
            <p className={styles.veg}>Veg</p>
          </div>

          <div className={styles.vegcontainer}>
            <Image src="/nonveg.png" alt="nonveg" width={24} height={24} />
            <p className={styles.veg}>Non Veg</p>
          </div>
        </div>

        <div className={styles.buttons}>
          <CustomButton width={120}>View Menu</CustomButton>
          <CustomButton width={150}>Meal Rate Card</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesAndMeals;