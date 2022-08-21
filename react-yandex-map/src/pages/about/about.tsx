import React from 'react';
import { Button, Carousel } from 'antd';
import cn from 'classnames';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router';
import Year from './images/year.png';
import styles from './about.module.scss';
import bgImg from './img/Reki.jpg';
import Card from './cards/card';
import { useCustomSelector } from '../../customHooks/customHooks';

const AboutPage: React.FC = () => {
  const navigation = useNavigate();
  const { data } = useCustomSelector((state) => state.about);

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className={styles.about}
    >
      <div className={styles.blur}></div>

      <div className={styles.container}>
        <Button className={cn(styles.back_btn)} onClick={() => navigation('/')}>
          На главную
        </Button>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Проект <span>`2022</span> - год исторической памяти.<span>`</span>
          </h2>
          <h3 className={styles.subtitle}>Без знания прошлого невозможно успешное будущее.</h3>
          <p className={styles.text}>
            <span>История</span> Беларуси многогранна, у нас было много трагических и героических
            страниц в любом историческом периоде, но нам всегда было чем гордиться. Прежде всего
            тем, что наши предки тысячелетиями жили на этом геополитическом перекрестке, через
            который прокатились тысячи военных конфликтов. Несмотря на это, мы отстояли свое право
            жить и развиваться на этой земле как считаем нужным
          </p>
        </div>
        <div className={styles.cards}>
          {data.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
