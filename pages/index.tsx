import { NextPage } from 'next';
import styled from 'styled-components';

import { Header } from '@/components/Home';
import { Sidebar } from '@/components/Sidebar/Sidebar';

const Home: NextPage = () => {
	return (
		<Wrapper>
			<Sidebar />
			<Header invoiceCount={0} />
		</Wrapper>
	);
};

export default Home;

const Wrapper = styled.div``;
