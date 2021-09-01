import { NextPage } from 'next';
import styled from 'styled-components';

import { Sidebar } from 'components/Sidebar/Sidebar';

import { Dropdown } from '@/components/Dropdown/Dropdown';

const Home: NextPage = () => {
	return (
		<Wrapper>
			<Sidebar />
			<Dropdown />
		</Wrapper>
	);
};

export default Home;

const Wrapper = styled.div``;
