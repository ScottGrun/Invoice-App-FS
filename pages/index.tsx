import { NextPage } from 'next';
import styled from 'styled-components';

import { Header } from '@/components/Home';
import { InvoiceCard } from '@/components/InvoiceCard/InvoiceCard';
import { InvoiceListContainer } from '@/components/InvoiceListContainer/InvoiceListContainer';
import { Sidebar } from '@/components/Sidebar/Sidebar';

const Home: NextPage = () => {
	return (
		<Container>
			<Sidebar />
			<Wrapper>
				<Header invoiceCount={0} />
				<InvoiceListContainer>
					<InvoiceCard
						id="RT3080"
						dueDate="Due 19 Aug 2021"
						clientName="Jensen Huang"
						total="£1,800.90"
						status="Paid"
					/>
					<InvoiceCard
						id="XM9141"
						dueDate="Due  20 Sep 2021"
						clientName="Alex Grim"
						total="£ 556.00"
						status="Pending"
					/>
				</InvoiceListContainer>
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
