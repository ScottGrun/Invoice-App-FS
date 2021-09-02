import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import iconChevronSrc from '@/public/icons/icon-arrow-left.svg';
import { h4TextStyle } from '@/styles/typography';

interface Props {
	children?: string | React.ReactNode;
	href: string;
	icon?: 'back' | 'forward';
}

export const PageLink = ({ children, icon, href }: Props) => {
	return (
		<Link href={href} passHref>
			<InnerWrapper icon={icon}>
				{icon && (
					<IconWrapper icon={icon}>
						<Image src={iconChevronSrc} alt="" />
					</IconWrapper>
				)}
				{children}
			</InnerWrapper>
		</Link>
	);
};

const InnerWrapper = styled.a<{ icon?: string }>`
	${h4TextStyle};
	display: flex;
	align-items: baseline;
	flex-direction: ${({ icon }) =>
		icon === 'back' ? 'row' : icon === 'forward' ? 'row-reverse' : null};
	width: fit-content;

	&:hover {
		color: ${(p) => p.theme.COLORS.primary[3]};
	}
`;

const IconWrapper = styled.div<{ icon?: string }>`
	margin-right: ${({ icon }) => (icon === 'back' ? '24px' : null)};
	margin-left: ${({ icon }) => (icon === 'forward' ? '24px' : null)};
	transform: ${({ icon }) => (icon === 'forward' ? 'rotateY(180deg)' : null)}; ;
`;
