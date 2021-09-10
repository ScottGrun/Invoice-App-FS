import { yupResolver } from '@hookform/resolvers/yup';
import DialogContent, { DialogOverlay } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';
import Image from 'next/image';
import React, { useState } from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import styled from 'styled-components';
import '@reach/dialog/styles.css';
import * as yup from 'yup';

import { Button } from '../Button/Button';

import { DateField } from './DateField/DateField';
import { FormField } from './FormField';
import { FormSection } from './FormSection';
import { ItemField } from './ItemField';

import iconChevronLeftSrc from '@/public/icons/icon-arrow-left.svg';
import { formHeaderTextStyle, h4TextStyle, itemlistHeaderTextStyle } from '@/styles/typography';

const formSchema = yup.object().shape({
	userStreetAddress: yup.string().required('Required'),
	userCity: yup.string().required('Required'),
	userPostCode: yup.string().required('Required'),
	userCountry: yup.string().required('Required'),
	clientName: yup.string().required('Required'),
	clientEmail: yup.string().email('Must be a valid email').required('Required'),
	clientStreetAddress: yup.string().required('Required'),
	clientCity: yup.string().required('Required'),
	clientPostCode: yup.string().required('Required'),
	clientCountry: yup.string().required('Required'),
	invoiceDate: yup.date().required('Required'),
	invoiceDueDate: yup.date().required('Required'),
	items: yup
		.array()
		.of(
			yup.object().shape({
				name: yup.string().required('A name is required.'),
				quantity: yup.number().required('A number of items is required.'),
				price: yup.number(),
			})
		)
		.required('At least 1 item is required'),
});

const initalValues = {
	userStreetAddress: '',
	userCity: '',
	userPostCode: '',
	userCountry: '',
	clientName: '',
	clientEmail: '',
	clientStreetAddress: '',
	clientCity: '',
	clientPostCode: '',
	clientCountry: '',
	invoiceDate: new Date(),
	invoiceDueDate: new Date(),
	items: [
		{
			name: 'Banner Design',
			quantity: 1,
			price: 156.0,
			total: 156.0,
		},
		{
			name: 'Email Design',
			quantity: 2,
			price: 200.0,
			total: 400.0,
		},
	],
};

export const Form = () => {
	const [showDialog, setShowDialog] = useState(true);
	const methods = useForm({
		defaultValues: initalValues,
		resolver: yupResolver(formSchema),
		mode: 'onSubmit',
	});
	const { fields, append, remove } = useFieldArray({
		control: methods.control,
		name: 'items',
	});

	// Functions
	const close = () => setShowDialog(false);
	const submitFormData = (data) => console.log(data);

	return (
		<DialogOverlay isOpen={showDialog} onDismiss={close}>
			<StyledDialogContent isOpen={showDialog} onDismiss={close} aria-label="Invoice Editor Modal">
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
								<ItemsListHeader>Item List</ItemsListHeader>
								<ItemsFieldList>
									{fields.map((item, itemIndex) => (
										<ItemField key={item.id} idx={itemIndex} total={item.total} remove={remove} />
									))}
									<AddItemButton
										variant="secondary"
										type="button"
										onClick={() => append({ name: '', quantity: 0, price: 0, total: 0 })}
									>
										+ Add New Item
									</AddItemButton>
								</ItemsFieldList>
							</FormSection>
						</InnerWrapper>
						<FormButtonsContainer>
							<Button type="button" variant="secondary">
								Cancel
							</Button>
							<SaveDraftButton variant="tertiary">Save as Draft</SaveDraftButton>
							<Button type="submit" variant="primary">
								Save Changes
							</Button>
						</FormButtonsContainer>
					</StyledForm>
				</FormProvider>
			</StyledDialogContent>
		</DialogOverlay>
	);
};

const StyledDialogContent = styled(DialogContent)`
	margin: 0;
	padding: 0;
	padding-left: 24px;
	padding-top: 72px;
	width: 100%;
	height: 100%;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		width: 616px;
		padding-left: 56px;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		width: 719px;
		padding-left: 159px;
		padding-top: 0px;
	}
`;

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
const StyledForm = styled.form<{ isOpen: boolean; onDismiss: boolean }>`
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

const ItemsListHeader = styled.h4`
	${itemlistHeaderTextStyle};
	color: ${(p) => p.theme.COLORS.grey[7]};
	margin-top: 66px;
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
