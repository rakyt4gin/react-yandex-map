import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { Button } from 'antd';

const Header: React.FC = () => {
  const navigation = useNavigate();

  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <Button onClick={() => navigation('/')}>На главную</Button>
      </div>
    </div>
  );
};

export default Header;
