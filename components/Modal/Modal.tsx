import { DialogOverlay, DialogContent, DialogOverlayProps } from '@reach/dialog';
import { AnimatePresence, motion } from 'framer-motion';
import React, { FC } from 'react';
import styled from 'styled-components';

import { MEDIA_QUERIES } from '@/styles/constants';

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
		<AnimatePresence>
			{isOpen && (
				<Overlay
					variants={overlayAnimation}
					initial="close"
					animate={isOpen ? 'open' : 'close'}
					exit="exit"
					isOpen={isOpen}
					initialFocusRef={initialFocusRef}
				>
					<StyledDialogContent
						variants={modalAnimation}
						initial="close"
						animate={isOpen ? 'open' : 'close'}
						exit="exit"
						className={className}
						aria-label={ariaLabel}
					>
						{children}
					</StyledDialogContent>
				</Overlay>
			)}
		</AnimatePresence>
	);
};

const Overlay = styled(motion(DialogOverlay))`
	display: flex;
	justify-content: center;
	align-items: center;

	/* Account for sidebar */
	@media ${MEDIA_QUERIES.laptopAndUp} {
		padding-left: 103px;
	}
`;

const StyledDialogContent = styled(motion(DialogContent))`
	padding: 32px;
	border-radius: 8px;
`;

// Animations
const overlayAnimation = {
	open: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
	close: {
		opacity: 0,
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
};

const modalAnimation = {
	open: {
		y: 0,
		transition: { type: 'spring', duration: 0.5 },
	},
	close: {
		y: -150,
	},
	exit: {
		y: 100,
	},
};
