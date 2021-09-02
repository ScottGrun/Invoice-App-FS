import VisuallyHidden from '@reach/visually-hidden';
import React from 'react';
import styled from 'styled-components';

import { body2TextStyle, h4TextStyle, tableFooterTotalTextStyle } from '@/styles/typography';

interface Props {
	className?: string;
	items: [];
}

export const MobileItemsTable = ({ className }: Props) => {
	return (
		<Table className={className}>
			<thead>
				<tr>
					<td>
						<VisuallyHidden>Item Name</VisuallyHidden>
					</td>
					<td>
						<VisuallyHidden>Item Total</VisuallyHidden>
					</td>
				</tr>
			</thead>
			<Body>
				<tr>
					<NameColumn>
						<div>
							<ItemName>Banner Design</ItemName>
							<ItemQuantity>1 x £ 156.00</ItemQuantity>
						</div>
					</NameColumn>
					<TotalColumn>£ 156.00</TotalColumn>
				</tr>

				<tr>
					<NameColumn>
						<div>
							<ItemName>Banner Design</ItemName>
							<ItemQuantity>1 x £ 156.00</ItemQuantity>
						</div>
					</NameColumn>
					<TotalColumn>£ 156.00</TotalColumn>
				</tr>
			</Body>
			<Footer>
				<tr>
					<TotalLabel>Grand Total</TotalLabel>
					<InvoiceTotal>£ 556.00</InvoiceTotal>
				</tr>
			</Footer>
		</Table>
	);
};

const Table = styled.table`
	${h4TextStyle};
	width: 100%;
	background-color: ${(p) => p.theme.COLORS.grey[4]};
	border-radius: 8px 8px 0 0;
`;

const Body = styled.tbody`
	tr:first-child > td {
		padding-top: 24px;
	}
	td {
		padding-bottom: 24px;
	}
`;

const NameColumn = styled.td`
	padding-left: 24px;

	div {
		display: flex;
		flex-flow: column;
		gap: 8px;
	}
`;

const ItemName = styled.span``;

const ItemQuantity = styled.span`
	width: fit-content;
	color: ${(p) => p.theme.COLORS.primary[3]};
`;

const TotalColumn = styled.td`
	height: 100%;
	vertical-align: middle;
	text-align: end;
	padding-right: 24px;
`;

const Footer = styled.tfoot`
	td {
		padding-top: 31px;
		padding-bottom: 31px;
	}
`;

const TotalLabel = styled.td`
	${body2TextStyle};
	color: ${(p) => p.theme.COLORS.white};
	padding-left: 24px;
	border-radius: 0 0 0 8px;
	background-color: ${(p) => p.theme.COLORS.dark[5]};
`;
const InvoiceTotal = styled.td`
	${tableFooterTotalTextStyle};
	padding-right: 24px;
	text-align: end;
	color: ${(p) => p.theme.COLORS.white};
	background-color: ${(p) => p.theme.COLORS.dark[5]};
	border-radius: 0 0 8px 0;
`;
