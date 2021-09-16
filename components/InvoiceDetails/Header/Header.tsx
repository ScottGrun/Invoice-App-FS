import React, { FC } from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Button/Button';
import { StatusBadge } from '@/components/StatusBadge/StatusBadge';
import { PossibleStatus } from '@/config/PossibleStatus';
import { bodyTextStyle } from '@/styles/typography';

interface InvoiceDetailHeaderProps {
	status: PossibleStatus;
	className?: string;
}

export const Header: FC<InvoiceDetailHeaderProps> = ({ status, className }) => {
	return (
		<Wrapper className={className}>
			<StatusLabel>Status</StatusLabel>
			<StyledStatusBadge status={status} />
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
