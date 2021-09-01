import { NextPage } from 'next';
import styled from 'styled-components';

import { Header } from '@/components/Home';
import { InvoiceListContainer } from '@/components/InvoiceListContainer/InvoiceListContainer';
import { Sidebar } from '@/components/Sidebar/Sidebar';

const Home: NextPage = () => {
	return (
		<Container>
			<Sidebar />
			<Wrapper>
				<Header invoiceCount={0} />
				<InvoiceListContainer></InvoiceListContainer>
			</Wrapper>
		</Container>
	);
};

export default Home;

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
		margin-top: 56px;
		padding: 0 48px;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		max-width: 730px;
		padding: 0;
		margin: 0 auto;
		margin-top: 72px;
	}
`;
