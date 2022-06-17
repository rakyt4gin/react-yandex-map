import React from 'react';
import { useEffect, useState } from 'react';
import { Placemark, Polyline } from 'react-yandex-maps';
import { useCustomDispatch, useCustomSelector } from '../../../../customHooks/customHooks';
import { setElementClicked } from '../../../../store/mapSlice';
import infoIcon from '../../../../assets/svg/info.svg';
import home from '../../../../assets/svg/home.svg';
import styles from '../../../../assets/styles/styles';

const PlacemarkElement: React.FC<any> = (props: any) => {
  const [formIconPreset, setFormIconPreset] = useState('islands#Icon');
  const [colorIconPreset, setColorIconPreset] = useState(styles.blue);
  const selector = useCustomSelector((state) => state.mapSlice);
  const dispatch = useCustomDispatch();

  useEffect(() => {
    if (selector.idClickedElement !== props.item.id) {
      setColorIconPreset(styles.blue);
    }
  });

  const onClick = () => {
    setColorIconPreset(styles.red);
    dispatch(setElementClicked(props.item.id));
  };

  const onMouseEnter = () => {};

  return (
    <Placemark
      key={props.item.id}
      geometry={props.item.geometry}
      options={{
        preset: formIconPreset,
        iconColor: colorIconPreset,
      }}
      properties={{
        iconContent: `<img height="16px" style="margin-left: 1px;" src="${infoIcon}" alt="l"/>`,
      }}
      onMouseEnter={() => onMouseEnter()}
      onClick={() => onClick()}
      // options={{
      //   iconLayout: 'default#image',
      //   iconImageHref: 'https://cdn-icons-png.flaticon.com/512/4163/4163199.png',
      //   iconImageSize: [iconImageSize, iconImageSize],
      //   iconImageOffset: [iconImageOffset, iconImageOffset],
      // }}
    />
  );
};

export default React.memo(PlacemarkElement);
