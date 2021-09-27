import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { InvoicesContext } from 'context/InvoicesContext';

import { Button } from '@/components/Button/Button';
import { Drawer } from '@/components/Drawer';
import { EditInvoiceForm } from '@/components/Form/EditInvoiceForm';
import { DetailsCard } from '@/components/InvoiceDetails/DetailsCard/DetailsCard';
import { PageLink } from '@/components/PageLink/PageLink';
import { StatusBadge } from '@/components/StatusBadge';
import PageLayout from '@/layouts/PageLayout';
import { COLORS, MEDIA_QUERIES } from '@/styles/constants';
import { bodyTextStyle } from '@/styles/typography';
import { Invoice } from '@/types/index';

const InvoiceDetails: NextPage = () => {
	const [isDrawerOpen, setDrawerOpen] = useState(true);
	const router = useRouter();
	const { id } = router.query;
	const { invoices, updateInvoice } = useContext(InvoicesContext);

	const selectedInvoice = invoices.find((invoice) => invoice.id === id);

	const markInvoicePaid = () => updateInvoice({ ...selectedInvoice, status: 'Paid' });

	return (
		<>
			<Drawer
				isDrawerOpen={isDrawerOpen}
				setDrawerOpen={setDrawerOpen}
				ariaLabel="Invoice Editing Form Modal"
			>
				<EditInvoiceForm setDrawerOpen={setDrawerOpen} invoice={selectedInvoice} />
			</Drawer>
			<PageLayout>
				<PageLink href="/" icon="back">
					Go back
				</PageLink>
				{selectedInvoice && (
					<>
						<Header>
							<StatusLabel>Status</StatusLabel>
							<StyledStatusBadge status={selectedInvoice.status} />
							<ButtonContainer>
								<Button variant="secondary" onClick={() => setDrawerOpen(true)}>
									Edit
								</Button>
								<Button variant="warning">Delete</Button>
								{selectedInvoice.status !== 'Paid' && (
									<Button variant="primary" onClick={markInvoicePaid}>
										Mark as Paid
									</Button>
								)}
							</ButtonContainer>
						</Header>
						<InvoiceDetailsCard invoice={selectedInvoice} />{' '}
					</>
				)}
				<MobileButtonsContainer>
					<Button variant="secondary" onClick={() => setDrawerOpen(true)}>
						Edit
					</Button>
					<Button variant="warning">Delete</Button>
					<Button variant="primary">Mark As Paid</Button>
				</MobileButtonsContainer>
			</PageLayout>
		</>
	);
};

export default InvoiceDetails;

const Header = styled.header`
	display: flex;
	align-items: center;
	padding: 0 24px;
	margin-top: 32px;
	width: 100%;
	height: 91px;
	background-color: ${(p) => p.theme.COLORS.invoiceDetails.bg};
	border-radius: 8px;
	box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
`;

const StatusLabel = styled.p`
	${bodyTextStyle};
	color: ${COLORS.grey[5]};
`;

const StyledStatusBadge = styled(StatusBadge)`
	margin-left: auto;

	@media ${MEDIA_QUERIES.tabletAndUp} {
		margin-left: 16px;
		margin-right: auto;
	}
`;

const ButtonContainer = styled.div`
	display: none;

	@media ${MEDIA_QUERIES.tabletAndUp} {
		display: flex;
		gap: 8px;
	}
`;

const InvoiceDetailsCard = styled(DetailsCard)`
	margin-top: 16px;
	margin-bottom: 147px;

	@media ${MEDIA_QUERIES.tabletAndUp} {
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
	background-color: ${COLORS.white};

	@media ${MEDIA_QUERIES.tabletAndUp} {
		display: none;
	}
`;
