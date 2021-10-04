import { NextPage } from 'next';
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { InvoicesContext } from 'context/InvoicesContext';

import { Button } from '@/components/Button';
import { Drawer } from '@/components/Drawer';
import { Dropdown, DropdownOption } from '@/components/Dropdown';
import { EditInvoiceForm } from '@/components/Form/EditInvoiceForm';
import { InvoiceListContainer } from '@/components/InvoiceListContainer/InvoiceListContainer';
import PageLayout from '@/layouts/PageLayout';
import { MEDIA_QUERIES } from '@/styles/constants';
import { bodyTextStyle, h1TextStyle, h2TextStyle } from '@/styles/typography';
import { Invoice, PossibleStatus } from '@/types/index';
import { getInvoiceCountText } from '@/utils/getInvoiceCountText';

const Home: NextPage = () => {
	const { invoices } = useContext(InvoicesContext);
	const [filter, setFilter] = useState<PossibleStatus | 'all'>('all');
	const [filteredInvoices, setFilteredInvoices] = useState<Invoice[] | null>(null);
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	useEffect(() => {
		if (invoices) {
			setFilteredInvoices(invoices);
		}
	}, [invoices]);

	useEffect(() => {
		if (filter === 'draft' && invoices.length > 0) {
			setFilteredInvoices(invoices.filter((invoice) => invoice.status === filter));
		} else if (filter === 'pending') {
			setFilteredInvoices(invoices.filter((invoice) => invoice.status === filter));
		} else if (filter === 'paid') {
			setFilteredInvoices(invoices.filter((invoice) => invoice.status === filter));
		} else {
			setFilteredInvoices(invoices);
		}
	}, [filter, invoices]);

	console.log(invoices);
	return (
		<>
			<Head>
				<title>Invoicely | Invoice Management</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
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
						<SubHeading>
							{getInvoiceCountText(filteredInvoices ? filteredInvoices.length : 0)}
						</SubHeading>
					</HeadingWrapper>
					<StyledDropdown setDropdownValue={setFilter} filter={filter} defaultValue="all">
						<DropdownOption label="All" value="all">
							All
						</DropdownOption>
						<DropdownOption label="Draft" value="draft">
							Draft
						</DropdownOption>
						<DropdownOption label="Pending" value="pending">
							Pending
						</DropdownOption>
						<DropdownOption label="Paid" value="paid">
							Paid
						</DropdownOption>
					</StyledDropdown>
					<NewInvoiceButton icon="plus" onClick={() => setDrawerOpen(true)}>
						New&nbsp;<span>Invoice</span>
					</NewInvoiceButton>
				</Header>
				{filteredInvoices && <InvoiceListContainer filteredInvoices={filteredInvoices} />}
			</PageLayout>
		</>
	);
};

const Header = styled.header`
	display: flex;
	gap: 18px;
	@media ${MEDIA_QUERIES.tabletAndUp} {
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
	@media ${MEDIA_QUERIES.tabletAndUp} {
		${h1TextStyle};
	}
`;

const SubHeading = styled.p`
	${bodyTextStyle};
	margin-top: 4px;
	color: ${(p) => p.theme.COLORS.header.subHeaderColor};
	@media ${MEDIA_QUERIES.tabletAndUp} {
		margin-top: 8px;
	}
`;

const StyledDropdown = styled(Dropdown)`
	margin-top: 15px;

	@media ${MEDIA_QUERIES.tabletAndUp} {
		margin: 0px;
	}
`;

const NewInvoiceButton = styled(Button)`
	span {
		display: none;
	}

	@media ${MEDIA_QUERIES.tabletAndUp} {
		span {
			display: revert;
		}
	}
`;

export default Home;
