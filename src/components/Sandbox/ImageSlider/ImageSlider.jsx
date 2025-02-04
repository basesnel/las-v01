import { motion } from "framer-motion";
import { throttle } from "lodash";
import gallery from "../../../constants/gallery";
import useReactMatchMedia from "../../../hooks/useReactMatchMedia";
import useSwipeGallery from "../../../hooks/useSwipeGallery";
import useHandlePositions from "../../../hooks/useHandlePositions";
import { galleryMediaQueries, getVariants } from "./getVariants";

import styles from "./styles.module.css";

const ImageSlider = () => {
  const { images } = gallery;

  const { positionIndexes, positions, handleNext, handlePrev, handleDrag } =
    useHandlePositions(images.length);

  const galleryMedia = useReactMatchMedia(galleryMediaQueries);

  useSwipeGallery(handleNext, handlePrev);

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.imageSlider}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0}
        onDrag={throttle(handleDrag, 310)}
      >
        {images.map((image, index) => (
          <Card
            image={image}
            index={index}
            media={galleryMedia}
            positionIndexes={positionIndexes}
            positions={positions}
            key={index}
          />

          // <motion.figure
          //   key={index}
          //   className={styles.card}
          //   initial="center"
          //   animate={positions[positionIndexes[index]]}
          //   variants={getVariants(myMedia)}
          //   transition={{ type: "spring", stiffness: 90 }}
          // >
          //   <picture>
          //     <source
          //       srcSet={`${image.dtp1xWBP} 418w, ${image.dtp2xWBP} 836w, ${image.dtp3xWBP} 1254w, ${image.dtp4xWBP} 1672w`}
          //       sizes="418px"
          //       media="(min-width: 1200px)"
          //       width={418}
          //       height={360}
          //       type="image/webp"
          //     />

          //     <source
          //       srcSet={`${image.dtp1xJPG} 418w, ${image.dtp2xJPG} 836w, ${image.dtp3xJPG} 1254w, ${image.dtp4xJPG} 1672w`}
          //       sizes="418px"
          //       media="(min-width: 1200px)"
          //       width={418}
          //       height={360}
          //       type="image/jpeg"
          //     />

          //     <source
          //       srcSet={`${image.tab1xWBP} 330w, ${image.tab2xWBP} 660w, ${image.tab3xWBP} 990w, ${image.tab4xWBP} 1320w`}
          //       sizes="330px"
          //       media="(min-width: 768px) and (max-width: 1199px)"
          //       width={330}
          //       height={360}
          //       type="image/webp"
          //     />

          //     <source
          //       srcSet={`${image.tab1xJPG} 330w, ${image.tab2xJPG} 660w, ${image.tab3xJPG} 990w, ${image.tab4xJPG} 1320w`}
          //       sizes="330px"
          //       media="(min-width: 768px) and (max-width: 1199px)"
          //       width={330}
          //       height={360}
          //       type="image/jpeg"
          //     />

          //     <source
          //       srcSet={`${image.mob1xWBP} 270w, ${image.mob2xWBP} 540w, ${image.mob3xWBP} 810w, ${image.mob4xWBP} 1080w`}
          //       sizes="(max-width: 332px) calc(100vw - 62px), 270px"
          //       width={270}
          //       height={360}
          //       type="image/webp"
          //     />

          //     <img
          //       loading="lazy"
          //       srcSet={`${image.mob1xJPG} 270w, ${image.mob2xJPG} 540w, ${image.mob3xJPG} 810w, ${image.mob4xJPG} 1080w`}
          //       sizes="(max-width: 332px) calc(100vw - 62px), 270px"
          //       src={image.mob2xJPG}
          //       alt={image.alt.uk}
          //       width={270}
          //       height={360}
          //       className={styles.image}
          //     />
          //   </picture>
          // </motion.figure>
        ))}
      </motion.div>
      <div className={styles.controls}>
        <button className={styles.next} onClick={handlePrev}>
          Prev
        </button>
        <button className={styles.next} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

const Card = (props) => {
  // const [showOverlay, setShowOverlay] = useState(false);
  const { image, index, media, positionIndexes, positions, ...delegated } =
    props;

  return (
    <motion.figure
      className={styles.card}
      initial="center"
      animate={positions[positionIndexes[index]]}
      variants={getVariants(media)}
      transition={{ type: "spring", stiffness: 90 }}
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
    </motion.figure>
  );
};

export default ImageSlider;
