import { FC } from 'react';
import styled from 'styled-components';

import { body2TextStyle, h4TextStyle, tableFooterTotalTextStyle } from '@/styles/typography';
import { InvoiceItem } from '@/types/index';
import { calculateItemTotal } from '@/utils/calculateItemTotal';
import { calculateInvoiceTotal } from '@/utils/calculateTotal';
import { formatCurrencyToString } from '@/utils/formatCurrencyToString';

interface DesktopTableProps {
	className?: string;
	items: InvoiceItem[];
}

export const DesktopTable: FC<DesktopTableProps> = ({ className, items }) => {
	return (
		<Table className={className}>
			<thead>
				<tr>
					<ItemNameColumn>Item Name</ItemNameColumn>
					<QuantityColumn>QTY.</QuantityColumn>
					<PriceColumn>Price</PriceColumn>
					<TotalColumn>Total</TotalColumn>
				</tr>
			</thead>
			<Body>
				{items.map((item, idx) => (
					<tr key={item.name + idx}>
						<Name>{item.name}</Name>
						<Quantity>{item.quantity}</Quantity>
						<Price>{formatCurrencyToString(parseFloat((item.price / 100).toFixed(2)))}</Price>
						<Total>
							{formatCurrencyToString(parseFloat(calculateItemTotal(item.quantity, item.price)))}
						</Total>
					</tr>
				))}
			</Body>
			<Footer>
				<tr>
					<TotalLabel>Grand Total</TotalLabel>
					<InvoiceTotal colSpan={3}>
						{formatCurrencyToString(calculateInvoiceTotal(items))}
					</InvoiceTotal>
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

	th {
		${body2TextStyle};
		color: ${(p) => p.theme.COLORS.invoiceDetailsTable.heading};
	}
`;

const Body = styled.tbody`
	tr:first-child > td {
		padding-top: 32px;
	}
	td {
		padding-bottom: 32px;
	}
`;

// Head
const ItemNameColumn = styled.th`
	text-align: start;
	width: 276px;
	padding-left: 32px;
	padding-top: 32px;
`;
const QuantityColumn = styled.th`
	width: 29px;
	text-align: center;
`;
const PriceColumn = styled.th`
	width: 117px;
	text-align: end;
`;
const TotalColumn = styled.th`
	width: 138px;
	text-align: end;
	padding-right: 32px;
`;

// Row
const Name = styled.td`
	text-align: start;
	padding-left: 32px;
`;
const Quantity = styled.td`
	text-align: center;
	color: ${(p) => p.theme.COLORS.text.body2};
`;
const Price = styled.td`
	text-align: end;
	color: ${(p) => p.theme.COLORS.text.body2};
`;
const Total = styled.td`
	text-align: end;
	padding-right: 32px;
`;

// Footer
const Footer = styled.tfoot`
	td {
		padding-top: 31px;
		padding-bottom: 31px;
	}
`;

const TotalLabel = styled.td`
	${body2TextStyle};
	color: ${(p) => p.theme.COLORS.invoiceDetailsTable.totalSection.color};
	padding-left: 32px;
	border-radius: 0 0 0 8px;
	background-color: ${(p) => p.theme.COLORS.invoiceDetailsTable.totalSection.bg};
`;
const InvoiceTotal = styled.td<{ colSpan: number }>`
	${tableFooterTotalTextStyle};
	padding-right: 32px;
	text-align: end;
	color: ${(p) => p.theme.COLORS.invoiceDetailsTable.totalSection.color};
	background-color: ${(p) => p.theme.COLORS.invoiceDetailsTable.totalSection.bg};
	border-radius: 0 0 8px 0;
`;
