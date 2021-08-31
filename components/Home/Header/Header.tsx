import React from 'react';
import styled from 'styled-components';

import { bodyTextStyle, h1TextStyle } from '@/styles/typography';
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
		</Wrapper>
	);
};

const Wrapper = styled.header``;

const HeadingWrapper = styled.div``;

const Heading = styled.h1`
	${h1TextStyle};
`;

const SubHeading = styled.p`
	${bodyTextStyle};
	color: ${(p) => p.theme.COLORS.grey[1]};
`;
