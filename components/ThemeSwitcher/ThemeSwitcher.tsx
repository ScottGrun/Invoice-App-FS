import { useDarkMode } from 'next-dark-mode';
import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

import iconMoonSrc from '@/icons/icon-moon.svg';
import iconSunSrc from '@/icons/icon-sun.svg';

// Would love to have some feedback on how to make this component
// more accessible

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const { switchToDarkMode, switchToLightMode, darkModeActive } = useDarkMode();

	return (
		<div className={className}>
			{darkModeActive ? (
				<IconWrapper onClick={() => switchToLightMode()}>
					<Image src={iconSunSrc} alt="A moon icon" />
				</IconWrapper>
			) : (
				<IconWrapper onClick={() => switchToDarkMode()}>
					<Image src={iconMoonSrc} alt="A moon icon" />
				</IconWrapper>
			)}
		</div>
	);
};

const IconWrapper = styled.button`
	cursor: pointer;
	background-color: transparent;
`;
