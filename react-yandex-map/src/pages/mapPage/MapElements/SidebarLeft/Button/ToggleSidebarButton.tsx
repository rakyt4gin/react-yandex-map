import { Button } from 'antd';
import styles from './ToggleSidebarButton.module.scss';
import { CaretRightOutlined } from '@ant-design/icons';
import { useCustomDispatch, useCustomSelector } from '../../../../../customHooks/customHooks';
import { toggleSidebar } from '../../../../../store/mapSlice';

const ToggleSidebarButton: React.FC = () => {
  const selector = useCustomSelector((state) => state.mapSlice);
  const dispatch = useCustomDispatch();

  const toggleSidebarFn = () => {
    if (selector.isSidebarShow) dispatch(toggleSidebar(false));
    else dispatch(toggleSidebar(true));
  };

  return (
    <div className={styles.button_wrapper}>
      <Button onClick={toggleSidebarFn} className={styles.button}>
        <CaretRightOutlined className={selector.isSidebarShow ? styles.hide : styles.show} />
      </Button>
    </div>
  );
};

export default ToggleSidebarButton;
