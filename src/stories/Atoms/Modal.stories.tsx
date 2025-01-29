import SampleImage from '@assets/modal-sample.svg?react';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import { useOverlay } from '@hooks/useOverlay';

import Button from '@components/Button/Button';
import Heading from '@components/Heading/Heading';
import Modal from '@components/Modal/Modal';
import Body from '@components/Body/Body';

import { containerStyle } from './styles';

const meta = {
  title: 'Design System/Modal',
  component: Modal,
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    isOpen: false,
    hasCloseButton: true,
    closeModal: () => {},
    isBackdropClosable: true, 
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageModal: Story = {
  render: ({ ...args }) => {
    const { isOpen, open, close } = useOverlay();

    return (
      <>
        <Button onClick={open}>Show Modal</Button>
        <Modal {...args} isOpen={isOpen} closeModal={close}>
          <div css={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Heading size="medium">Title</Heading>
            <SampleImage />
            <Button variant="primary" onClick={close} css={{ width: '100%' }}>
              확인
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};

export const NoCloseButton: Story = {
  render: ({ ...args }) => {
    const { isOpen, open, close } = useOverlay();

    return (
      <>
        <Button onClick={open}>Show Modal</Button>
        <Modal {...args} isOpen={isOpen} closeModal={close} hasCloseButton={false}>
          <div css={containerStyle}>
            <Heading size="medium">Title</Heading>
            <Body>Sample Text</Body>
            <Button variant="primary" onClick={close} css={{ width: '100%' }}>
              확인
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};

export const TextModal: Story = {
  render: ({ ...args }) => {
    const { isOpen, open, close } = useOverlay();

    return (
      <>
        <Button onClick={open}>Show Modal</Button>
        <Modal {...args} isOpen={isOpen} closeModal={close}>
          <div css={[containerStyle, { width: '350px' }]}>
            <Heading size="medium">Title</Heading>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
            </Body>
            <div css={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Button variant="secondary" onClick={close} css={{ width: '45%' }}>
                Close
              </Button>
              <Button variant="primary" onClick={close} css={{ width: '45%' }}>
                Action
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  },
};

export const ModalOpenStart: Story = {
  render: ({ ...args }) => {
    const { isOpen, open, close } = useOverlay();

    useEffect(() => {
      open();
    }, [open]);

    return (
      <>
        <Button onClick={open}>Show Modal</Button>
        <Modal {...args} isOpen={isOpen} closeModal={close}>
          <div css={containerStyle}>
            <Heading size="medium">Title</Heading>
            <Button variant="primary" onClick={close} css={{ width: '100%' }}>
              확인
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};
