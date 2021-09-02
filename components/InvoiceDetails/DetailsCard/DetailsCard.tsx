import React from 'react';
import styled from 'styled-components';

import DetailField from '../DetailField/DetailField';

import { body2TextStyle, bodyTextStyle, h4TextStyle } from '@/styles/typography';

interface Props {
	className?: string;
}

export const DetailsCard = ({ className }: Props) => {
	return (
		<Wrapper className={className}>
			<MetaData>
				<InvoiceIdAndName>
					<Id>
						<span>#</span>XM9141
					</Id>
					<Name>Graphic Design</Name>
				</InvoiceIdAndName>
				<UserAddress>
					<address>
						19 Union Terrace <br />
						London <br />
						E1 3EZ <br />
						United Kingdom
					</address>
				</UserAddress>
				<InvoiceDate label="Invoice Date" value="21 Aug 2021"></InvoiceDate>
				<PaymentDue label="Payment Due" value="20 Sep 2021"></PaymentDue>
				<ClientEmail label="Sent to" value="alexgrim@mail.com"></ClientEmail>
				<BillTo label="Bill to" value="Alex Grim">
					<address>
						19 Union Terrace <br />
						London <br />
						E1 3EZ <br />
						United Kingdom
					</address>
				</BillTo>
			</MetaData>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	width: 100%;
	padding: 32px;
	background-color: ${(p) => p.theme.COLORS.white};
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

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
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
		color: ${(p) => p.theme.COLORS.primary[3]};
	}
`;

const Id = styled.p`
	${h4TextStyle};
`;

const Name = styled.h1`
	${bodyTextStyle};
	color: ${(p) => p.theme.COLORS.primary[3]};
	margin-top: 4px;
`;

const UserAddress = styled.div`
	${body2TextStyle};
	grid-area: user-address;
	color: ${(p) => p.theme.COLORS.primary[3]};
	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		justify-self: flex-end;
	}
`;
const InvoiceDate = styled(DetailField)`
	grid-area: invoice-date;
`;
const PaymentDue = styled(DetailField)`
	grid-area: payment-due;
	align-self: flex-end;
`;
const ClientEmail = styled(DetailField)`
	grid-area: client-email;
`;
const BillTo = styled(DetailField)`
	grid-area: bill-to;
`;
