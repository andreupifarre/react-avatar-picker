import React from 'react';
import classNames from 'classnames';
import { AvatarImageItemType } from '../AvatarImage/AvatarImageItemType';
import AvatarImage from '../AvatarImage/AvatarImage';

import styles from './Popover.module.scss';

type AvatarImageProps = {
  items: AvatarImageItemType[];
  selected: number;
  loading?: number;
  onSelected: (id: number) => void;
};

const Popover = ({
  items,
  onSelected,
  selected,
  loading,
}: AvatarImageProps) => {
  const handleClick = (id: number) => {
    onSelected(id);
  };

  return (
    <div className={styles.Popover}>
      <h2 className={styles.Title}>Choose your avatar</h2>
      <ul className={styles.AvatarImagesList}>
        {items.map((item, i: number) => (
          <li
            className={classNames(styles.AvatarImageItem, {
              [styles.AvatarImageItemSelected]: selected === item.id,
            })}
            key={i}
          >
            <AvatarImage
              id={item.id}
              src={item.src}
              label={item.label}
              onClick={handleClick}
              size={54}
            />
            {loading === item.id && (
              <div className={styles.AvatarImageSpinner} />
            )}
            <div className={styles.AvatarImageOverlay} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popover;
