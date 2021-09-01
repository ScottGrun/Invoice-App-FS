import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import iconPlusSrc from '@/public/icons/icon-plus.svg';
import { theme } from '@/styles/theme';
import { h4TextStyle } from '@/styles/typography';

export type ColorVariantsType = {
	[key: string]: {
		[key: string]: string;
	};
};

const colorVariants: ColorVariantsType = {
	primary: {
		background: theme.COLORS.primary[1],
		backgroundHover: theme.COLORS.primary[2],
		text: theme.COLORS.white,
	},
	secondary: {
		background: theme.COLORS.grey[4],
		backgroundHover: theme.COLORS.grey[2],
		text: theme.COLORS.primary[3],
	},
	tertiary: {
		background: theme.COLORS.dark[5],
		backgroundHover: theme.COLORS.dark[1],
		text: theme.COLORS.grey[1],
	},
	warning: {
		background: theme.COLORS.warning[1],
		backgroundHover: theme.COLORS.dark[2],
		text: theme.COLORS.white,
	},
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary' | 'tertiary' | 'warning';
	icon?: 'plus';
	className?: string;
};

export const Button = ({
	children,
	icon,
	onClick,
	variant = 'primary',
	className,
}: ButtonProps) => {
	return icon ? (
		<IconButton onClick={onClick} variant={variant} className={className}>
			<IconWrapper>
				<Image src={iconPlusSrc} alt="" />
			</IconWrapper>
			{children}
		</IconButton>
	) : (
		<TextButton onClick={onClick} variant={variant} className={className}>
			{children}
		</TextButton>
	);
};

const ButtonBase = styled.button<{ variant: string }>`
	${h4TextStyle};
	display: flex;
	align-items: center;

	height: 44px;

	border-radius: 24px;
	background-color: ${({ variant }) => colorVariants[variant].background};
	color: ${({ variant }) => colorVariants[variant].text};

	&:hover,
	:focus {
		cursor: pointer;
		background-color: ${({ variant }) => colorVariants[variant].backgroundHover};
	}

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		height: 48px;
	}
`;

const TextButton = styled(ButtonBase)`
	padding: 16px 24px;
	justify-content: center;
`;

const IconButton = styled(ButtonBase)`
	padding: 6px 14px 6px 6px;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		padding: 8px 15px 8px 8px;
	}
`;

const IconWrapper = styled.div`
	display: grid;
	place-content: center;

	margin-right: 8px;
	width: 32px;
	height: 32px;

	background-color: ${(p) => p.theme.COLORS.white};
	border-radius: 50%;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		margin-right: 16px;
	}
`;
