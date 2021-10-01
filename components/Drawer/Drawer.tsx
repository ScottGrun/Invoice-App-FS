import { DialogContent, DialogOverlay } from '@reach/dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';

import '@reach/dialog/styles.css';
import { MEDIA_QUERIES } from '@/styles/constants';

interface DrawerProps {
	isDrawerOpen: boolean;
	setDrawerOpen: Dispatch<SetStateAction<boolean>>;
	ariaLabel: string;
}

export const Drawer: FC<DrawerProps> = ({ children, isDrawerOpen, setDrawerOpen, ariaLabel }) => {
	return (
		<AnimatePresence>
			{isDrawerOpen && (
				<Overlay
					variants={overlayAnimation}
					initial="close"
					animate="open"
					exit="close"
					isOpen={isDrawerOpen}
					onDismiss={() => setDrawerOpen(false)}
				>
					<StyledDialogContent
						variants={drawerAnimation}
						initial="close"
						animate="open"
						exit="close"
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
	display: block;
`;

const StyledDialogContent = styled(motion(DialogContent))`
	margin: 0;
	padding: 0;
	z-index: 10 !important;
	padding-left: 24px;
	padding-top: 80px;
	width: 100%;
	height: 100%;
	background-color: ${(p) => p.theme.COLORS.drawer.bg};
	@media ${MEDIA_QUERIES.tabletAndUp} {
		width: 616px;
		padding-left: 56px;
		border-radius: 0px 20px 20px 0px;
	}

	@media ${MEDIA_QUERIES.laptopAndUp} {
		width: 719px;
		padding-left: 159px;
		padding-top: 0px;
	}
`;

const drawerAnimation = {
	open: {
		x: '0%',
		transition: { type: 'spring', duration: 0.75 },
	},
	close: { x: '-100%' },
	exit: {
		x: '-100%',
	},
};

const overlayAnimation = {
	open: {
		transition: { type: 'spring', duration: 0.75 },
		opacity: 1,
	},
	close: {
		opacity: 0,
	},
	exit: {
		opacity: 0,
	},
};
