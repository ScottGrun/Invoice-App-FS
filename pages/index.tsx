import { NextPage } from 'next';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { InvoicesContext } from 'context/InvoicesContext';

import { PossibleStatus } from '../config/PossibleStatus';
import { Invoice } from '../types';

import { Button } from '@/components/Button';
import { Drawer } from '@/components/Drawer';
import { InvoiceFilterDropdown } from '@/components/Dropdown';
import { EmptyState } from '@/components/EmptyState';
import { EditInvoiceForm } from '@/components/Form/EditInvoiceForm';
import { InvoiceCard } from '@/components/InvoiceCard/InvoiceCard';
import { InvoiceListContainer } from '@/components/InvoiceListContainer/InvoiceListContainer';
import PageLayout from '@/layouts/PageLayout';
import { bodyTextStyle, h1TextStyle, h2TextStyle } from '@/styles/typography';
import { calculateInvoiceTotal } from '@/utils/calculateTotal';
import { getInvoiceCountText } from '@/utils/getInvoiceCountText';

const Home: NextPage = () => {
	const { invoices } = useContext(InvoicesContext);
	const [filter, setFilter] = useState<PossibleStatus | ''>('');
	const [filteredInvoices, setFilteredInvoices] = useState(invoices);
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	useEffect(() => {
		if (filter === 'Draft' && invoices.length > 0) {
			setFilteredInvoices(invoices.filter((invoice) => invoice.status === filter));
		} else if (filter === 'Pending') {
			setFilteredInvoices(invoices.filter((invoice) => invoice.status === filter));
		} else if (filter === 'Paid') {
			setFilteredInvoices(invoices.filter((invoice) => invoice.status === filter));
		} else {
			setFilteredInvoices(invoices);
		}
	}, [filter, invoices]);

	return (
		<>
			<Drawer
				isDrawerOpen={isDrawerOpen}
				setDrawerOpen={setDrawerOpen}
				ariaLabel="Invoice Editing Form Modal"
			>
				<EditInvoiceForm setDrawerOpen={setDrawerOpen} />
			</Drawer>
			<PageLayout>
				<Header>
					<HeadingWrapper>
						<Heading>Invoices</Heading>
						<SubHeading>{getInvoiceCountText(filteredInvoices.length)}</SubHeading>
					</HeadingWrapper>
					<StyledDropdown setDropdownValue={setFilter} filter={filter} />
					<NewInvoiceButton icon="plus" onClick={() => setDrawerOpen(true)}>
						New&nbsp;<span>Invoice</span>
					</NewInvoiceButton>
				</Header>
				<InvoiceListContainer>
					{filteredInvoices.length > 0 ? (
						filteredInvoices.map((invoice: Invoice) => (
							<Link key={invoice.id} href={`/invoice/${invoice.id}`} passHref>
								<a>
									<InvoiceCard
										id={invoice.id}
										dueDate={invoice.invoice_date}
										clientName={invoice.client_name}
										status={invoice.status}
										total={calculateInvoiceTotal(invoice.invoice_items)}
									/>
								</a>
							</Link>
						))
					) : (
						<li>
							<StyledEmptyState
								heading="There is nothing here"
								errorMessage="Create a new invoice by clicking the
					New Invoice button and get started"
							/>
						</li>
					)}
				</InvoiceListContainer>
			</PageLayout>
		</>
	);
};

const Header = styled.header`
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

const StyledDropdown = styled(InvoiceFilterDropdown)`
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

const StyledEmptyState = styled(EmptyState)`
	margin-top: 71px;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		margin-top: 154px;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		margin-top: 76px;
	}
`;

export default Home;
