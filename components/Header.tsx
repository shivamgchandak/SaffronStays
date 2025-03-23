import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleSearchClick = (): void => {
    setIsActive(prev => !prev);
  };

  return (
    // main nav
    <nav className={styles.nav}>

      {/* main container */}
      <div className={styles.headerContainer}>

        {/* Left Section */}
        <div className={styles.leftSection}>

          {/* xseries */}
          <div className={styles.xSeries}>
            <Image
              src="/xseries.png"
              alt="XSERIES Logo"
              width={185}
              height={42}
              priority
            />
          </div>

          {/* search bar */}
          <div
            className={`${styles.searchContainer} ${isActive ? styles.searchContainerActive : ''}`}
            onClick={handleSearchClick}
          >
            <div className={styles.searchBar}>
              <Image src="/Vector.png" alt="Search Icon" width={16} height={16} />
              <input
                type="text"
                placeholder="Search for location, villa, facilities..."
              />
            </div>
          </div>
        </div>


        {/* Right Section */}
        <div className={styles.rightSection}>

          {/* saffronstays */}
          <div className={styles.headerSaffronStays}>
            <Image src="/Union.png" alt="SaffronStays Icon" width={26} height={24} />
            <p className={styles.saffronstaysText}>SaffronStays</p>
          </div>

          {/* contact */}
          <div className={styles.headerContact}>
            <Image src="/Group.png" alt="Phone Icon" width={16} height={16} />
            <p className={styles.contactText}>08069160000</p>
          </div>

          {/* login button */}
          <div className={styles.headerLogin}>
            <button className={styles.headerButton}>Login</button>
          </div>
        </div>

      </div>

      <div className={styles.headercontainermobile}>

          <div className={styles.mobileleft}>
            <div className={styles.headerSaffronStaysMobile}>
              <Image src="/Union.png" alt="SaffronStays Icon" width={26} height={24} />
              <p className={styles.saffronstaysTextMobile}>SaffronStays</p>
            </div>

            <div
              className={`${styles.searchContainer} ${isActive ? styles.searchContainerActive : ''}`}
              onClick={handleSearchClick}
            >
              <div className={styles.searchBar}>
                <Image src="/Vector.png" alt="Search Icon" width={16} height={16} />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Search for location, villa, facilities..."
                />
              </div>
            </div>

          </div>

          <div className={styles.headerLogin}>
            <button className={styles.headerButton}>Login</button>
          </div>

      </div>

    </nav>
  );
};

export default Header;