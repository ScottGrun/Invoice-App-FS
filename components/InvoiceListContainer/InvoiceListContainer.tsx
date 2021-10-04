import { motion } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components';

import { EmptyState } from '../EmptyState';
import { InvoiceCard } from '../InvoiceCard';

import { MEDIA_QUERIES } from '@/styles/constants';
import { Invoice } from '@/types/index';
import { calculateInvoiceTotal } from '@/utils/calculateTotal';

interface ListContainerProps {
	shouldAnimateList: boolean;
	filteredInvoices: Invoice[];
}

export const InvoiceListContainer: FC<ListContainerProps> = ({ filteredInvoices }) => {
	return (
		<Wrapper>
			{filteredInvoices && filteredInvoices.length > 0 ? (
				<List initial="hidden" animate="visible" variants={list}>
					{filteredInvoices.map((invoice: Invoice, idx: number) => (
						<motion.li
							key={idx}
							variants={item}
							whileHover={{
								x: 12,
							}}
						>
							<InvoiceCard
								id={invoice.id}
								dueDate={invoice.invoice_date.toString()}
								clientName={invoice.client_name}
								status={invoice.status}
								total={calculateInvoiceTotal(invoice.invoice_items)}
							/>
						</motion.li>
					))}
				</List>
			) : (
				<StyledEmptyState
					heading="There is nothing here"
					errorMessage="Create a new invoice by clicking the
					New Invoice button and get started"
				/>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-flow: column;

	margin-top: 32px;

	@media ${MEDIA_QUERIES.tabletAndUp} {
		margin-top: 56px;
	}

	@media ${MEDIA_QUERIES.laptopAndUp} {
		margin-top: 65parx;
	}
`;

const List = styled(motion.ul)`
	display: flex;
	flex-flow: column;
	gap: 16px;
`;
const StyledEmptyState = styled(EmptyState)`
	margin-top: 71px;

	@media ${MEDIA_QUERIES.tabletAndUp} {
		margin-top: 154px;
	}

	@media ${MEDIA_QUERIES.laptopAndUp} {
		margin-top: 76px;
	}
`;

// Animations - Invoice Card
const list = {
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	hidden: {},
};

const item = {
	visible: {
		y: 0,
		opacity: 1,
	},
	hidden: { opacity: 0, y: -50 },
};
