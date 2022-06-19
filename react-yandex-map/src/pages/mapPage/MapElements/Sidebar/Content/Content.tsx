import { useCustomSelector } from '../../../../../customHooks/customHooks';
import styles from './Content.module.scss';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay.js';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Content: React.FC = () => {
  const selector = useCustomSelector((state) => state.mapSlice);
  const filteredItem = selector.data.filter((item) => item.id === selector.idClickedElement)[0];

  return (
    <>
      {selector.idClickedElement && (
        <div className={styles.content}>
          <h2 className={styles.content__title}>{filteredItem.title}</h2>
          <div className={styles.img_wrapper}>
            <AutoplaySlider
              play={true}
              cancelOnInteraction={false} // should stop playing on user interaction
              interval={6000}
              bullets={false}
            >
              {filteredItem.images.map((img) => {
                return <div key={img} data-src={img} />;
              })}
            </AutoplaySlider>
          </div>
          <div className={styles.content__description}>{filteredItem.description}</div>
          <div className={styles.content__more}>
            {filteredItem.more && (
              <a href={filteredItem.more} target="_blank" rel="noreferrer">
                Подробнее...
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
