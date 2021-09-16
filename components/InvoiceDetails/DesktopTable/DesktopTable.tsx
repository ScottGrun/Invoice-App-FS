import { FC } from 'react';
import styled from 'styled-components';

import { body2TextStyle, h4TextStyle, tableFooterTotalTextStyle } from '@/styles/typography';

interface DesktopTableProps {
	className?: string;
	items: [];
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
				<tr>
					<Name>Banner Design</Name>
					<Quantity>1</Quantity>
					<Price>£ 156.00</Price>
					<Total>£ 156.00</Total>
				</tr>
				<tr>
					<Name>Banner Design</Name>
					<Quantity>1</Quantity>
					<Price>£ 156.00</Price>
					<Total>£ 156.00</Total>
				</tr>
			</Body>
			<Footer>
				<tr>
					<TotalLabel>Grand Total</TotalLabel>
					<InvoiceTotal colSpan={3}>£ 556.00</InvoiceTotal>
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

	th {
		${body2TextStyle};
		color: ${(p) => p.theme.COLORS.primary[3]};
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
	color: ${(p) => p.theme.COLORS.primary[3]};
`;
const Price = styled.td`
	text-align: end;
	color: ${(p) => p.theme.COLORS.primary[3]};
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
	color: ${(p) => p.theme.COLORS.white};
	padding-left: 32px;
	border-radius: 0 0 0 8px;
	background-color: ${(p) => p.theme.COLORS.dark[5]};
`;
const InvoiceTotal = styled.td<{ colSpan: number }>`
	${tableFooterTotalTextStyle};
	padding-right: 32px;
	text-align: end;
	color: ${(p) => p.theme.COLORS.white};
	background-color: ${(p) => p.theme.COLORS.dark[5]};
	border-radius: 0 0 8px 0;
`;
