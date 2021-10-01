import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

import { ProfileImg } from '../ProfileImg/ProfileImg';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

import logoSrc from '@/assets/logo.svg';
import { MEDIA_QUERIES } from '@/styles/constants';

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	return (
		<Wrapper className={className}>
			<LogoWrapper>
				<Image src={logoSrc} layout="fill" alt="" />
			</LogoWrapper>
			<StyledThemeSwitcher />
			<Divider />
			<ProfileImg />
		</Wrapper>
	);
};

const Wrapper = styled.aside`
	z-index: 10000;
	position: fixed;
	display: flex;
	align-items: center;
	gap: 24px;

	width: 100%;
	height: 72px;
	padding-right: 32px;

	background-color: ${(p) => p.theme.COLORS.aside.bg};

	@media ${MEDIA_QUERIES.tabletAndUp} {
		height: 80px;
	}

	@media ${MEDIA_QUERIES.laptopAndUp} {
		flex-flow: column;
		min-height: 100vh;
		width: 103px;
		padding-right: 0;
		padding-bottom: 24px;
		border-radius: 0px 35px 20px 0px;
	}
`;

const LogoWrapper = styled.div`
	position: relative;
	width: 72px;
	height: 72px;

	@media ${MEDIA_QUERIES.tabletAndUp} {
		width: 80px;
		height: 80px;
	}

	@media ${MEDIA_QUERIES.laptopAndUp} {
		width: 103px;
		height: 103px;
	}
`;

const StyledThemeSwitcher = styled(ThemeSwitcher)`
	margin-left: auto;

	@media ${MEDIA_QUERIES.laptopAndUp} {
		margin-left: revert;
		margin-top: auto;
	}
`;

const Divider = styled.div`
	height: 100%;
	width: 2px;

	background-color: ${(p) => p.theme.COLORS.aside.border};

	@media ${MEDIA_QUERIES.laptopAndUp} {
		height: 2px;
		width: 100%;
	}
`;
