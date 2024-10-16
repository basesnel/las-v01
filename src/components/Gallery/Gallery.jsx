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
      <ul>
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
                />

                <source
                  srcset="
                      ./images/portfolio/tablet/portfolio-1-330.webp   768w,
                      ./images/portfolio/tablet/portfolio-1-660.webp  1536w,
                      ./images/portfolio/tablet/portfolio-1-990.webp  2304w,
                      ./images/portfolio/tablet/portfolio-1-1320.webp 3072w
                    "
                  media="(min-width: 768px) and (max-width: 1199px)"
                  type="image/webp"
                  width="330"
                  height="360"
                />

                <source
                  srcset="
                      ./images/portfolio/tablet/portfolio-1-330.jpg   768w,
                      ./images/portfolio/tablet/portfolio-1-660.jpg  1536w,
                      ./images/portfolio/tablet/portfolio-1-990.jpg  2304w,
                      ./images/portfolio/tablet/portfolio-1-1320.jpg 3072w
                    "
                  media="(min-width: 768px) and (max-width: 1199px)"
                  type="image/jpeg"
                  width="450"
                  height="360"
                /> */}

                {/* <source
                  srcset="
                      ./images/portfolio/mobile/portfolio-1-418.webp   480w,
                      ./images/portfolio/mobile/portfolio-1-836.webp   960w,
                      ./images/portfolio/mobile/portfolio-1-1254.webp 1440w,
                      ./images/portfolio/mobile/portfolio-1-1672.webp 1920w
                    "
                  width="418"
                  height="360"
                  type="image/webp"
                /> */}

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
