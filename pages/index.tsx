import { NextPage } from 'next';
import styled from 'styled-components';

import { Header } from '@/components/Home';
import { Sidebar } from '@/components/Sidebar/Sidebar';

const Home: NextPage = () => {
	return (
		<>
			<Sidebar />
			<Wrapper>
				<Header invoiceCount={0} />
			</Wrapper>
		</>
	);
};

export default Home;

const Wrapper = styled.div`
	padding: 0 24px;
	margin-top: 32px;
	height: 100%;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		margin-top: 56px;
	}
`;
