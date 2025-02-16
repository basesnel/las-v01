import { useState, useEffect, useRef } from "react";
import useMeasure from "react-use-measure";
import {
  animate,
  useInView,
  motion,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import Section from "../Section/Section";
import Subtitle from "../Subtitle/Subtitle";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Reference from "../Reference/Reference";

import towtruck from "../../constants/towtruck";

import styles from "./styles.module.css";

const spring = {
  type: "spring",
  dumping: 20,
  stiffness: 100,
};

const TowTruck = () => {
  const {
    subTitle,
    title,
    preText,
    firstText,
    transports,
    secondText,
    suggests,
    link,
    images,
  } = towtruck;

  return (
    <Section indexSection={3} containerVariant="towtruck">
      <div className={styles.content}>
        <Subtitle>{subTitle.uk}</Subtitle>
        <Heading level={2} mode="intro" title={title.uk} />
        <Text mode="towtruckWelcome">{preText.uk}</Text>
        <Text mode="towtruck">{firstText.uk}</Text>
        <List list={transports} />
        <Text mode="towtruck">{secondText.uk}</Text>
        <List list={suggests} />
        <Reference src={link.src} caption={link.text.uk} />
      </div>
      <aside className={styles.aside}>
        <div className={styles.bigCard}>
          <img
            loading="lazy"
            src={images[0].towtruck}
            alt={images[0].alt.uk}
            className={styles.bigImage}
          />
        </div>
        <GalleryList images={images} />
        {/* <div className={styles.wrapFrames}>
          <ul className={styles.frames}>
            <li className={styles.frame}>
              <div className={styles.thumb}>image 1</div>
            </li>
            <li className={styles.frame}>
              <div className={styles.thumb}>image 2</div>
            </li>
            <li className={styles.frame}>
              <div className={styles.thumb}>image 3</div>
            </li>
            <li className={styles.frame}>
              <div className={styles.thumb}>image 4</div>
            </li>
            <li className={styles.frame}>
              <div className={styles.thumb}>image 5</div>
            </li>
          </ul>
        </div> */}
      </aside>
    </Section>
  );
};

const List = ({ list }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8, once: true });

  const transportItem = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <ul ref={ref} className={styles.list}>
      {list.map(({ uk }, i) => {
        return (
          <motion.li
            key={i}
            className={styles.item}
            variants={transportItem}
            style={
              i % 2
                ? { originX: 1, originY: 0.5 }
                : { originX: 0, originY: 0.5 }
            }
            initial="hidden"
            animate={isInView && "visible"}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.4,
            }}
          >
            {uk}
          </motion.li>
        );
      })}
    </ul>
  );
};

const GalleryList = ({ images }) => {
  // const FAST_DURATION = 60;
  // const SLOW_DURATION = 600;

  // // const FAST_DURATION = 3;
  // // const SLOW_DURATION = 30;

  // const [duration, setDuration] = useState(FAST_DURATION);

  // let [ref, { width }] = useMeasure();

  // const xTransition = useMotionValue(0);

  // const [mustFinish, setMustFinish] = useState(false);
  // const [rerender, setRerender] = useState(false);

  // useEffect(() => {
  //   let controls;
  //   let finalPosition = -width / 2 - 5;
  //   console.log(width);

  //   if (mustFinish) {
  //     controls = animate(xTransition, [xTransition.get(), finalPosition], {
  //       ease: "linear",
  //       duration: duration * (1 - xTransition.get() / finalPosition),
  //       onComplete: () => {
  //         setMustFinish(false);
  //         setRerender(!rerender);
  //       },
  //     });
  //   } else {
  //     controls = animate(xTransition, [0, finalPosition], {
  //       ease: "linear",
  //       duration: duration,
  //       repeat: Infinity,
  //       repeatType: "loop",
  //       repeatDelay: 0,
  //     });
  //   }

  //   return controls.stop;
  // }, [xTransition, width, duration, rerender]);

  return (
    <div className={styles.wrapFrames}>
      <motion.ul
        className={styles.frames}
        // ref={ref}
        // style={{ x: xTransition }}
        // onHoverStart={() => {
        //   setMustFinish(true);
        //   setDuration(SLOW_DURATION);
        // }}
        // onHoverEnd={() => {
        //   setMustFinish(true);
        //   setDuration(FAST_DURATION);
        // }}
      >
        {[...images, ...images].map((image, i) => (
          // <li className={styles.frame} key={i}>
          //   <div className={styles.thumb}>image {image}</div>
          // </li>
          <li key={i} className={styles.frame}>
            <Card image={image} />
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

const Card = ({ image }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.figure
      className={styles.card}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <img
        loading="lazy"
        src={image.towtruck}
        alt={image.alt.uk}
        width={270}
        height={360}
        className={styles.image}
      />
      {/* <picture>
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
          sizes="(max-width: 480px) calc(100vw - 110px), 270px"
          width={270}
          height={360}
          type="image/webp"
        />

        <img
          loading="lazy"
          srcSet={`${image.mob1xJPG} 270w, ${image.mob2xJPG} 540w, ${image.mob3xJPG} 810w, ${image.mob4xJPG} 1080w`}
          sizes="(max-width: 480px) calc(100vw - 110px), 270px"
          src={image.mob2xJPG}
          alt={image.alt.uk}
          width={270}
          height={360}
          className={styles.image}
        />
      </picture> */}
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

export default TowTruck;
