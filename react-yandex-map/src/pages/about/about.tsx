import React from 'react';
import { Button, Carousel } from 'antd';
import cn from 'classnames';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router';
import Year from './images/year.png';
import styles from './about.module.scss';
import bgImg from './img/Reki.jpg';
import Card from './cards/card';
import { useCustomDispatch, useCustomSelector } from '../../customHooks/customHooks';
import { setAboutPageVisible } from '../../store/aboutSlice';
import arrow from './img/Arrow.svg';

const AboutPage: React.FC = () => {
  const navigation = useNavigate();
  const { data, AboutPageVisible } = useCustomSelector((state) => state.about);
  const dispatch = useCustomDispatch();

  return (
    <div className={styles.about}>
      <Button className={cn(styles.back_btn)} onClick={() => dispatch(setAboutPageVisible(false))}>
        На главную
      </Button>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Проект <span>`Эра исторической памяти`</span>
          </h2>
          {/* <h3 className={styles.subtitle}>Без знания прошлого невозможно успешное будущее</h3> */}
          <p className={styles.text}>
            <span>После</span> объявления Президентом Республики Беларуси 2022 годом исторической
            памяти вознила идея сделать проект, представляющий собой систематизацию разнообразных
            мест, улиц, музеев, скверов т.д, связанных с известными личностями Республики Беларусь,
            героями Отечества, которыми гордится страна, историческими событиями страны,
            запечатленными в памятных местах
          </p>
          {/* <p className={styles.text}>
            <span>История</span> Беларуси многогранна, у нас было много трагических и героических
            страниц в любом историческом периоде, но нам всегда было чем гордиться. Прежде всего
            тем, что наши предки тысячелетиями жили на этом геополитическом перекрестке, через
            который прокатились тысячи военных конфликтов. Несмотря на это, мы отстояли свое право
            жить и развиваться на этой земле как считаем нужным
          </p> */}
        </div>
        <div className={styles.cards}></div>
        {data.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default AboutPage;
