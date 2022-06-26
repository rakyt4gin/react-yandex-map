import { useCustomSelector } from '../../../../customHooks/customHooks';
import Button from './Button/ToggleSidebarButton';
import Content from './Content/Content';
import styles from './Sidebar.module.scss';

const SidebarLeft: React.FC = () => {
  const selector = useCustomSelector((state) => state.mapSlice);

  return (
    <div className={`${styles.sidebar} ${selector.isSidebarShow ? styles.show : styles.hide}`}>
      <Content />
      <Button />
    </div>
  );
};

export default SidebarLeft;
