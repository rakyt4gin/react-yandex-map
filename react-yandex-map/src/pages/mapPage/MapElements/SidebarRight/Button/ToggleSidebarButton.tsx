import { Button } from 'antd';
import styles from './ToggleSidebarButton.module.scss';
import { CaretRightOutlined } from '@ant-design/icons';
import { useCustomDispatch, useCustomSelector } from '../../../../../customHooks/customHooks';
import { toggleSidebar, toggleSidebarRight } from '../../../../../store/mapSlice';

const ToggleSidebarButton: React.FC = () => {
  const selector = useCustomSelector((state) => state.mapSlice);
  const dispatch = useCustomDispatch();

  const toggleSidebarFn = () => {
    if (selector.isSidebarRightShow) dispatch(toggleSidebarRight(false));
    else dispatch(toggleSidebarRight(true));
  };

  return (
    <div className={styles.button_wrapper}>
      <Button onClick={toggleSidebarFn} className={styles.button}>
        <CaretRightOutlined className={selector.isSidebarRightShow ? styles.hide : styles.show} />
      </Button>
    </div>
  );
};

export default ToggleSidebarButton;
