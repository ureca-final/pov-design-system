import { getToggleStyling, toggleCircleStyle } from './Toggle.style';

export type ToggleProps = {
  isSelected: boolean;
  onToggle: (value: boolean) => void;
};

const Toggle: React.FC<ToggleProps> = ({ isSelected, onToggle }) => {
  const handleClick = () => onToggle(!isSelected);

  return (
    <div css={getToggleStyling(isSelected)} onClick={handleClick}>
      <div css={toggleCircleStyle(isSelected)} />
    </div>
  );
};

export default Toggle;
