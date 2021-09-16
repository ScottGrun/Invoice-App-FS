import { FC } from 'react';
import styled from 'styled-components';

import { Sidebar } from '@/components/Sidebar/Sidebar';

interface PageLayoutProps {
	children: React.ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
	return (
		<Container>
			<Sidebar />
			<Wrapper>{children}</Wrapper>
		</Container>
	);
};

export default PageLayout;

const Container = styled.div`
	display: flex;
	flex-flow: column;
	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		flex-flow: row;
	}
`;

const Wrapper = styled.main`
	padding: 0 24px;
	margin-top: 32px;
	height: 100%;
	width: 100%;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		margin: 0 auto;
		margin-top: 56px;
		padding: 0;

		max-width: 672px;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		max-width: 730px;
		margin-top: 72px;
	}
`;
