import React from 'react';
import styles from './AvatarImage.module.scss';

type AvatarImageType = {
  id: number;
  src: string;
  label: string;
  size?: number;
  onClick: (id: number) => void;
};

const AvatarImage = ({
  id,
  src,
  label,
  size = 60,
  onClick,
}: AvatarImageType) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div
      className={styles.AvatarImage}
      style={{ width: `${size}px`, height: `${size}px` }}
      onClick={handleClick}
    >
      <img className={styles.AvatarImageImg} src={`/img/${src}`} alt={label} />
    </div>
  );
};

export default AvatarImage;
