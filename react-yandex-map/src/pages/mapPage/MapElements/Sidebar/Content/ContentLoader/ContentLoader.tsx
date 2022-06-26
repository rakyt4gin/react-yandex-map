import styles from './ContentLoader.module.scss';
import preload from '../../../../../../assets/img/preload.gif';

const ContentLoader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <img src={preload} alt="" />
    </div>
  );
};

export default ContentLoader;
