import React from 'react';
import { Button, Carousel } from 'antd';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router';
import School_0 from './images/school-0.jpg';
import School_1 from './images/school-1.jpg';
import Year from './images/year.png';
import styles from './StartPage.module.scss';

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
        <img src={Year} alt="" className={styles.year} />
        <Button className={styles.greetings_btn} onClick={() => navigation('/map')}>
          Перейти на карту
        </Button>
      </div>
      <Carousel autoplaySpeed={10000} pauseOnHover={false} autoplay>
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
