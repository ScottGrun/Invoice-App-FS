import { yupResolver } from '@hookform/resolvers/yup';
import VisuallyHidden from '@reach/visually-hidden';
import Image from 'next/image';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { initalValues } from 'config/Form/InitalValues';
import { formSchema } from 'config/Form/ValidationSchema';

import { Error } from './Error';

import { Button } from '@/components/Button';
import { DateField } from '@/components/Form/Fields/DateField';
import { FormField } from '@/components/Form/Fields/FormField';
import { ItemField } from '@/components/Form/Fields/ItemField';
import { FormSection } from '@/components/Form/FormSection';
import iconChevronLeftSrc from '@/icons/icon-arrow-left.svg';
import { formHeaderTextStyle, h4TextStyle, itemlistHeaderTextStyle } from '@/styles/typography';
import { Invoice } from '@/types/index';

interface EditInvoiceForm {
	setDrawerClosed: Dispatch<SetStateAction<boolean>>;
	invoiceDetails: Invoice | null;
}

export const EditInvoiceForm: FC<EditInvoiceForm> = ({ setDrawerClosed, invoiceDetails }) => {
	const methods = useForm({
		defaultValues: invoiceDetails ?? initalValues,
		resolver: yupResolver(formSchema),
		mode: 'onSubmit',
	});
	const { fields, append, remove } = useFieldArray({
		control: methods.control,
		name: 'invoiceItems',
	});

	const submitFormData = (data: any) => console.log(data);

	return (
		<FormProvider {...methods}>
			<StyledForm onSubmit={methods.handleSubmit(submitFormData)}>
				<BackButton onClick={close}>
					<Image src={iconChevronLeftSrc} alt="" />
					<span>Go back</span>
					<VisuallyHidden>Go back</VisuallyHidden>
				</BackButton>
				<FormHeader>
					Edit <span>#</span>XM9141
				</FormHeader>
				<InnerWrapper>
					{/* Bill From */}
					<FormSection label="Bill From">
						<FormField type="text" label="Street Address" name="userStreetAddress" />
						<Row>
							<FormField
								style={{ minWidth: '140px', flex: 1 }}
								type="text"
								label="City"
								name="userCity"
							/>
							<FormField
								style={{ minWidth: '140px', flex: 1 }}
								type="text"
								label="Post Code"
								name="userPostCode"
							/>
							<FormField
								style={{ minWidth: '152px', flex: 1 }}
								type="text"
								label="Country"
								name="userCountry"
							/>
						</Row>
					</FormSection>
					{/* Bill To */}
					<FormSection label="Bill To">
						<FormField type="text" label="Client's Name" name="clientName" />
						<FormField type="email" label="Client's Email" name="clientEmail" />
						<FormField type="text" label="Street Address" name="clientStreetAddress" />
						<Row>
							<FormField
								style={{ minWidth: '140px', flex: 1 }}
								type="text"
								label="City"
								name="clientCity"
							/>
							<FormField
								style={{ minWidth: '140px', flex: 1 }}
								type="text"
								label="Post Code"
								name="clientPostCode"
							/>
							<FormField
								style={{ minWidth: '152px', flex: 1 }}
								type="text"
								label="Country"
								name="clientCountry"
							/>
						</Row>
					</FormSection>

					<FormSection label="Invoice Details">
						<Row>
							<DateField style={{ flex: 1 }} name="invoiceDate" label="Invoice Date" />
							<DateField style={{ flex: 1 }} name="invoiceDueDate" label="Invoice Due Date" />
						</Row>

						<FormField
							style={{ minWidth: '152px', flex: 1 }}
							type="text"
							label="Project Description"
							name="projectDescription"
						/>
						<ItemsListHeaderWrapper>
							<ItemListHeader>Item List</ItemListHeader>
							{/* @ts-expect-error: ignore wrong schema warning */}
							<Error>{methods.formState.errors.invoiceItems?.message}</Error>
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
					<Button onClick={() => setDrawerClosed(false)} type="button" variant="secondary">
						Cancel
					</Button>
					<SaveDraftButton type="submit" variant="tertiary">
						Save as Draft
					</SaveDraftButton>
					<Button type="submit" variant="primary">
						Save Changes
					</Button>
				</FormButtonsContainer>
			</StyledForm>
		</FormProvider>
	);
};

const BackButton = styled.button`
	${h4TextStyle};
	display: flex;
	align-items: baseline;
	background-color: transparent;
	margin-top: 32px;
	span {
		margin-left: 24px;
	}

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		display: none;
	}
`;

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
	display: none;
`;
