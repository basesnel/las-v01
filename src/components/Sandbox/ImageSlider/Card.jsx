import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getVariants } from "./getVariants";

import styles from "./styles.module.css";

const Card = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const { image, index, media, positionIndexes, positions, ...delegated } =
    props;

  return (
    <motion.figure
      className={styles.card}
      initial="center"
      animate={positions[positionIndexes[index]]}
      variants={getVariants(media)}
      transition={{ type: "spring", stiffness: 90 }}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
      {...delegated}
    >
      <picture>
        <source
          srcSet={`${image.dtp1xWBP} 418w, ${image.dtp2xWBP} 836w, ${image.dtp3xWBP} 1254w, ${image.dtp4xWBP} 1672w`}
          sizes="418px"
          media="(min-width: 1200px)"
          width={418}
          height={360}
          type="image/webp"
        />

        <source
          srcSet={`${image.dtp1xJPG} 418w, ${image.dtp2xJPG} 836w, ${image.dtp3xJPG} 1254w, ${image.dtp4xJPG} 1672w`}
          sizes="418px"
          media="(min-width: 1200px)"
          width={418}
          height={360}
          type="image/jpeg"
        />

        <source
          srcSet={`${image.tab1xWBP} 330w, ${image.tab2xWBP} 660w, ${image.tab3xWBP} 990w, ${image.tab4xWBP} 1320w`}
          sizes="330px"
          media="(min-width: 768px) and (max-width: 1199px)"
          width={330}
          height={360}
          type="image/webp"
        />

        <source
          srcSet={`${image.tab1xJPG} 330w, ${image.tab2xJPG} 660w, ${image.tab3xJPG} 990w, ${image.tab4xJPG} 1320w`}
          sizes="330px"
          media="(min-width: 768px) and (max-width: 1199px)"
          width={330}
          height={360}
          type="image/jpeg"
        />

        <source
          srcSet={`${image.mob1xWBP} 270w, ${image.mob2xWBP} 540w, ${image.mob3xWBP} 810w, ${image.mob4xWBP} 1080w`}
          sizes="(max-width: 332px) calc(100vw - 62px), 270px"
          width={270}
          height={360}
          type="image/webp"
        />

        <img
          loading="lazy"
          srcSet={`${image.mob1xJPG} 270w, ${image.mob2xJPG} 540w, ${image.mob3xJPG} 810w, ${image.mob4xJPG} 1080w`}
          sizes="(max-width: 332px) calc(100vw - 62px), 270px"
          src={image.mob2xJPG}
          alt={image.alt.uk}
          width={270}
          height={360}
          className={styles.image}
        />
      </picture>
      <AnimatePresence>
        {showOverlay && (
          <motion.figcaption
            className={styles.cardOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div className={styles.bgBlack} aria-hidden="true" />
            <motion.span
              className={styles.label}
              initial={{ y: 20 }}
              animate={{ y: 0, transition: { duration: 0.5 } }}
              exit={{ y: 20, transition: { duration: 0.5 } }}
            >
              {image.alt.uk}
            </motion.span>
          </motion.figcaption>
        )}
      </AnimatePresence>
    </motion.figure>
  );
};

export default Card;
