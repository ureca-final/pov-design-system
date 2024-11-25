import { containerStyle, informationStyle } from '@stories/styles';
import type { Meta, StoryObj } from '@storybook/react';

import Toggle from '@components/Toggle/Toggle';
import { useToggle } from '@hooks/useToggle'; // useSelect 훅 사용

const meta = {
  title: 'Design System/Toggle',
  component: Toggle,
  decorators: [
    (Story) => (
      <ul css={containerStyle}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  args: {
    isSelected: false,
    onToggle: () => {},
  },
  render: (args) => {
    // useToggle 훅 사용
    const { selected, handleSelectClick } = useToggle(args.isSelected);

    const handleToggle = (value: boolean) => {
      handleSelectClick(value); 
      args.onToggle(value);
    };

    return (
      <li css={informationStyle}>
        <h6>Toggle</h6>
        <Toggle {...args} isSelected={selected} onToggle={handleToggle} />
      </li>
    );
  },
};
