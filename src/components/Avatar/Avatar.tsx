import React from 'react';
import { Image, sizes } from './Avatar.style';
import { Icon } from '../Icon/Icon';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  loading?: boolean;
  username?: string;
  src?: string | null;
  size?: keyof typeof sizes;
}

export const Avatar: React.FC<AvatarProps> = ({
  loading = false,
  username = 'loading',
  src = null,
  size = 'medium',
  ...props
}) => {
  let avatarFigure: React.ReactNode;
  const a11yProps: React.HTMLAttributes<HTMLDivElement> = {};

  if (loading) {
    a11yProps['aria-busy'] = true;
    a11yProps['aria-label'] = 'Loading avatar ...';
  } else if (src) {
    avatarFigure = <img src={src} alt={username} />;
  }

  return (
    <Image size={size} loading={loading} src={src} {...a11yProps} {...props}>
      {avatarFigure}
    </Image>
  );
};

export default Avatar;
