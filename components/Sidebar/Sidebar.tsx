import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { ProfileImg } from '../ProfileImg/ProfileImg';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

import logoSrc from '@/public/assets/logo.svg';

interface Props {
	className?: string;
}

export const Sidebar = (props: Props) => {
	return (
		<Wrapper>
			<Image src={logoSrc} alt="" />
			<StyledThemeSwitcher />
			<Divider />
			<ProfileImg />
		</Wrapper>
	);
};

const Wrapper = styled.aside`
	display: flex;
	align-items: center;
	gap: 24px;

	width: 100%;
	height: 72px;
	padding-right: 32px;

	background-color: ${(p) => p.theme.COLORS.dark[5]};
`;

const StyledThemeSwitcher = styled(ThemeSwitcher)`
	margin-left: auto;
`;

const Divider = styled.div`
	height: 100%;
	width: 1px;

	background-color: ${(p) => p.theme.COLORS.dark[6]};
`;
