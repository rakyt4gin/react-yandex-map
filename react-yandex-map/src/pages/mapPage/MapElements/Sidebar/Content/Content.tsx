import { useCustomSelector } from '../../../../../customHooks/customHooks';
import styles from './Content.module.scss';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay.js';
import 'react-awesome-slider/dist/styles.css';
import oops from '../../../../../assets/img/oops.png';
import { useEffect, useState } from 'react';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Content: React.FC = () => {
  const [isContentHide, setContentHide] = useState(true);
  const selector = useCustomSelector((state) => state.mapSlice);
  const filteredItem = selector.data.filter((item) => item.id === selector.idClickedElement)[0];

  useEffect(() => {
    setTimeout(() => {
      console.log('ha');
      setContentHide(false);
    }, 100);
    return () => {
      if (!isContentHide) setContentHide(true);
    };
  });

  return (
    <>
      {selector.idClickedElement ? (
        <div className={`${styles.content} ${!isContentHide && styles.content_show}`}>
          <h2 className={styles.content__title}>{filteredItem.title}</h2>
          {filteredItem.images.length !== 0 && (
            <div className={styles.img_wrapper}>
              <AutoplaySlider
                play={false}
                cancelOnInteraction={true}
                interval={6000}
                bullets={false}
              >
                {filteredItem.images.map((img) => {
                  return <div key={img} data-src={img} />;
                })}
              </AutoplaySlider>
            </div>
          )}
          <div className={styles.content__description}>{filteredItem.description}</div>
          <div className={styles.content__more}>
            {filteredItem.more && (
              <a href={filteredItem.more} target="_blank" rel="noreferrer">
                Подробнее...
              </a>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.nocontent}>
          <img src={oops} alt="" />
          <p>
            <span>Упс...</span> Нет выбранного элемента карты для отображения более детальной
            информации.
          </p>
          <p>Выберите любой элемент на карте!</p>
        </div>
      )}
    </>
  );
};

export default Content;
