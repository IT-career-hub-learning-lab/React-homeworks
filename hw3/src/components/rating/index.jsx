import { useState } from "react";
import styles from "./style.module.css";
const ratingList = [
  "https://www.clipartmax.com/middle/m2i8H7A0A0Z5A0K9_5-star-rating-png",
  "https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png",
  "https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png",
  "https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png",
];
const ratingButtons = ["Отлично", "Хорошо", "Приемлемо", "Плохо"];
function Rating() {
  const [ratingValue, setRatingValue] = useState(0);
  return (
    <div className={styles.ratingContainer}>
      <img
        className={styles.ratingImage}
        src={ratingList[ratingValue]}
        alt="Rating"
      />
      <div className={styles.ratingButtons}>
        {ratingButtons.map((button, index) => {
          return (
            <button
              className={styles.ratingButton}
              key={index}
              onClick={() => setRatingValue(index)}
            >
              {button}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Rating;
