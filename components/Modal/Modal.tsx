import { DialogOverlay, DialogContent, DialogOverlayProps } from '@reach/dialog';
import React, { FC } from 'react';
import styled from 'styled-components';
import '@reach/dialog/styles.css';

interface ModalProps extends DialogOverlayProps {
	className?: string;
	ariaLabel: string;
}

export const Modal: FC<ModalProps> = ({
	isOpen,
	initialFocusRef,
	children,
	className,
	ariaLabel,
}) => {
	return (
		<Overlay isOpen={isOpen} initialFocusRef={initialFocusRef}>
			<StyledDialogContent className={className} aria-label={ariaLabel}>
				{children}
			</StyledDialogContent>
		</Overlay>
	);
};

const Overlay = styled(DialogOverlay)`
	display: flex;
`;

const StyledDialogContent = styled(DialogContent)`
	padding: 32px;
	border-radius: 8px;
`;
