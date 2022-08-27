import { Button, Carousel, CarouselProps } from 'antd';
import { CarouselRef } from 'antd/lib/carousel';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './help.module.scss';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';

const contentStyle: React.CSSProperties = {
  height: '100vh',
  width: '100vw',
};

const images = [img1, img2, img3];

const Help = (): JSX.Element => {
  const navigation = useNavigate();
  const [slides, setSlides] = useState(0);
  const carouselRef = useRef<CarouselRef>(null);

  return (
    <div className={styles.help}>
      <div className={styles.btn_wrapper}>
        {slides !== 0 && (
          <button
            className={styles.btn}
            onClick={() => {
              setSlides(slides - 1);
              carouselRef?.current?.prev();
            }}
          >
            Назад
          </button>
        )}

        <button className={styles.btn} onClick={() => navigation('/')}>
          {slides !== images.length - 1 ? <>Пропустить</> : <>Завершить</>}
        </button>
        {slides !== images.length - 1 && (
          <button
            className={styles.btn}
            onClick={() => {
              setSlides(slides + 1);
              carouselRef?.current?.next();
            }}
          >
            {slides === 0 ? <>Начать</> : <>Дальше</>}
          </button>
        )}
      </div>
      <Carousel draggable={false} ref={carouselRef}>
        {images.map((item) => {
          return (
            <div key={item}>
              <img style={contentStyle} src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Help;
