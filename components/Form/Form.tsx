import { DialogOverlay, DialogContent } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';
import Image from 'next/image';
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import styled from 'styled-components';
import '@reach/dialog/styles.css';
import * as Yup from 'yup';

import { Button } from '../Button/Button';

import { DateField } from './DateField';
import { FormField } from './FormField';
import { FormSection } from './FormSection';
import { ItemField } from './ItemField';

import iconChevronLeftSrc from '@/public/icons/icon-arrow-left.svg';
import { formHeaderTextStyle, h4TextStyle, itemlistHeaderTextStyle } from '@/styles/typography';

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

export const Form = (props) => {
	const close = () => setShowDialog(false);
	const [showDialog, setShowDialog] = React.useState(true);
	const { register, handleSubmit, control } = useForm({
		defaultValues: initalValues,
	});
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'items',
	});

	return (
		<DialogOverlay isOpen={showDialog} onDismiss={close}>
			<StyledDialogContent isOpen={showDialog} onDismiss={close}>
				<StyledForm>
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
							<FormField
								type="text"
								label="Street Address"
								name="userStreetAddress"
								register={register}
							/>
							<Row>
								<FormField
									style={{ minWidth: '140px', flex: 1 }}
									type="text"
									label="City"
									name="userCity"
									register={register}
								/>
								<FormField
									style={{ minWidth: '140px', flex: 1 }}
									type="text"
									label="Post Code"
									name="userPostCode"
									register={register}
								/>
								<FormField
									style={{ minWidth: '152px', flex: 1 }}
									type="text"
									label="Country"
									name="userCountry"
									register={register}
								/>
							</Row>
						</FormSection>
						{/* Bill To */}
						<FormSection label="Bill To">
							<FormField type="text" label="Client's Name" name="clientName" register={register} />
							<FormField
								type="email"
								label="Client's Email"
								name="clientEmail"
								register={register}
							/>
							<FormField
								type="text"
								label="Street Address"
								name="clienttreetAddress"
								register={register}
							/>
							<Row>
								<FormField
									style={{ minWidth: '140px', flex: 1 }}
									type="text"
									label="City"
									name="clientCity"
									register={register}
								/>
								<FormField
									style={{ minWidth: '140px', flex: 1 }}
									type="text"
									label="Post Code"
									name="clientPostCode"
									register={register}
								/>
								<FormField
									style={{ minWidth: '152px', flex: 1 }}
									type="text"
									label="Country"
									name="clientCountry"
									register={register}
								/>
							</Row>

							{/* <DateField name="invoiceDate" label="Invoice Date" control={control} />
							<DateField name="invoiceDueDate" label="Invoice Due Date" control={control} /> */}
							<FormField
								type="text"
								label="Project Description"
								name="projectDescription"
								register={register}
							/>
						</FormSection>
						<ItemsListHeader>Item List</ItemsListHeader>
						<ItemsFieldList>
							{fields.map((item, itemIndex) => (
								<ItemField
									key={item.id}
									idx={itemIndex}
									register={register}
									control={control}
									total={item.total}
									remove={remove}
								/>
							))}
							<AddItemButton
								variant="secondary"
								onClick={() => append({ name: '', quantity: 0, price: 0, total: 0 })}
							>
								+ Add New Item
							</AddItemButton>
						</ItemsFieldList>
					</InnerWrapper>
					<FormButtonsContainer>
						<Button variant="secondary">Cancel</Button>
						<SaveDraftButton variant="tertiary">Save as Draft</SaveDraftButton>
						<Button variant="primary">Save Changes</Button>
					</FormButtonsContainer>
				</StyledForm>
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
