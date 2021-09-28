import { FC } from 'react';
import styled from 'styled-components';

import { PossibleStatus } from 'config/PossibleStatus';

import { h4TextStyle } from '@/styles/typography';

interface StatusProps {
	status: PossibleStatus;
	className?: string;
}

export const StatusBadge: FC<StatusProps> = ({ status, className }) => {
	return (
		<Wrapper className={className} status={status}>
			<div></div>
			{status}
		</Wrapper>
	);
};

const Wrapper = styled.div<{ status: PossibleStatus }>`
	${h4TextStyle};
	display: flex;
	align-items: center;
	justify-content: center;
	width: 104px;
	height: 40px;
	border-radius: 6px;
	text-transform: capitalize;
	color: ${({ theme, status }) => theme.COLORS.statusBadge[status].color};
	background-color: ${({ theme, status }) => theme.COLORS.statusBadge[status].bg};
	line-height: 0;
	div {
		display: block;
		height: 8px;
		width: 8px;
		border-radius: 50%;
		margin-right: 8px;
		margin-bottom: 3px;
		background-color: ${({ theme, status }) => theme.COLORS.statusBadge[status].color};
	}
`;
