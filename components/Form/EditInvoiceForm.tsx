import { yupResolver } from '@hookform/resolvers/yup';
import React, { Dispatch, FC, SetStateAction, useContext, useEffect } from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { initalValues } from 'config/Form/InitalValues';
import { formSchema } from 'config/Form/ValidationSchema';
import { InvoicesContext } from 'context/InvoicesContext';

import { Error } from './Error';

import { Button } from '@/components/Button';
import { DateField } from '@/components/Form/Fields/DateField';
import { FormField } from '@/components/Form/Fields/FormField';
import { ItemField } from '@/components/Form/Fields/ItemField';
import { FormSection } from '@/components/Form/FormSection';
import { PossibleStatus } from '@/config/PossibleStatus';
import { formHeaderTextStyle, itemlistHeaderTextStyle } from '@/styles/typography';
import { Invoice } from '@/types/index';

interface EditInvoiceForm {
	setDrawerOpen: Dispatch<SetStateAction<boolean>>;
	invoice: Invoice | undefined;
}

export const EditInvoiceForm: FC<EditInvoiceForm> = ({ setDrawerOpen, invoice }) => {
	const { addInvoice, updateInvoice } = useContext(InvoicesContext);

	const methods = useForm({
		defaultValues: initalValues,
		resolver: yupResolver(formSchema),
		mode: 'onBlur',
	});

	const { fields, append, remove } = useFieldArray({
		control: methods.control,
		name: 'invoice_items',
	});
	// TODO: Fix price input treating cents as dollars oh also the date input is fucked good luck
	// useEffect(() => {
	// 	methods.reset({
	// 		...invoice,
	// 		invoice_items: invoice?.invoice_items,
	// 	});
	// }, [invoice, methods]);

	const submitFormData = (e) => {
		e.preventDefault();
		console.log('hi submitted');
	};

	const handleAddInvoice = () => {
		console.log(methods.getValues());
		addInvoice(methods.getValues());
	};

	const handleUpdateInvoice = () => {
		if (methods.formState.isValid) {
			updateInvoice(methods.getValues());
		}
	};

	return (
		<FormProvider {...methods}>
			<StyledForm onSubmit={(e) => e.preventDefault()}>
				{invoice && (
					<FormHeader>
						Edit <span>#</span>
						{invoice.id}
					</FormHeader>
				)}
				<InnerWrapper>
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
								<ItemField key={item.id} idx={itemIndex} remove={remove} />
							))}
							<AddItemButton
								variant="secondary"
								type="button"
								onClick={() => append({ name: '', quantity: 0, price: 0 })}
							>
								+ Add New Item
							</AddItemButton>
						</ItemsFieldList>
					</FormSection>
				</InnerWrapper>
				<FormButtonsContainer>
					<Button onClick={() => setDrawerOpen(false)} type="button" variant="secondary">
						Cancel
					</Button>
					<SaveDraftButton type="submit" variant="tertiary" onClick={() => handleAddInvoice()}>
						Save as Draft
					</SaveDraftButton>
					<Button type="submit" variant="primary" onClick={() => handleUpdateInvoice()}>
						Save Changes
					</Button>
				</FormButtonsContainer>
			</StyledForm>
		</FormProvider>
	);
};

const FormHeader = styled.h2`
	${formHeaderTextStyle};
	padding-top: 24px;
	span {
		color: ${(p) => p.theme.COLORS.grey[1]};
	}

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
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

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		width: 528px;
	}
`;

const InnerWrapper = styled.div`
	height: 100%;
	width: 100%;
	overflow: scroll !important;
	padding-right: 8px;
	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
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

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		flex-flow: row;
		justify-content: space-between;
		align-items: baseline;
	}
`;

const ItemListHeader = styled.h4`
	${itemlistHeaderTextStyle};
	display: block;
	width: 100%;
	color: ${(p) => p.theme.COLORS.grey[7]};

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
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
	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		padding-right: 16px;
	}
`;

const AddItemButton = styled(Button)``;

const SaveDraftButton = styled(Button)`
	/* display: none; */
`;
