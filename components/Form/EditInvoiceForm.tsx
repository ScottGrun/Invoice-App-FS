import { yupResolver } from '@hookform/resolvers/yup';
import cuid from 'cuid';
import React, { Dispatch, FC, SetStateAction, useContext, useState } from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { initalValues } from 'config/Form/InitalValues';
import { InvoicesContext } from 'context/InvoicesContext';

import { PageLink } from '../PageLink';

import { Button } from '@/components/Button';
import { Error } from '@/components/Form/Error';
import { DateField } from '@/components/Form/Fields/DateField';
import { FormField } from '@/components/Form/Fields/FormField';
import { ItemField } from '@/components/Form/Fields/ItemField';
import { FormSection } from '@/components/Form/FormSection';
import { ValidationSchema } from '@/config/Form';
import { COLORS, MEDIA_QUERIES } from '@/styles/constants';
import { formHeaderTextStyle, itemlistHeaderTextStyle } from '@/styles/typography';
import { Invoice } from '@/types/index';
import { formatDateToString } from '@/utils/formatDate';
interface EditInvoiceForm {
	setDrawerOpen: Dispatch<SetStateAction<boolean>>;
	invoice?: Invoice;
}

export const EditInvoiceForm: FC<EditInvoiceForm> = ({ setDrawerOpen, invoice }) => {
	const { addInvoice, updateInvoice } = useContext(InvoicesContext);
	const [shouldBeDisabled, setShouldBeDisabled] = useState(false);
	const methods = useForm({
		defaultValues: invoice ? invoice : initalValues,
		resolver: yupResolver(ValidationSchema),
		mode: 'onChange',
	});

	const invoiceStatus = methods.getValues().status;

	const { fields, append, remove } = useFieldArray({
		control: methods.control,
		name: 'invoice_items',
	});

	const handleSubmit = async (submitType: 'Add' | 'Update' | 'Send') => {
		const isVaild = await methods.trigger();

		if (isVaild) {
			// Get all form values as obj
			const formValues = methods.getValues();

			switch (submitType) {
				case 'Add':
					addInvoice({
						...formValues,
						id: cuid.slug(),
						status: 'draft',
						invoice_date: formatDateToString(formValues.invoice_date as Date),
						invoice_due_date: formatDateToString(formValues.invoice_due_date as Date),
					});
					break;
				case 'Update':
					updateInvoice({
						...formValues,
						invoice_date: formatDateToString(formValues.invoice_date as Date),
						invoice_due_date: formatDateToString(formValues.invoice_due_date as Date),
					});
					break;
				case 'Send':
					if (invoice) {
						updateInvoice({
							...formValues,
							status: 'pending',
							invoice_date: formatDateToString(formValues.invoice_date as Date),
							invoice_due_date: formatDateToString(formValues.invoice_due_date as Date),
						});
					} else if (!invoice) {
						addInvoice({
							...formValues,
							id: cuid.slug(),
							status: 'pending',
							invoice_date: formatDateToString(formValues.invoice_date as Date),
							invoice_due_date: formatDateToString(formValues.invoice_due_date as Date),
						});
					}
					break;
				default:
					throw 'Error: Unknown submit type'; // generates an error object with the message of Required
			}

			setDrawerOpen(false);
		}
	};

	return (
		<FormProvider {...methods}>
			<StyledForm onSubmit={(e) => e.preventDefault()}>
				<BackButton onClick={() => setDrawerOpen(false)} icon="back">
					Go back
				</BackButton>
				<FormHeader>
					{invoice ? (
						<>
							Edit <span>#</span>
							{invoice.id}
						</>
					) : (
						<>New Invoice</>
					)}
				</FormHeader>

				<FieldSet>
					{/* Bill From */}
					<FormSection label="Bill From">
						<FormField type="text" label="Street Address" name="user_street_address" />
						<Row>
							<FormField
								style={{ minWidth: '140px', flex: 1 }}
								type="text"
								label="City"
								name="user_city"
							/>
							<FormField
								style={{ minWidth: '140px', flex: 1 }}
								type="text"
								label="Post Code"
								name="user_post_code"
							/>
							<FormField
								style={{ minWidth: '152px', flex: 1 }}
								type="text"
								label="Country"
								name="user_country"
							/>
						</Row>
					</FormSection>
					{/* Bill To */}
					<FormSection label="Bill To">
						<FormField type="text" label="Client's Name" name="client_name" />
						<FormField type="email" label="Client's Email" name="client_email" />
						<FormField type="text" label="Street Address" name="client_street_address" />
						<Row>
							<FormField
								style={{ minWidth: '140px', flex: 1 }}
								type="text"
								label="City"
								name="client_city"
							/>
							<FormField
								style={{ minWidth: '140px', flex: 1 }}
								type="text"
								label="Post Code"
								name="client_post_code"
							/>
							<FormField
								style={{ minWidth: '152px', flex: 1 }}
								type="text"
								label="Country"
								name="client_country"
							/>
						</Row>
					</FormSection>

					<FormSection label="Invoice Details">
						<Row>
							<DateField style={{ flex: 1 }} name="invoice_date" label="Invoice Date" />
							<DateField style={{ flex: 1 }} name="invoice_due_date" label="Invoice Due Date" />
						</Row>

						<FormField
							style={{ minWidth: '152px', flex: 1 }}
							type="text"
							label="Project Description"
							name="description"
						/>
						<ItemsListHeaderWrapper>
							<ItemListHeader>Item List</ItemListHeader>
							{/* @ts-expect-error: ignore wrong schema warning */}
							<Error>{methods.formState.errors.invoice_items?.message}</Error>
						</ItemsListHeaderWrapper>
						<ItemsFieldList>
							{fields.map((item, itemIndex) => (
								<div key={item.id}>
									<ItemField idx={itemIndex} remove={remove} />
								</div>
							))}
							{!shouldBeDisabled && (
								<Button
									disabled={shouldBeDisabled}
									variant="secondary"
									type="button"
									onClick={() => append({ name: '', price: 0, quantity: 0 })}
								>
									+ Add New Item
								</Button>
							)}
						</ItemsFieldList>
					</FormSection>

					<FormButtonsContainer>
						<Button onClick={() => setDrawerOpen(false)} type="button" variant="secondary">
							Close
						</Button>

						{invoiceStatus === 'draft' && (
							<>
								<SaveDraftButton
									type="button"
									variant="tertiary"
									onClick={() => (invoice ? handleSubmit('Update') : handleSubmit('Add'))}
								>
									Save as Draft
								</SaveDraftButton>

								<Button type="button" variant="primary" onClick={() => handleSubmit('Send')}>
									Save & Send
								</Button>
							</>
						)}
					</FormButtonsContainer>
				</FieldSet>
			</StyledForm>
		</FormProvider>
	);
};

