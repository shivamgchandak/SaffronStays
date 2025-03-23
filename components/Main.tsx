import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Main.module.css';
import CustomButton from './ui/CustomButton';

type SlideType = {
  type: 'image' | 'video';
  src?: string;
  videoSrc?: string;
};

const Main: React.FC = () => {

  const [guests, setGuests] = useState<number>(2);
  
  const handleIncrease = (): void => {
    if (guests < 12) setGuests(prev => prev + 1);
  };
  
  const handleDecrease = (): void => {
    if (guests > 2) setGuests(prev => prev - 1);
  };

  const slides: SlideType[] = [
    { type: 'image', src: '/main.png' },
    { type: 'image', src: '/main2.jpg' },
    { type: 'image', src: '/main.png' },
    { type: 'image', src: '/main2.jpg' },
    {
      type: 'video',
      videoSrc: '/villa.mp4',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleDotClick = (index: number): void => {
    setCurrentSlide(index);
  };

  const handlePlayVideo = (): void => {
    const videoIndex = slides.findIndex((slide) => slide.type === 'video');
    if (videoIndex !== -1) {
      setCurrentSlide(videoIndex);
    }
  };

  return (
    // main container
    <div className={styles.mainContainer}>
      {/* container */}
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroImageWrapper}>
            {slides[currentSlide].type === 'video' ? (
              <video
                className={styles.videoPlayer}
                src={slides[currentSlide].videoSrc}
                autoPlay
                loop
                playsInline
              />
            ) : (
              <Image
                src={slides[currentSlide].src || ''}
                alt="Sea La Vie Villa"
                fill
                className={styles.heroImage}
              />
            )}
          </div>

          {/* Slider Controls */}
          <div className={styles.sliderControls}>
            {/* Dots for images only */}
            <div className={styles.dots}>
              {slides
                .filter((slide) => slide.type === 'image')
                .map((_, index) => (
                  <span
                    key={index}
                    className={`${styles.dot} ${
                      slides[currentSlide].type === 'image' &&
                      currentSlide === index
                        ? styles.activeDot
                        : ''
                    }`}
                    onClick={() => handleDotClick(index)}
                  ></span>
                ))}
            </div>

            {/* Divider */}
            <div className={styles.divider}>|</div>

            {/* Video Play Button */}
            <div className={styles.videoButton} onClick={handlePlayVideo}>
              ▶
            </div>
          </div>

          <div className={styles.heroText}>
            <h1>Sea La Vie</h1>
            <p>Alibaug, Maharashtra</p>
            <div className={styles.xSeries}>
              <Image
                className={styles.xseriesimage}
                src="/xseries.png"
                alt="XSERIES Logo"
                width={85}
                height={20}
                priority
              />
            </div>
          </div>

          <div className={styles.extraimages}>
            <Image
              className={styles.imagesextraimages}
              src="/extraimages.png"
              alt="extraimages"
              width={130}
              height={130}
            />
          </div>
        </div>

        {/* Info Section (no changes here) */}
    <div className={styles.infoSection}>
    <div className={styles.leftInfo}>
      <div className={styles.ratingContainer}>
        <div className={styles.rating}>
          <span className={styles.ratingspan}>
            <Image src="/star.png" alt="star" height={20} width={20} /> 4.5{' '}
            <span>/ 5</span>
          </span>
          <span className={styles.afterrating}></span>
          <a href="#">105 reviews</a>
        </div>

        <div className={styles.actions}>
          <button className={styles.iconButton} aria-label="Share">
            <Image src="/share.png" alt="Share" height={20} width={20} />
          </button>

          <button className={styles.iconButton} aria-label="Favorite">
            <Image src="/heart.png" alt="Favorite" height={20} width={20} />
          </button>
        </div>
      </div>

      <div className={styles.tags}>
        <span className={styles.tagItem}>
          <Image src="/home.png" alt="home" height={16} width={16} />
          <span>Entire Villa</span>
        </span>
        <span className={styles.tagItem}>
          <Image src="/guestperson.png" alt="guestperson" height={16} width={16} />
          <span>6-12 Guests</span>
        </span>
        <span className={styles.tagItem}>
          <Image src="/bed.png" alt="bed" height={16} width={16} />
          <span>8 Bedrooms</span>
        </span>
        <span className={styles.tagItem}>
          <Image src="/pet.png" alt="pet" height={16} width={16} />
          <span>Pet-Friendly</span>
        </span>
      </div>

      <div className={styles.about}>
        <h3>About</h3>
        <ul>
          <li>
            Tucked away cosily in the lap of nature, this is the perfect destination getaway for a vacation trip near Delhi and Chandigarh.
          </li>
          <li>
            The tourist-favourite Bhimtal Lake is only a throw away.{' '}
            <a href="#">Read more</a>
          </li>
        </ul>
      </div>

      <div className={styles.bottomButtons}>
        <CustomButton width={145}>House Rules</CustomButton>
        <CustomButton width={185}>Cancellation Policy</CustomButton>
        <CustomButton width={225}>Things you need to know</CustomButton>
        <CustomButton width={145}>Things to do</CustomButton>
      </div>
    </div>

    <div className={styles.rightBooking}>
      <div className={styles.priceBox}>
        <div className={styles.priceRow}>
          <span className={styles.oldPrice}>₹1,49,086</span>
          <span className={styles.newPrice}>₹1,00,086</span>
          <span className={styles.newPriceNight}>/Night</span>
        </div>

        <span className={styles.afterPrice}></span>

        <div className={styles.discountDiv}>
          <h1>Special discounts available!!</h1>
          <button>Unlock Price</button>
        </div>

        <div className={styles.inputGroup}>
          {/* Date Picker Section */}
          <div className={styles.inputWrapper}>
            <div className={styles.leftSection}>
              <Image
                src="/calander.png"
                alt="calendar"
                width={16}
                height={16}
                className={styles.icon}
              />
              <input
                type="text"
                placeholder="Check in - Check out"
                className={styles.inputField}
              />
            </div>

            <div className={styles.arrowWrapper}>
              <Image
                src="/uparrow.png"
                alt="Open"
                width={10}
                height={6}
                className={styles.arrow}
              />
              <Image
                src="/downarrow.png"
                alt="Close"
                width={10}
                height={6}
                className={styles.arrow}
              />
            </div>
          </div>

          {/* Guests Input Section */}
          <div className={styles.inputWrapper}>
            <div className={styles.leftSection}>
              <Image
                src="/guests.png"
                alt="guests"
                width={16}
                height={16}
                className={styles.icon}
              />
              <input
                type="text"
                value={`${guests} Guests`}
                readOnly
                className={styles.inputField}
              />
            </div>

            <div className={styles.arrowWrapper}>
              <Image
                src="/uparrow.png"
                alt="uparrow"
                width={10}
                height={6}
                className={styles.arrow}
                onClick={handleIncrease}
              />
              <Image
                src="/downarrow.png"
                alt="downarrow"
                width={10}
                height={6}
                className={styles.arrow}
                onClick={handleDecrease}
              />
            </div>
          </div>
        </div>

        <button className={styles.checkAvailabilityButton}>
          Check Availability
        </button>
      </div>
    </div>
  </div>



        
      </div>

    </div>
  );
};

export default Main;