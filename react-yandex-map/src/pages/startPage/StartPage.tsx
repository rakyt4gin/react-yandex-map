import React from 'react';
import { Button, Carousel } from 'antd';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router';
import School_0 from './images/school-0.jpg';
import School_1 from './images/school-1.jpg';
import Year from './images/year.png';
import styles from './StartPage.module.scss';
import cn from 'classnames';

const images = [School_0, School_1];

const StartPage: React.FC = () => {
  const navigation = useNavigate();

  const contentStyle: React.CSSProperties = {
    height: '100vh',
    width: '100vw',
  };
  return (
    <div className={styles.main}>
      <div className={styles.greetings}>
        <div className={styles.wrapper}>
          <img src={Year} alt="" className={styles.year} />
          <Button className={cn(styles.greetings_btn)} onClick={() => navigation('/about')}>
            О проекте
          </Button>
        </div>
        <Button
          className={cn(styles.greetings_btn, styles.greetings_btn_animation)}
          onClick={() => navigation('/map')}
        >
          Перейти на карту
        </Button>
      </div>
      <Carousel autoplaySpeed={7000} pauseOnHover={false} autoplay>
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

export default StartPage;
