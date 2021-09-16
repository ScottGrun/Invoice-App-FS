import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

import iconPersonSrc from '@/icons/icon-user.svg';

interface ProfileImgProps {
	className?: string;
	profileImgSrc?: string;
}

export const ProfileImg: FC<ProfileImgProps> = ({ className, profileImgSrc }) => {
	return (
		<Wrapper className={className}>
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
