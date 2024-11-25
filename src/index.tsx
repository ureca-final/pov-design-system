import { PovProvider } from './PovProvider';
import { useTheme } from './PovProvider';

import * as icons from './assets/icons';
import * as animation from './styles/animation/index';

import { useSelect } from './hooks/useSelect';
import { useToggle } from './hooks/useToggle';

import Button from './components/Button/Button';
import Avatar from './components/Avatar/Avatar';
import AvatarList from './components/AvatarList/AvatarList';
import Badge from './components/Badge/Badge';
import Heading from './components/Heading/Heading';
import Body from './components/Body/Body';
import Paragraph from './components/Paragraph/Paragraph';
import Icon from './components/Icon/Icon';
import Checkbox from './components/Checkbox/Checkbox';
import Tab from './components/Tab/Tab';
import Tabs from './components/Tabs/Tabs';
import Toggle from './components/Toggle/Toggle';
import ShowMoreBtn from './components/ShowMoreBtn/ShowMoreBtn';

import { themes } from './styles/Theme';

export { animation, icons };

export { PovProvider, Button, Avatar, AvatarList, Badge, Heading, Body, Paragraph, Icon, Checkbox, Tab, Tabs, Toggle, ShowMoreBtn, useSelect, useToggle, themes, useTheme };