const BackButton = styled(PageLink)`
	margin-top: 32px;
	@media ${MEDIA_QUERIES.tabletAndUp} {
		display: none;
	}
`;

const FormHeader = styled.h2`
	${formHeaderTextStyle};
	padding-top: 24px;
	padding-bottom: 10px;

	span {
		color: ${COLORS.grey[1]};
	}

	@media ${MEDIA_QUERIES.tabletAndUp} {
		padding-top: 56px;
	}
`;

// Form
const StyledForm = styled.form`
	position: relative;
	height: 100%;
	display: flex;
	flex-flow: column;
	padding: 0;

	@media ${MEDIA_QUERIES.tabletAndUp} {
		width: 528px;
	}
`;

const FieldSet = styled.fieldset`
	height: 100%;
	width: 100%;
	overflow-y: scroll !important;
	padding-right: 8px;
	@media ${MEDIA_QUERIES.tabletAndUp} {
		padding-right: 16px;
	}
`;

const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 23px;
	width: 100%;
`;

const ItemsListHeaderWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin-top: 66px;

	@media ${MEDIA_QUERIES.tabletAndUp} {
		flex-flow: row;
		justify-content: space-between;
		align-items: baseline;
	}
`;

const ItemListHeader = styled.h4`
	${itemlistHeaderTextStyle};
	display: block;
	width: 100%;
	color: ${(p) => p.theme.COLORS.form.itemListHeader};

	@media ${MEDIA_QUERIES.tabletAndUp} {
		flex-flow: row;
		justify-content: space-between;
		align-items: baseline;
		width: auto;
	}
`;

const ItemsFieldList = styled.div`
	display: flex;
	flex-flow: column;
	gap: 24px;
	width: 100%;
`;

const FormButtonsContainer = styled.div`
	display: flex;
	height: 91px;
	align-items: center;
	justify-content: flex-end;
	gap: 8px;
	margin-top: 24px;

	padding-right: 8px;
	@media ${MEDIA_QUERIES.tabletAndUp} {
		padding-right: 16px;
	}
`;

const SaveDraftButton = styled(Button)`
	margin-left: auto;
`;
