import { useEffect, useRef } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../../../../../customHooks/customHooks';
import { dbType } from '../../../../../../store/db';
import {
  setCenter,
  setElementClicked,
  setZoom,
  toggleSidebar,
} from '../../../../../../store/mapSlice';
import styles from './ContentItem.module.scss';

type Props = {
  item: dbType;
};

const ContentItem: React.FC<Props> = ({ item }) => {
  const dispatch = useCustomDispatch();
  const ref = useRef(null);
  const selector = useCustomSelector((state) => state.mapSlice);

  useEffect(() => {
    if (selector.idClickedElement === item.id) {
      ref.current &&
        (ref.current as HTMLDivElement).scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
    }
  }, [selector.idClickedElement]);

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
    dispatch(toggleSidebar(true));
  };

  return (
    <>
      {item.title && (
        <div
          ref={ref}
          onClick={() => onItemClick(item)}
          className={`${styles.item} ${
            selector.idClickedElement === item.id && styles.item_selected
          }`}
        >
          <h3 className={styles.title}>{item.title}</h3>
        </div>
      )}
    </>
  );
};

export default ContentItem;
