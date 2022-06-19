import Content from './Content/Content';
import styles from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <Content />
      {/* <Button /> */}
    </div>
  );
};

export default Sidebar;
