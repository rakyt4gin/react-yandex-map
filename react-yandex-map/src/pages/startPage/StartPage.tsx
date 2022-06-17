import { useNavigate } from 'react-router';
import styles from './StartPage.module.scss';
import img from '../../assets/svg/home.svg';

const StartPage: React.FC = () => {
  const navigation = useNavigate();

  return (
    <div className={styles.main}>
      <div className={styles.main__content}>
        <h1>Добро пожаловать</h1>
        <button onClick={() => navigation('/map')}>Click</button>
      </div>
    </div>
  );
};

export default StartPage;
