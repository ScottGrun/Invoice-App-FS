import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import styled from 'styled-components';

import { InvoicesContext } from 'context/InvoicesContext';

import { Button } from '@/components/Button/Button';
import { Drawer } from '@/components/Drawer';
import { EditInvoiceForm } from '@/components/Form/EditInvoiceForm';
import { DetailsCard } from '@/components/InvoiceDetails/DetailsCard/DetailsCard';
import { Modal } from '@/components/Modal';
import { PageLink } from '@/components/PageLink/PageLink';
import { StatusBadge } from '@/components/StatusBadge';
import PageLayout from '@/layouts/PageLayout';
import { COLORS, MEDIA_QUERIES, WEIGHTS } from '@/styles/constants';
import { bodyTextStyle, modalBodyTextStyle, modalHeaderTextStyle } from '@/styles/typography';

const InvoiceDetails: NextPage = () => {
	const router = useRouter();
	const [isDrawerOpen, setDrawerOpen] = useState(false);
	const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

	const { id } = router.query;
	const { invoices, updateInvoice, deleteInvoice } = useContext(InvoicesContext);

	const selectedInvoice = invoices.find((invoice) => invoice.id === id);

	const markInvoicePaid = () => {
		if (selectedInvoice) updateInvoice({ ...selectedInvoice, status: 'paid' });
	};

	const handleDeleteInvoice = (id: string) => {
		deleteInvoice(id);
		router.push('/');
	};

	return (
		<>
			<Drawer
				isDrawerOpen={isDrawerOpen}
				setDrawerOpen={setDrawerOpen}
				ariaLabel="Invoice Editing Form Modal"
			>
				<EditInvoiceForm setDrawerOpen={setDrawerOpen} invoice={selectedInvoice} />
			</Drawer>
			{selectedInvoice && (
				<PageLayout>
					<DeleteModal ariaLabel="Confirm Invoice Delete" isOpen={isDeleteModalOpen}>
						<DeleteHeader>Confirm Deletion</DeleteHeader>
						<DeleteWarningMessage>
							Are you sure you want to delete invoice:{' '}
							<b>
								{selectedInvoice?.id} - {selectedInvoice?.description}
							</b>
							? This action cannot be undone.
						</DeleteWarningMessage>
						<ModalButtonContainer>
							<Button variant="secondary" onClick={() => setDeleteModalOpen(false)}>
								Cancel
							</Button>
							<Button variant="warning" onClick={() => handleDeleteInvoice(selectedInvoice.id)}>
								Delete
							</Button>
						</ModalButtonContainer>
					</DeleteModal>
					<PageLink href="/" icon="back">
						Go back
					</PageLink>

					<>
						<Header>
							<StatusLabel>Status</StatusLabel>
							<StyledStatusBadge status={selectedInvoice.status} />
							<ButtonContainer>
								<Button variant="secondary" onClick={() => setDrawerOpen(true)}>
									Edit
								</Button>
								<Button variant="warning" onClick={() => setDeleteModalOpen(true)}>
									Delete
								</Button>
								{selectedInvoice.status !== 'paid' && (
									<Button variant="primary" onClick={markInvoicePaid}>
										Mark as Paid
									</Button>
								)}
							</ButtonContainer>
						</Header>
						<InvoiceDetailsCard invoice={selectedInvoice} />{' '}
					</>

					<MobileButtonsContainer>
						<Button variant="secondary" onClick={() => setDrawerOpen(true)}>
							Edit
						</Button>
						<Button variant="warning" onClick={() => setDeleteModalOpen(true)}>
							Delete
						</Button>
						{selectedInvoice?.status !== 'paid' && (
							<Button variant="primary" onClick={markInvoicePaid}>
								Mark as Paid
							</Button>
						)}
					</MobileButtonsContainer>
				</PageLayout>
			)}
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
	background-color: ${(p) => p.theme.COLORS.invoiceDetails.bg};

	@media ${MEDIA_QUERIES.tabletAndUp} {
		display: none;
	}
`;

// Modal
const DeleteModal = styled(Modal)`
	align-self: center;
	width: 100%;
	margin: 0 24px;
	background-color: ${(p) => p.theme.COLORS.modal.bg};
`;

const DeleteHeader = styled.h2`
	${modalHeaderTextStyle};
	color: ${(p) => p.theme.COLORS.modal.header};
`;

const DeleteWarningMessage = styled.p`
	${modalBodyTextStyle};
	margin-top: 8px;
	color: ${(p) => p.theme.COLORS.modal.body};

	b {
		font-weight: ${WEIGHTS.bold};
	}
`;

const ModalButtonContainer = styled.div`
	display: flex;
	justify-content: end;
	margin-top: 24px;
	gap: 8px;
`;
