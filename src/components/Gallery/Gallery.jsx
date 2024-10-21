import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";
import gallery from "../../constants/gallery";

import styles from "./styles.module.css";

const Gallery = () => {
  const { subTitle, title, images } = gallery;

  return (
    <Section indexSection={6}>
      <Subtitle mode="gallery">{subTitle.uk}</Subtitle>
      <Heading level={2} mode="hidden" title={title.uk} />
      <ul className={styles.list}>
        {images.map((image, i) => (
          <li key={i} className={styles.item}>
            <div className={styles.thumb}>
              <picture>
                {/* <source
                  srcset="
                      ./images/portfolio/desktop/portfolio-1-270.webp  1200w,
                      ./images/portfolio/desktop/portfolio-1-540.webp  2400w,
                      ./images/portfolio/desktop/portfolio-1-810.webp  3600w,
                      ./images/portfolio/desktop/portfolio-1-1080.webp 4800w
                    "
                  media="(min-width: 1200px)"
                  type="image/webp"
                  width="270"
                  height="360"
                />

                <source
                  srcset="
                      ./images/portfolio/desktop/portfolio-1-270.jpg  1200w,
                      ./images/portfolio/desktop/portfolio-1-540.jpg  2400w,
                      ./images/portfolio/desktop/portfolio-1-810.jpg  3600w,
                      ./images/portfolio/desktop/portfolio-1-1080.jpg 4800w
                    "
                  media="(min-width: 1200px)"
                  type="image/jpeg"
                  width="270"
                  height="360"
                /> */}

                <source
                  srcSet={`${image.tab1xWBP} 768w, ${image.tab2xWBP} 1536w, ${image.tab3xWBP} 2304w, ${image.tab2xWBP} 2072w`}
                  media="(min-width: 768px) and (max-width: 1199px)"
                  width={330}
                  height={360}
                  type="image/webp"
                />

                <source
                  srcSet={`${image.tab1xJPG} 768w, ${image.tab2xJPG} 1536w, ${image.tab3xJPG} 2304w, ${image.tab2xJPG} 2072w`}
                  media="(min-width: 768px) and (max-width: 1199px)"
                  width={330}
                  height={360}
                  type="image/jpeg"
                />

                <source
                  srcSet={`${image.mob1xWBP} 480w, ${image.mob2xWBP} 960w, ${image.mob3xWBP} 1440w, ${image.mob2xWBP} 1920w`}
                  width={418}
                  height={360}
                  type="image/webp"
                />

                <img
                  loading="lazy"
                  srcSet={`${image.mob1xJPG} 480w, ${image.mob2xJPG} 960w, ${image.mob3xJPG} 1440w, ${image.mob2xJPG} 1920w`}
                  src={image.mob2xJPG}
                  alt={image.alt.uk}
                  width={418}
                  height={360}
                  className={styles.image}
                />
              </picture>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Gallery;
