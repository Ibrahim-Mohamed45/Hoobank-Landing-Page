import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    {/* Card Deal Info */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal
        <br className="sm:block hidden" /> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We have a high quality card offering and have several 
      easy ways to use them according to your needs.
      </p>
      {/* Get Started */}
      <Button styles="mt-10" />
    </div>

    {/* Background Image */}
    <div className={layout.sectionImg}>
      <img src={card} alt="Card Deal" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;