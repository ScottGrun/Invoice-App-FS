import Image from 'next/image';
import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

import iconPlusSrc from 'public/icons/icon-plus.svg';

import { COLORS, MEDIA_QUERIES } from '@/styles/constants';
import { theme } from '@/styles/theme';
import { h4TextStyle } from '@/styles/typography';

export type ColorVariantsType = {
	[key: string]: {
		[key: string]: string;
	};
};

const colorVariants: ColorVariantsType = {
	primary: {
		background: theme.COLORS.button.primary.bg,
		backgroundHover: theme.COLORS.button.primary.hover,
		text: theme.COLORS.button.primary.color,
	},
	secondary: {
		background: theme.COLORS.button.secondary.bg,
		backgroundHover: theme.COLORS.button.secondary.hover,
		text: theme.COLORS.button.secondary.color,
	},
	tertiary: {
		background: theme.COLORS.button.tertiary.bg,
		backgroundHover: theme.COLORS.button.tertiary.hover,
		text: theme.COLORS.button.tertiary.color,
	},
	warning: {
		background: theme.COLORS.button.warning.bg,
		backgroundHover: theme.COLORS.button.warning.hover,
		text: theme.COLORS.button.warning.color,
	},
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
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
	type,
}: ButtonProps) => {
	return icon ? (
		<IconButton type={type} onClick={onClick} variant={variant} className={className}>
			<IconWrapper>
				<Image src={iconPlusSrc} alt="" />
			</IconWrapper>
			{children}
		</IconButton>
	) : (
		<TextButton type={type} onClick={onClick} variant={variant} className={className}>
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

	&:hover {
		cursor: pointer;
		background-color: ${({ variant }) => colorVariants[variant].backgroundHover};
	}

	@media ${MEDIA_QUERIES.tabletAndUp} {
		height: 48px;
	}
`;

const TextButton = styled(ButtonBase)`
	padding: 16px 24px;
	justify-content: center;
`;

const IconButton = styled(ButtonBase)`
	padding: 6px 14px 6px 6px;
	@media ${MEDIA_QUERIES.tabletAndUp} {
		padding: 8px 15px 8px 8px;
	}
`;

const IconWrapper = styled.div`
	display: grid;
	place-content: center;

	margin-right: 8px;
	width: 32px;
	height: 32px;

	background-color: ${COLORS.white};
	border-radius: 50%;

	@media ${MEDIA_QUERIES.tabletAndUp} {
		margin-right: 16px;
	}
`;
