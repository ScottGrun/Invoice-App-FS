import React from 'react';
import styled from 'styled-components';

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
			<Dropdown>
				<DropdownOption value="Draft" label="Draft">
					Draft
				</DropdownOption>
				<DropdownOption value="Pending" label="Pending">
					Pending
				</DropdownOption>
				<DropdownOption value="Paid" label="Paid">
					Paid
				</DropdownOption>
			</Dropdown>
		</Wrapper>
	);
};

const Wrapper = styled.header`
	display: flex;
	align-items: center;
	gap: 18px;
`;

const HeadingWrapper = styled.div`
	margin-right: auto;
`;

const Heading = styled.h1`
	${h2TextStyle};
`;

const SubHeading = styled.p`
	${bodyTextStyle};
	margin-top: 4px;
	color: ${(p) => p.theme.COLORS.grey[1]};
`;
