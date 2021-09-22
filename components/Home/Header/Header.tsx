import React, { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Button/Button';
import { InvoiceFilterDropdown } from '@/components/Dropdown/InvoiceFilterDropdown';
import { PossibleStatus } from '@/config/PossibleStatus';
import { bodyTextStyle, h1TextStyle, h2TextStyle } from '@/styles/typography';
interface HeaderProps {
	invoiceCount: number;
	setFilter: Dispatch<SetStateAction<'' | PossibleStatus>>;
	filter: PossibleStatus | '';
}

const getInvoiceCountText = (count: number) => {
	if (count <= 0) {
		return 'No invoices';
	} else if (count === 1) {
		return 'There is 1 invoice';
	} else {
		return `There are ${count} invoices.`;
	}
};

export const Header: FC<HeaderProps> = ({ invoiceCount, setFilter, filter }) => {
	return (
		<Wrapper>
			<HeadingWrapper>
				<Heading>Invoices</Heading>
				<SubHeading>{getInvoiceCountText(invoiceCount)}</SubHeading>
			</HeadingWrapper>
			<StyledDropdown setDropdownValue={setFilter} filter={filter} />
			<NewInvoiceButton icon="plus">
				New&nbsp;<span>Invoice</span>
			</NewInvoiceButton>
		</Wrapper>
	);
};

const Wrapper = styled.header`
	display: flex;
	gap: 18px;
	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		align-items: center;
		gap: 40px;
	}
`;

const HeadingWrapper = styled.div`
	margin-top: 2px;
	margin-right: auto;
`;

const Heading = styled.h1`
	${h2TextStyle};
	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		${h1TextStyle};
	}
`;

const SubHeading = styled.p`
	${bodyTextStyle};
	margin-top: 4px;
	color: ${(p) => p.theme.COLORS.grey[1]};
	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		margin-top: 8px;
	}
`;

const StyledDropdown = styled(InvoiceFilterDropdown)`
	margin-top: 15px;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		margin: 0px;
	}
`;

const NewInvoiceButton = styled(Button)`
	span {
		display: none;
	}

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		span {
			display: revert;
		}
	}
`;
