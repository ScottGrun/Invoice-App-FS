import { NextPage } from 'next';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { InvoicesContext } from 'context/InvoicesContext';

import { PossibleStatus } from '../config/PossibleStatus';
import { demoInvoicesData } from '../data/demo';
import { Invoice } from '../types';

import { Drawer } from '@/components/Drawer';
import { EmptyState } from '@/components/EmptyState';
import { EditInvoiceForm } from '@/components/Form/EditInvoiceForm';
import { Header } from '@/components/Home';
import { InvoiceCard } from '@/components/InvoiceCard/InvoiceCard';
import { InvoiceListContainer } from '@/components/InvoiceListContainer/InvoiceListContainer';
import PageLayout from '@/layouts/PageLayout';
import { calculateInvoiceTotal } from '@/utils/calculateTotal';

const Home: NextPage = () => {
	const { invoices, addInvoice } = useContext(InvoicesContext);
	const [filter, setFilter] = useState<PossibleStatus | ''>('');
	const [filteredInvoices, setFilteredInvoices] = useState(invoices);
	const [isDrawerOpen, setDrawerOpen] = useState(true);

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

	console.log(invoices);

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
				<Header invoiceCount={invoices.length ?? 0} setFilter={setFilter} filter={filter} />
				<InvoiceListContainer>
					{filteredInvoices.length > 0 ? (
						filteredInvoices.map((invoice: Invoice) => (
							<Link key={invoice.id} href={`/invoice/${invoice.id}`} passHref>
								<a>
									<InvoiceCard
										id={invoice.id}
										dueDate={invoice.invoice_date as string}
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
