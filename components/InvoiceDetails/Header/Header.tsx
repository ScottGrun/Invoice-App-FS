import React from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Button/Button';
import { StatusBadge } from '@/components/StatusBadge/StatusBadge';
import { bodyTextStyle } from '@/styles/typography';

interface Props {
	status: '';
}

export const Header = ({ status }: Props) => {
	return (
		<Wrapper>
			<StatusLabel>Status</StatusLabel>
			<StyledStatusBadge status="Pending" />
			<ButtonContainer>
				<Button variant="secondary">Edit</Button>
				<Button variant="warning">Delete</Button>
				<Button variant="primary">Mark as Paid</Button>
			</ButtonContainer>
		</Wrapper>
	);
};

const Wrapper = styled.header`
	display: flex;
	align-items: center;
	margin-top: 32px;
	padding: 0 24px;
	width: 100%;
	height: 91px;
	background-color: ${(p) => p.theme.COLORS.white};
	border-radius: 8px;
	box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
`;

const StatusLabel = styled.p`
	${bodyTextStyle};
	color: ${(p) => p.theme.COLORS.grey[5]};
`;

const StyledStatusBadge = styled(StatusBadge)`
	margin-left: auto;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		margin-left: 16px;
		margin-right: auto;
	}
`;

const ButtonContainer = styled.div`
	display: none;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		display: flex;
		gap: 8px;
	}
`;
