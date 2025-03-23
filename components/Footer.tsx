import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    // main
    <div className={styles.main}>
      {/* footer container */}
      <div className={styles.footercontainer}>
        {/* top */}
        <div className={styles.footertop}>
          <div className={styles.footermobile}>
            <Image src="/footermobile.png" alt="SaffronStays" height={35} width={140} />
          </div>

          {/* section1 */}
          <div className={styles.section}>
            <h1>Company</h1>
            <p>SaffronStays</p>
            <p>Signature</p>
            <p>XSeries</p>
            <p>About</p>
          </div>

          {/* section2 */}
          <div className={styles.section}>
            <h1>Company</h1>
            <p>SaffronStays</p>
            <p>Signature</p>
            <p>XSeries</p>
            <p>About</p>
          </div>

          {/* section3 */}
          <div className={styles.section}>
            <h1>Contact</h1>
            <a href="#">mail@saffronstays.com</a>
            <p>+91 3728253727</p>
            <p>Contact us</p>
            <p>Contact to Partner</p>
          </div>

          {/* section4 */}
          <div className={styles.section}>
            <h1>Partner with us</h1>
            <p>List a home</p>
          </div>

          {/* section5 */}
          <div className={styles.section}>
            <h1>Policies</h1>
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p>Sitemap</p>
            <p>Cancellation Policy</p>
          </div>
        </div>

        {/* bottom */}
        <div className={styles.footerbottom}>
          <h1>© 2021 SaffronStays. All rights reserved</h1>

          <div className={styles.footerlogo}>
            <Image src="/facebook.png" alt="facebook" width={20} height={20} />
            <Image src="/instagram.png" alt="instagram" width={20} height={20} />
            <Image src="/twitter.png" alt="twitter" width={20} height={20} />
            <Image src="/linkedin.png" alt="linkedin" width={20} height={20} />
            <Image src="/youtube.png" alt="youtube" width={20} height={20} />
            <Image src="/pinterest.png" alt="pinterest" width={20} height={20} />
            <Image src="/google.png" alt="google" width={20} height={20} />
          </div>

          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;