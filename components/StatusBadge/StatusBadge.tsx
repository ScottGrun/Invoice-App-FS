import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { ColorVariantsType } from '../Button/Button';

import { theme } from '@/styles/theme';
import { h4TextStyle } from '@/styles/typography';

interface Props {
	status: 'Draft' | 'Pending' | 'Paid';
	className?: string;
}

const colorVariants: ColorVariantsType = {
	Paid: {
		color: theme.COLORS.success[1],
		background: theme.COLORS.success[2],
	},
	Pending: {
		color: theme.COLORS.caution[1],
		background: theme.COLORS.caution[2],
	},
	Draft: {
		color: theme.COLORS.dark[5],
		background: theme.COLORS.grey[6],
	},
};

export const StatusBadge = ({ status, className }: Props) => {
	return (
		<Wrapper className={className} status={status}>
			<div></div>
			{status}
		</Wrapper>
	);
};

const Wrapper = styled.div<{ status: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	${h4TextStyle};
	width: 104px;
	height: 40px;
	border-radius: 6px;
	color: ${({ status }) => colorVariants[status]['color']};
	background-color: ${({ status }) => colorVariants[status]['background']};

	div {
		display: block;
		height: 8px;
		width: 8px;
		border-radius: 50%;
		margin-right: 8px;
		background-color: ${({ status }) => colorVariants[status]['color']};
	}
`;
