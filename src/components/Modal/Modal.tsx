import Icon from '../Icon/Icon';
import type { ComponentPropsWithoutRef } from 'react';
import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  backdropStyling,
  closeButtonStyling,
  dialogStyling,
} from './Modal.style';
import { useTheme } from '../../PovProvider';

export interface ModalProps extends ComponentPropsWithoutRef<'dialog'> {
  /**
   * Modal이 열려있는지에 대한 상태
   *
   * @default false
   */
  isOpen: boolean;
  /**
   * Modal에 닫기버튼에 대한 여부
   *
   * @default true
   */
  hasCloseButton?: boolean;
  /**
   * Modal Backdrop을 클릭해서 Modal을 닫을 수 있는 지에 대한 여부
   * @default true
   */
  isBackdropClosable?: boolean;
  /** Modal을 닫는 함수 */
  closeModal: () => void;
}

const Modal = ({
  closeModal,
  isOpen = false,
  hasCloseButton = true,
  isBackdropClosable = true,
  children,
  ...attributes
}: ModalProps) => {
  const { theme } = useTheme();
  const handleEscKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isBackdropClosable) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscKeyPress);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [isOpen, handleEscKeyPress]);

  return createPortal(
    <>
      {isOpen && (
        <>
          <div css={backdropStyling} onClick={isBackdropClosable ? closeModal : () => {}} />
          <dialog aria-modal={isOpen} css={dialogStyling} {...attributes}>
            {hasCloseButton && (
              <button
                type="button"
                aria-label="모달 닫기 버튼"
                onClick={closeModal}
                css={closeButtonStyling}
              >
                <Icon icon="cross" color={theme.primary} />
              </button>
            )}
            {children}
          </dialog>
        </>
      )}
    </>,
    document.body
  );
};

export default Modal;
