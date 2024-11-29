import { PovProvider } from './PovProvider';
import { useTheme } from './PovProvider';

import * as icons from './assets/icons';
import * as characters from './assets/characters';
import * as animation from './styles/animation/index';

import { useSelect } from './hooks/useSelect';
import { useOverlay } from './hooks/useOverlay';

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
import SwitchToggle from './components/SwitchToggle/SwitchToggle';
import ShowMoreBtn from './components/ShowMoreBtn/ShowMoreBtn';
import Input from './components/Input/Input';
import Textarea from './components/Textarea/Textarea';
import Label from './components/Label/Label';
import SupportingText from './components/SupportingText/SupportingText';
import Modal from './components/Modal/Modal';
import Logo from './components/Logo/Logo';

import { themes } from './styles/Theme';

export { animation, icons, characters };

export { 
    PovProvider, 
    Button, 
    Avatar, 
    AvatarList, 
    Badge, 
    Heading, 
    Body, 
    Paragraph, 
    Icon, 
    Checkbox, 
    Tab, 
    Tabs, 
    SwitchToggle, 
    ShowMoreBtn,
    Input, 
    Textarea, 
    Label, 
    SupportingText, 
    Modal,
    Logo,
    useSelect, 
    useOverlay, 
    themes,
    useTheme 
};
