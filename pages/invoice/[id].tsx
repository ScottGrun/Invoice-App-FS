import { NextPage } from 'next';
import { useState } from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Button/Button';
import { Drawer } from '@/components/Drawer';
import { EditInvoiceForm } from '@/components/Form/EditInvoiceForm';
import { DetailsCard } from '@/components/InvoiceDetails/DetailsCard/DetailsCard';
import { Header } from '@/components/InvoiceDetails/Header/Header';
import { PageLink } from '@/components/PageLink/PageLink';
import PageLayout from '@/layouts/PageLayout';

const InvoiceDetails: NextPage = () => {
	const [isDrawerOpen, setDrawerClosed] = useState(true);
	return (
		<>
			<Drawer
				isDrawerOpen={isDrawerOpen}
				setDrawerClosed={setDrawerClosed}
				ariaLabel="Invoice Editing Form Modal"
			>
				<EditInvoiceForm setDrawerClosed={setDrawerClosed} invoiceDetails={null} />
			</Drawer>
			<PageLayout>
				<PageLink href="/" icon="back">
					Go back
				</PageLink>
				<StyledHeader status="Pending" />
				<InvoiceDetailsCard />
				<MobileButtonsContainer>
					<Button variant="secondary">Edit</Button>
					<Button variant="warning">Delete</Button>
					<Button variant="primary">Mark As Paid</Button>
				</MobileButtonsContainer>
			</PageLayout>
		</>
	);
};

export default InvoiceDetails;

const StyledHeader = styled(Header)`
	margin-top: 32px;
`;

const InvoiceDetailsCard = styled(DetailsCard)`
	margin-top: 16px;
	margin-bottom: 147px;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		margin-bottom: revert;
	}
`;

const MobileButtonsContainer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	width: 100%;
	height: 91px;
	background-color: ${(p) => p.theme.COLORS.white};

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		display: none;
	}
`;
