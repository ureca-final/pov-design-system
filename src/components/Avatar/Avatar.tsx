import React from 'react';
import { Image, sizes } from './Avatar.style';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  username?: string;
  src?: string | null;
  size?: keyof typeof sizes;
}

export const Avatar: React.FC<AvatarProps> = ({
  username = 'loading',
  src = null,
  size = 'medium',
  ...props
}) => {
  let avatarFigure: React.ReactNode;
  const a11yProps: React.HTMLAttributes<HTMLDivElement> = {};

  if (src) {
    avatarFigure = <img src={src} alt={username} />;
  }

  return (
    <Image size={size} src={src} {...a11yProps} {...props}>
      {avatarFigure}
    </Image>
  );
};

export default Avatar;
