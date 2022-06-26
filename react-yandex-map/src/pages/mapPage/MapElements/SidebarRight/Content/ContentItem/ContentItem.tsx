import { useCustomDispatch } from '../../../../../../customHooks/customHooks';
import { dbType } from '../../../../../../store/db';
import { setCenter, setElementClicked, setZoom } from '../../../../../../store/mapSlice';
import styles from './ContentItem.module.scss';

type Props = {
  item: dbType;
  selectedItemId: string;
};

const ContentItem: React.FC<Props> = ({ item, selectedItemId }) => {
  const dispatch = useCustomDispatch();

  const onItemClick = (item: dbType) => {
    let geometry: number[] | number[][] | number[][][];
    switch (item.type) {
      case 'place':
        geometry = item.geometry as number[];
        dispatch(setCenter(geometry));
        dispatch(setZoom(20));
        break;
      case 'road':
        geometry = (item.geometry as number[][])[0] as number[];
        dispatch(setCenter(geometry));
        dispatch(setZoom(15));
        break;
      case 'area':
        geometry = (item.geometry as number[][][])[0][0] as number[];
        dispatch(setCenter(geometry));
        dispatch(setZoom(15));
        break;
    }
    dispatch(setElementClicked(item.id));
  };

  return (
    <>
      {item.title && (
        <div
          onClick={() => onItemClick(item)}
          className={`${styles.item} ${selectedItemId === item.id && styles.item_selected}`}
        >
          <h3 className={styles.title}>{item.title}</h3>
        </div>
      )}
    </>
  );
};

export default ContentItem;
