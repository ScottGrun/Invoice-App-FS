import VisuallyHidden from '@reach/visually-hidden';
import React, { FC } from 'react';
import styled from 'styled-components';

import { COLORS } from '@/styles/constants';
import { body2TextStyle, h4TextStyle, tableFooterTotalTextStyle } from '@/styles/typography';
import { InvoiceItem } from '@/types/index';
import { calculateItemTotal } from '@/utils/calculateItemTotal';
import { calculateInvoiceTotal } from '@/utils/calculateTotal';

interface MobileItemsTableProps {
	className?: string;
	items: InvoiceItem[];
}

export const MobileItemsTable: FC<MobileItemsTableProps> = ({ className, items }) => {
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
				{items.map((item, idx) => (
					<tr key={item.name + idx}>
						<NameColumn>
							<div>
								<ItemName>{item.name}</ItemName>
								<ItemQuantity>
									{item.quantity} x ${(item.price / 100).toFixed(2)}
								</ItemQuantity>
							</div>
						</NameColumn>
						<TotalColumn>${calculateItemTotal(item.quantity, item.price)}</TotalColumn>
					</tr>
				))}
			</Body>
			<Footer>
				<tr>
					<TotalLabel>Grand Total</TotalLabel>
					<InvoiceTotal>${calculateInvoiceTotal(items)}</InvoiceTotal>
				</tr>
			</Footer>
		</Table>
	);
};

const Table = styled.table`
	${h4TextStyle};
	width: 100%;
	background-color: ${(p) => p.theme.COLORS.invoiceDetailsTable.bg};
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
	color: ${COLORS.primary[3]};
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
	background-color: ${(p) => p.theme.COLORS.invoiceDetailsTable.totalSection.bg};
`;
const InvoiceTotal = styled.td`
	${tableFooterTotalTextStyle};
	padding-right: 24px;
	text-align: end;
	color: ${(p) => p.theme.COLORS.white};
	background-color: ${(p) => p.theme.COLORS.invoiceDetailsTable.totalSection.bg};
	border-radius: 0 0 8px 0;
`;
