import Image from 'next/image';
import Link from 'next/link';
import React, { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

import iconChevronSrc from '@/icons/icon-arrow-left.svg';
import { COLORS } from '@/styles/constants';
import { h4TextStyle } from '@/styles/typography';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: string | React.ReactNode;
	href?: string;
	icon?: 'back' | 'forward';
	className?: string;
}

export const PageLink: FC<Props> = ({ children, icon, href, className, onClick }) => {
	return href ? (
		<Link href={href} passHref>
			<InnerWrapper icon={icon} className={className}>
				{icon && (
					<IconWrapper icon={icon}>
						<Image src={iconChevronSrc} alt="" />
					</IconWrapper>
				)}
				{children}
			</InnerWrapper>
		</Link>
	) : (
		<InnerWrapper as="button" icon={icon} className={className} onClick={onClick}>
			{icon && (
				<IconWrapper icon={icon}>
					<Image src={iconChevronSrc} alt="" />
				</IconWrapper>
			)}
			{children}
		</InnerWrapper>
	);
};

const InnerWrapper = styled.a<{ icon?: string }>`
	${h4TextStyle};
	display: flex;
	align-items: baseline;
	flex-direction: ${({ icon }) =>
		icon === 'back' ? 'row' : icon === 'forward' ? 'row-reverse' : null};
	width: fit-content;
	transition: color 200ms ease;
	background-color: transparent;

	&:hover {
		color: ${COLORS.primary[3]};
	}
`;

const IconWrapper = styled.div<{ icon?: string }>`
	margin-right: ${({ icon }) => (icon === 'back' ? '24px' : null)};
	margin-left: ${({ icon }) => (icon === 'forward' ? '24px' : null)};
	transform: ${({ icon }) => (icon === 'forward' ? 'rotateY(180deg)' : null)}; ;
`;
