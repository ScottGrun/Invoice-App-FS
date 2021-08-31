import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import iconPersonSrc from '@/public/icons/icon-user.svg';

interface Props {
	className?: string;
	profileImgSrc?: string;
}

export const ProfileImg = ({ className, profileImgSrc }: Props) => {
	return (
		<Wrapper>
			{profileImgSrc ? (
				<Image
					src={profileImgSrc}
					layout="fixed"
					height="32"
					width="32"
					alt="Your profile picture"
				/>
			) : (
				<EmptyState>
					<Image src={iconPersonSrc} alt="Your profile picture" />
				</EmptyState>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div``;

const EmptyState = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 32px;
	height: 32px;
	background-color: ${(p) => p.theme.COLORS.grey[1]};
	border-radius: 50%;
`;
