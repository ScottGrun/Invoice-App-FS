import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

import iconMoonSrc from '@/public/icons/icon-moon.svg';
import iconSunSrc from '@/public/icons/icon-sun.svg';

// Would love to have some feedback on how to make this component
// more accessible

interface Props {
	className?: string;
}

export const ThemeSwitcher = ({ className }: Props) => {
	const [theme, setTheme] = useState('light');
	return (
		<Wrapper className={className}>
			{theme === 'light' ? (
				<Image src={iconMoonSrc} alt="A moon icon" />
			) : (
				<Image src={iconSunSrc} alt="A sun icon" />
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div``;
