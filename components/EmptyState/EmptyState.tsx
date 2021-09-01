import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import emptyStateIllustrationSrc from '@/public/assets/illustration-empty.svg';
import { h2TextStyle } from '@/styles/typography';

interface Props {
	heading: string;
	errorMessage: string;
	className?: string;
}

export const EmptyState = ({ heading, errorMessage, className }: Props) => {
	return (
		<Wrapper className={className}>
			<EmptyStateImgWrapper>
				<Image
					src={emptyStateIllustrationSrc}
					layout="responsive"
					alt="A drawing of a person jumping out a letter with a megaphone"
				/>
			</EmptyStateImgWrapper>
			<ErrorHeading>{heading}</ErrorHeading>
			<ErrorMessage>{errorMessage}</ErrorMessage>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
`;

const EmptyStateImgWrapper = styled.div`
	position: relative;
	width: 192px;
	height: 159px;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		width: 240px;
		height: 199px;
	}
`;

const ErrorHeading = styled.h2`
	${h2TextStyle};
	color: ${(p) => p.theme.COLORS.dark[1]};
	margin-top: 40px;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		margin-top: 64px;
	}
`;

const ErrorMessage = styled.p`
	max-width: 201px;
	margin-top: 24px;

	font-family: ${(p) => p.theme.FONT_FAMILY.body};
	font-weight: ${(p) => p.theme.WEIGHTS.medium};
	font-size: ${12 / 16}rem;
	line-height: 15px;
	text-align: center;
	letter-spacing: -0.25px;
	color: ${(p) => p.theme.COLORS.grey[1]};

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		max-width: 221px;
	}
`;
