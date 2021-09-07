import Dialog, { DialogOverlay, DialogContent } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';
import Image from 'next/image';
import React from 'react';
import { FormProvider, SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
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
				<InnerWrapper>
					<BackButton onClick={close}>
						<Image src={iconChevronLeftSrc} alt="" />
						<span>Go back</span>
						<VisuallyHidden>Go back</VisuallyHidden>
					</BackButton>
					<FormHeader>
						Edit <span>#</span>XM9141
					</FormHeader>
					<StyledForm
						onSubmit={handleSubmit((data) => {
							console.log(data);
						})}
					>
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
						{/* <Shadow />
						<FormButtonContainer>
							<Button variant="secondary">Cancel</Button>
							<Button variant="primary">Save Changes</Button>
						</FormButtonContainer> */}
					</StyledForm>
				</InnerWrapper>
			</StyledDialogContent>
		</DialogOverlay>
	);
};

const StyledDialogContent = styled(DialogContent)`
	position: fixed;
	top: 72px;
	left: 0;

	margin: 0;
	padding: 0 24px;
	padding-bottom: 72px;
	height: 100%;

	width: 100%;
	border: solid 2px red;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		top: 80px;
		padding: 0 56px;
		padding-bottom: 80px;
		max-width: 616px;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		padding-left: 159px;
		padding-bottom: 0px;
		max-width: 719px;
		top: 0;
	}
`;

const InnerWrapper = styled.div`
	width: 100%;
	/* width: 504px; */
	border: dashed 2px green;
`;

const StyledForm = styled.form`
	height: 100vh;
	overflow-y: scroll;
	border: solid 2px blue;
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
	margin-top: 24px;
	span {
		color: ${(p) => p.theme.COLORS.grey[1]};
	}

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		margin-top: 56px;
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
`;

const AddItemButton = styled(Button)``;

const FormButtonContainer = styled.div`
	display: flex;
	align-items: center;

	width: 100%;
	height: 91px;
	justify-content: flex-end;
	gap: 8px;
	background-color: white;
`;

const Shadow = styled.div`
	width: 100vw;
	left: 0;
	height: 64px;
	margin-left: -24px;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.1) 100%);

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		display: none;
	}
`;
