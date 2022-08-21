import { Button } from 'antd';
import styles from './card.module.scss';
import share from '../img/share.png';
interface IProps {
  id: number;
  title: string;
  img: any;
  text: string;
}

const Card = ({ title, img, text, id }: IProps): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.card_container}>
        <div className={styles.img}>
          <img src={img} alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.content_title}>{title}</div>
          <div className={styles.content_text}>{text}</div>
        </div>
      </div>
      {/* <div className={styles.btn_wrapper}>
        <Button className={styles.btn}>
          <img src={share} alt="" />
        </Button>
      </div> */}
    </div>
  );
};

export default Card;
