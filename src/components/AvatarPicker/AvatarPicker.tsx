import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import Popover from '../Popover/Popover';
import AvatarImage from '../AvatarImage/AvatarImage';
import { AvatarImageItemType } from '../AvatarImage/AvatarImageItemType';
import useOutsideClick from '../../hooks/useOutsideClick';
import styles from './AvatarPicker.module.scss';

const defaultItem: number = 0;
const items: AvatarImageItemType[] = [
  { src: 'avatar1.png', label: 'Avatar 1', id: 1 },
  { src: 'avatar2.png', label: 'Avatar 2', id: 2 },
  { src: 'avatar3.png', label: 'Avatar 3', id: 3 },
  { src: 'avatar4.png', label: 'Avatar 4', id: 4 },
  { src: 'avatar5.png', label: 'Avatar 5', id: 5 },
  { src: 'avatar6.png', label: 'Avatar 6', id: 6 },
];

const AvatarPicker = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [selected, setSelected] = useState(items[defaultItem]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(-1);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    setIsHovered(!isHovered);
  };

  const handleSelected = (id: number) => {
    setIsLoading(id);
    setIsHovered(false);

    setTimeout(() => {
      setSelected(findItem(id));
      setIsExpanded(false);
      setIsLoading(-1);
    }, 1000);
  };

  const findItem = (id: number): AvatarImageItemType =>
    items.find((item: AvatarImageItemType) => item.id === id)!;

  useOutsideClick(ref, () => {
    setIsExpanded(false);
    setIsHovered(false);
  });

  return (
    <div ref={ref} className={styles.AvatarPicker}>
      <div
        className={classNames(styles.AvatarImage, {
          [styles.AvatarImageHovered]: isHovered,
        })}
      >
        <AvatarImage
          id={selected.id}
          src={selected.src}
          label={selected.label}
          onClick={handleClick}
        />
      </div>
      <div
        className={classNames(styles.Popover, {
          [styles.PopoverExpanded]: isExpanded,
        })}
      >
        <Popover
          items={items}
          onSelected={handleSelected}
          selected={selected.id}
          loading={isLoading}
        />
      </div>
    </div>
  );
};

export default AvatarPicker;
