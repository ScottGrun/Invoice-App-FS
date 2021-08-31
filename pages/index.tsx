import { NextPage } from 'next';
import styled from 'styled-components';

import { Sidebar } from 'components/Sidebar/Sidebar';

const Home: NextPage = () => {
	return (
		<Wrapper>
			<Sidebar />
		</Wrapper>
	);
};

export default Home;

const Wrapper = styled.div``;
