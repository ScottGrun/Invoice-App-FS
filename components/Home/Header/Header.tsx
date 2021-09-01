import React from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Button/Button';
import { Dropdown } from '@/components/Dropdown/Dropdown';
import { DropdownOption } from '@/components/Dropdown/DropdownOption';
import { bodyTextStyle, h1TextStyle, h2TextStyle } from '@/styles/typography';
interface Props {
	invoiceCount: number;
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

export const Header = ({ invoiceCount }: Props) => {
	return (
		<Wrapper>
			<HeadingWrapper>
				<Heading>Invoices</Heading>
				<SubHeading>{getInvoiceCountText(invoiceCount)}</SubHeading>
			</HeadingWrapper>
			<StyledDropdown>
				<DropdownOption value="Draft" label="Draft">
					Draft
				</DropdownOption>
				<DropdownOption value="Pending" label="Pending">
					Pending
				</DropdownOption>
				<DropdownOption value="Paid" label="Paid">
					Paid
				</DropdownOption>
			</StyledDropdown>
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

const StyledDropdown = styled(Dropdown)`
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
