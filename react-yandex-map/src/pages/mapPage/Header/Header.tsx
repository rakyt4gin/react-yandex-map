import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { Button, Input } from 'antd';
import { useCustomDispatch, useCustomSelector } from '../../../customHooks/customHooks';
import { useState } from 'react';
import { dbStoreType } from '../../../store/db';
import { setCenter, setElementClicked, setZoom, toggleSidebar } from '../../../store/mapSlice';

const Header: React.FC = () => {
  const navigation = useNavigate();
  const { data } = useCustomSelector((state) => state.mapSlice);
  const dispatch = useCustomDispatch();
  const [filteredData, setFilteredData] = useState<dbStoreType[]>([]);

  const onChange = (value: string) => {
    const filterElements = data
      .filter((item) => {
        return item.title.length > 0;
      })
      .filter((item) => item.title.toLowerCase().match(value));
    value.length > 0 ? setFilteredData(filterElements) : setFilteredData([]);
  };

  const onItemClick = (item: dbStoreType) => {
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
    <div className={styles.header}>
      <div className={styles.header__container}>
        <Button onClick={() => navigation('/')}>На главную</Button>
        <div className={styles.search_wrapper}>
          <Input
            allowClear
            onChange={(value) => onChange(value.target.value)}
            className={styles.search_input}
            placeholder="Поиск"
          />
          <div className={styles.search_result}>
            {filteredData.map((item) => {
              return (
                <div onClick={() => onItemClick(item)} key={item.id} className={styles.item}>
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
