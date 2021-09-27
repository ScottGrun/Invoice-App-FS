import React, { FC } from 'react';
import styled from 'styled-components';

import { InvoiceDetail } from '../InvoiceDetail';

import { DesktopTable } from '@/components/InvoiceDetails/DesktopTable';
import { MobileItemsTable } from '@/components/InvoiceDetails/MobileItemsTable';
import { Size, useWindowSize } from '@/hooks/useWindowSize';
import { COLORS, MEDIA_QUERIES, BREAKPOINTS } from '@/styles/constants';
import { body2TextStyle, bodyTextStyle, h4TextStyle } from '@/styles/typography';
import { Invoice } from '@/types/index';

interface DetailsCardProps {
	className?: string;
	invoice: Invoice;
}

export const DetailsCard: FC<DetailsCardProps> = ({ className, invoice }) => {
	const size: Size = useWindowSize();
	return (
		<Wrapper className={className}>
			<MetaData>
				<InvoiceIdAndName>
					<Id>
						<span>#</span>
						{invoice.id}
					</Id>
					<Name>{invoice.description}</Name>
				</InvoiceIdAndName>
				<UserAddress>
					<address>
						{invoice.user_street_address} <br />
						{invoice.user_city} <br />
						{invoice.user_post_code}
						<br />
						{invoice.user_country}
					</address>
				</UserAddress>
				<InvoiceDate label="Invoice Date" value={invoice.invoice_date}></InvoiceDate>
				<PaymentDue label="Payment Due" value={invoice.invoice_due_date}></PaymentDue>
				<ClientEmail label="Sent to" value={invoice.client_email}></ClientEmail>
				<BillTo label="Bill to" value={invoice.client_name}>
					<address>
						{invoice.client_street_address} <br />
						{invoice.client_city} <br />
						{invoice.client_post_code}
						<br />
						{invoice.client_country}
					</address>
				</BillTo>
			</MetaData>
			{size?.width ?? 0 > BREAKPOINTS.mobile ? (
				<StyledDesktopTable items={invoice.invoice_items} />
			) : (
				<MobileTable items={invoice.invoice_items} />
			)}
		</Wrapper>
	);
};

const Wrapper = styled.main`
	width: 100%;
	padding: 32px;
	background-color: ${(p) => p.theme.COLORS.invoiceDetails.bg};
	border-radius: 8px;
	box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
`;

const MetaData = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(5, max-content);
	gap: 32px 0px;
	grid-auto-flow: row;
	grid-template-areas:
		'id .'
		'user-address .'
		'invoice-date bill-to'
		'payment-due bill-to'
		'client-email .';

	@media ${MEDIA_QUERIES.tabletAndUp} {
		grid-template-columns: max-content 100px max-content 110px auto;
		grid-template-rows: repeat(3, max-content);
		gap: 21px 0px;

		grid-template-areas:
			'id . . . user-address'
			'invoice-date . bill-to . client-email'
			'payment-due . bill-to  . .';
	}
`;

const InvoiceIdAndName = styled.div`
	grid-area: id;

	span {
		color: ${COLORS.primary[3]};
	}
`;

const Id = styled.p`
	${h4TextStyle};
`;

const Name = styled.h1`
	${bodyTextStyle};
	color: ${(p) => p.theme.COLORS.text.body2};
	margin-top: 4px;
`;

const UserAddress = styled.div`
	${body2TextStyle};
	grid-area: user-address;
	color: ${(p) => p.theme.COLORS.text.body2};
	@media ${MEDIA_QUERIES.tabletAndUp} {
		justify-self: flex-end;
	}
`;
const InvoiceDate = styled(InvoiceDetail)`
	grid-area: invoice-date;
`;
const PaymentDue = styled(InvoiceDetail)`
	grid-area: payment-due;
	align-self: flex-end;
`;
const ClientEmail = styled(InvoiceDetail)`
	grid-area: client-email;
`;
const BillTo = styled(InvoiceDetail)`
	grid-area: bill-to;
`;

const StyledDesktopTable = styled(DesktopTable)`
	margin-top: 40px;
`;

const MobileTable = styled(MobileItemsTable)`
	margin-top: 40px;
`;
