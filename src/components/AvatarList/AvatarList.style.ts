import styled from '@emotion/styled';
import { Avatar } from '../Avatar/Avatar';
import { themes } from '../../styles/Theme';

export const UserAvatar = styled(Avatar)`
  box-shadow: ${themes.dark.color.gray300} 0 0 0 1px;
  display: block;
`;

export const UserEllipses = styled.li`
  display: inline-flex;
  font-size: ${themes.dark.typography.body02}px;
  color: ${themes.dark.color.gray400};
  white-space: nowrap;
  position: relative;
  left: 15px;
`;

export const User = styled.li`
  display: inline-flex;
`;

export const Users = styled.ul`
  display: inline-flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  vertical-align: top;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;

    &:not(:first-child) {
      margin-left: -6px;
    }
    &:nth-child(1) {
      z-index: 3;
    }
    &:nth-child(2) {
      z-index: 2;
    }
    &:nth-child(3) {
      z-index: 1;
    }
  }
`;
