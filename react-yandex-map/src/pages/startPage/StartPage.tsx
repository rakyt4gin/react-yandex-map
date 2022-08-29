import React, { useState } from 'react';
import { Button, Carousel, Modal } from 'antd';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router';
import School_0 from './images/school-0.jpg';
import School_1 from './images/school-1.jpg';
import Year from './images/year.png';
import styles from './StartPage.module.scss';
import cn from 'classnames';
import AboutPage from '../about/about';
import { useCustomDispatch, useCustomSelector } from '../../customHooks/customHooks';
import { setAboutPageVisible } from '../../store/aboutSlice';
import { ExclamationCircleOutlined, QuestionOutlined } from '@ant-design/icons';
import { setRedirectToMapPage } from '../../store/appSlice';
const { confirm } = Modal;

const images = [School_0];

const StartPage: React.FC = () => {
  const navigation = useNavigate();
  const { AboutPageVisible } = useCustomSelector((state) => state.about);
  const dispatch = useCustomDispatch();
  const [isModalVisible, setModalVisible] = useState(false);

  const showConfirm = () => {
    confirm({
      title: 'Хотите посмотреть начальное руководство?',
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        dispatch(setRedirectToMapPage(true));
        navigation('/help');
      },
      onCancel: () => navigation('/map'),
      cancelText: 'Нет',
      okText: 'Да',
    });
  };

  return (
    <>
      <div
        className={cn(styles.global, {
          [styles.about_active]: AboutPageVisible,
        })}
      >
        <AboutPage />
        <div className={styles.main}>
          <div className={styles.greetings}>
            <div className={styles.wrapper}>
              <img src={Year} alt="" className={styles.year} />
              <Button
                className={cn(styles.greetings_btn)}
                onClick={() => dispatch(setAboutPageVisible(true))}
              >
                О проекте
              </Button>
            </div>
            <Button
              className={cn(styles.greetings_btn, styles.greetings_btn_animation)}
              onClick={() => {
                const isHelp = sessionStorage.getItem('isHelp');
                isHelp === 'true' ? navigation('/map') : showConfirm();
              }}
            >
              Перейти на карту
            </Button>
            <Button
              className={styles.question_btn}
              onClick={() => {
                dispatch(setRedirectToMapPage(false));
                navigation('/help');
              }}
            >
              <QuestionOutlined />
            </Button>
          </div>
        </div>
      </div>
      {/* <Modal
        className={styles.modal}
        title="Хотите пройти начальное руководство?"
        visible={isModalVisible}
        onOk={() => navigation('/help')}
        onCancel={() => navigation('/map')}
      /> */}
    </>
  );
};

export default StartPage;
