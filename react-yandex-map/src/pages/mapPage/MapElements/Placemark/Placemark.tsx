import React from 'react';
import { useEffect, useState } from 'react';
import { Placemark, Polyline } from 'react-yandex-maps';
import { useCustomDispatch, useCustomSelector } from '../../../../customHooks/customHooks';
import { setElementClicked, toggleSidebar } from '../../../../store/mapSlice';
import infoIcon from '../../../../assets/svg/info.svg';
import home from '../../../../assets/svg/home.svg';
import styles from '../../../../assets/styles/styles';
import { dbStoreType } from '../../../../store/db';

type Props = {
  item: dbStoreType;
};

const PlacemarkElement: React.FC<Props> = (props) => {
  const [formIconPreset, setFormIconPreset] = useState('islands#Icon');
  const [colorIconPreset, setColorIconPreset] = useState(styles.blue);
  const selector = useCustomSelector((state) => state.mapSlice);
  const dispatch = useCustomDispatch();

  useEffect(() => {
    if (selector.idClickedElement !== props.item.id) {
      setColorIconPreset(styles.blue);
    } else {
      setColorIconPreset(styles.red);
    }
  });

  const onClick = () => {
    setColorIconPreset(styles.red);
    dispatch(setElementClicked(props.item.id));
    dispatch(toggleSidebar(true));
  };

  return (
    <Placemark
      key={props.item.id}
      geometry={props.item.geometry as number[]}
      options={{
        preset: formIconPreset,
        iconColor: colorIconPreset,
      }}
      properties={{
        iconContent: `<img height="16px" style="margin-left: 1px;" src="${infoIcon}" alt="l"/>`,
        hintContent: `<div style="padding:5px; font-size: 20px;">${props.item.hint}</div>`,
      }}
      onClick={() => onClick()}
    />
  );
};

export default React.memo(PlacemarkElement);
