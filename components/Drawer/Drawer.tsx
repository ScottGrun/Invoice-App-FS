import DialogContent, { DialogOverlay } from '@reach/dialog';
import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';
import '@reach/dialog/styles.css';

interface DrawerProps {
	isDrawerOpen: boolean;
	setDrawerClosed: Dispatch<SetStateAction<boolean>>;
	ariaLabel: string;
}

export const Drawer: FC<DrawerProps> = ({ children, isDrawerOpen, setDrawerClosed, ariaLabel }) => {
	return (
		<DialogOverlay isOpen={isDrawerOpen} onDismiss={() => setDrawerClosed(false)}>
			<StyledDialogContent
				isOpen={isDrawerOpen}
				onDismiss={() => setDrawerClosed(false)}
				aria-label={ariaLabel}
			>
				{children}
			</StyledDialogContent>
		</DialogOverlay>
	);
};

const StyledDialogContent = styled(DialogContent)`
	margin: 0;
	padding: 0;
	padding-left: 24px;
	padding-top: 80px;
	width: 100%;
	height: 100%;

	background-color: ${(p) => p.theme.COLORS.white};
	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		width: 616px;
		padding-left: 56px;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		width: 719px;
		padding-left: 159px;
		padding-top: 0px;
	}
`;
