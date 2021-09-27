import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import emptyStateIllustrationSrc from '@/assets/illustration-empty.svg';
import { MEDIA_QUERIES } from '@/styles/constants';
import { EmptyStateMessageTextStyle, h2TextStyle } from '@/styles/typography';

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
			<Heading>{heading}</Heading>
			<Message>{errorMessage}</Message>
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

	@media ${MEDIA_QUERIES.tabletAndUp} {
		width: 240px;
		height: 199px;
	}
`;

const Heading = styled.h2`
	${h2TextStyle};
	color: ${(p) => p.theme.COLORS.emptyState.heading};
	margin-top: 40px;

	@media ${MEDIA_QUERIES.tabletAndUp} {
		margin-top: 64px;
	}
`;

const Message = styled.p`
	${EmptyStateMessageTextStyle};
	max-width: 201px;
	margin-top: 24px;
	text-align: center;
	color: ${(p) => p.theme.COLORS.emptyState.message};

	@media ${MEDIA_QUERIES.tabletAndUp} {
		max-width: 221px;
	}
`;
