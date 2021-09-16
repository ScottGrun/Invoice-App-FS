import Image from 'next/image';
import { FC, useState } from 'react';

import iconMoonSrc from '@/icons/icon-moon.svg';
import iconSunSrc from '@/icons/icon-sun.svg';

// Would love to have some feedback on how to make this component
// more accessible

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const [theme, setTheme] = useState('light');
	return (
		<div className={className}>
			{theme === 'light' ? (
				<Image src={iconMoonSrc} alt="A moon icon" />
			) : (
				<Image src={iconSunSrc} alt="A sun icon" />
			)}
		</div>
	);
};
