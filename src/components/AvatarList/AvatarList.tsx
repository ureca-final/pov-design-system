import React from 'react';
import { UserAvatar, UserEllipses, User, Users } from './AvatarList.style';

export interface UserType {
  id: string;
  name: string;
  avatarUrl?: string | null;
}

export interface AvatarListProps extends React.HTMLAttributes<HTMLUListElement> {
  users: UserType[];
  userCount?: number;
  size?: 'tiny' | 'small' | 'medium' | 'large';
}

export const AvatarList: React.FC<AvatarListProps> = ({
  users = [
    { id: 'loading', avatarUrl: null, name: 'loading' },
    { id: 'loading2', avatarUrl: null, name: 'loading' },
    { id: 'loading3', avatarUrl: null, name: 'loading' },
  ],
  userCount = null,
  size = 'small',
  ...props
}) => {
  const count = userCount || users.length;

  return (
    <Users aria-label="users" {...props}>
      {users.slice(0, 3).map(({ id, name, avatarUrl }) => (
        <User key={id}>
          <UserAvatar size={size} username={name} src={avatarUrl || ''} />
        </User>
      ))}
      {count > 3 && (
        <UserEllipses aria-label={`${count - 3} more user(s)`}>
          + {count - 3}
        </UserEllipses>
      )}
    </Users>
  );
};

export default AvatarList;