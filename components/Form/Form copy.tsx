import { DialogOverlay, DialogContent } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';
import { FieldArray, Formik } from 'formik';
import Image from 'next/image';
import React from 'react';
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

export const Form = (props) => {
	const [showDialog, setShowDialog] = React.useState(true);
	const close = () => setShowDialog(false);
	return (
		<DialogOverlay isOpen={showDialog} onDismiss={close}>
			<Wrapper isOpen={showDialog} onDismiss={close}>
				<InnerWrapper>
					<BackButton onClick={close}>
						<Image src={iconChevronLeftSrc} alt="" />
						<span>Go back</span>
						<VisuallyHidden>Go back</VisuallyHidden>
					</BackButton>
					<FormHeader>
						Edit <span>#</span>XM9141
					</FormHeader>
					<Formik
						initialValues={{
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
						}}
						validationSchema={Yup.object({
							userStreetAddress: Yup.string()
								.max(15, 'Must be 15 characters or less')
								.required('Required'),
						})}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2));
								setSubmitting(false);
							}, 400);
						}}
					>
						{(formik) => (
							<form onSubmit={formik.handleSubmit}>
								{/* Bill From */}
								<FormSection label="Bill From">
									<FormField name="userStreetAddress" label="Street Address" type="text" />
									<Row>
										<FormField name="userCity" label="City" type="text" />
										<FormField name="userPostCode" label="Post Code" type="text" />
									</Row>
									<FormField name="userCountry" label="Country" type="text" />
								</FormSection>

								{/* Bill To */}
								<FormSection label="Bill To">
									<FormField name="clientName" label="Client's Name" type="text" />
									<FormField name="clientEmail" label="Client's Email" type="text" />
									<FormField name="clientStreetAddress" label="Street Address" type="text" />
									<Row>
										<FormField name="clientCity" label="City" type="text" />
										<FormField name="clientPostCode" label="Post Code" type="text" />
									</Row>
									<FormField name="clientCountry" label="Country" type="text" />

									{/* Item Details */}
									<FormSection label="Payment Details">
										<DateField name="invoiceDate" label="Invoice Date" />
										<DateField name="invoiceDueDate" label="Invoice Due Date" />
									</FormSection>
									<FormField name="projectDescription" label="Projet Description" type="text" />
								</FormSection>
								<ItemsListHeader>Item List </ItemsListHeader>

								<FieldArray
									name="items"
									render={(arrayHelpers) => (
										<ItemsFieldList>
											{formik.values.items.map((item, index) => (
												<ItemField key={index} item={item} formik={formik} idx={index} />
											))}

											<AddItemButton
												variant="secondary"
												type="button"
												onClick={() => arrayHelpers.push({ name: '', quantity: 0, price: 0 })}
											>
												+ Add New Item
											</AddItemButton>
										</ItemsFieldList>
									)}
								/>

								<FormField name="clientCountry" label="Country" type="text" />

								<button type="submit">Submit</button>
							</form>
						)}
					</Formik>
				</InnerWrapper>
			</Wrapper>
		</DialogOverlay>
	);
};

const Wrapper = styled(DialogContent)`
	position: fixed;
	top: 0px;
	margin-top: 72px;
	padding: 0 24px;
	width: 100%;
	height: 100%;
	overflow: scroll;
`;

const InnerWrapper = styled.div`
	border: solid 1px red;
	height: 100%;
	overflow: scroll;
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
`;

const FormHeader = styled.h2`
	${formHeaderTextStyle};
	margin-top: 24px;
	span {
		color: ${(p) => p.theme.COLORS.grey[1]};
	}
`;

const Row = styled.div`
	display: flex;
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
