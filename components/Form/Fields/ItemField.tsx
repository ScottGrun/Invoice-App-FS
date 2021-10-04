import React, { FC, useEffect, useState } from 'react';
import { formatValue } from 'react-currency-input-field';
import { useFormContext, useWatch } from 'react-hook-form';
import styled from 'styled-components';

import { FormField } from './FormField';
import { PriceField } from './PriceField';

import { COLORS, MEDIA_QUERIES } from '@/styles/constants';
import { bodyTextStyle, h4TextStyle } from '@/styles/typography';

interface ItemFieldProps {
	idx: number;
	remove: (index?: number | number[]) => void;
}

export const ItemField: FC<ItemFieldProps> = ({ idx, remove }) => {
	const { control, getValues } = useFormContext();
	const [total, setTotal] = useState('0');

	const watchedQuantityAndPrice = useWatch({
		control,
		name: [`invoice_items[${idx}].quantity`, `invoice_items[${idx}].price`],
	});

	const invoiceItem = getValues('invoice_items')[idx];

	useEffect(() => {
		if (isNaN(watchedQuantityAndPrice[0]) || isNaN(watchedQuantityAndPrice[1])) {
			return setTotal('0');
		}

		const formattedTotal = formatValue({
			value: ((watchedQuantityAndPrice[0] * watchedQuantityAndPrice[1]) / 100)
				.toFixed(2)
				.toString(),
			groupSeparator: ',',
			decimalScale: 2,
			decimalSeparator: '.',
			prefix: '$',
		});

		setTotal(formattedTotal);
	}, [watchedQuantityAndPrice]);

	return (
		<Wrapper>
			<ItemName label="Item Name" name={`invoice_items[${idx}].name`} type="text" />
			<Quantity label="Qty" name={`invoice_items[${idx}].quantity`} type="number" min={0} />
			<PriceField formPriceValue={invoiceItem?.price ?? 0} name={`invoice_items[${idx}].price`} />
			<TotalWrapper>
				<span>Total</span>
				<TotalPrice>{total}</TotalPrice>
			</TotalWrapper>
			<DeleteButton type="button" onClick={() => remove(idx)}>
				<svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
						fillRule="nonzero"
					/>
				</svg>
			</DeleteButton>
		</Wrapper>
	);
};

const Wrapper = styled.fieldset`
	display: flex;
	flex-flow: row;
	flex-wrap: wrap;
	gap: 16px;
	width: 100%;
	@media ${MEDIA_QUERIES.tabletAndUp} {
		gap: revert;
		flex-wrap: revert;
	}
`;

// Item Name Field
const ItemName = styled(FormField)`
	min-width: 309px;
	width: 100%;
	@media ${MEDIA_QUERIES.tabletAndUp} {
		min-width: revert;
		width: 214px;
		margin-right: 16px;
	}
`;

// Quanity Field
const Quantity = styled(FormField)`
	max-width: 64px;
	span {
		text-align: center;
	}

	input {
		padding: 0;
		padding-left: 20px;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}

	@media ${MEDIA_QUERIES.tabletAndUp} {
		margin-right: 16px;
		width: 46px;

		div {
			justify-content: center;
		}

		input {
			padding: 0;
			text-align: center;
		}
	}
`;

// Total Display (styled to look like field)
const TotalWrapper = styled.div`
	${bodyTextStyle};
	display: flex;
	flex-flow: column;
	color: ${(p) => p.theme.COLORS.itemField.total};
	max-width: 60px;

	span {
		margin-bottom: 10px;
	}
`;

const TotalPrice = styled.p`
	${h4TextStyle};
	display: flex;
	align-items: center;
	height: 48px;
	width: 90px;
	overflow: auto;
`;

// Delete Item button
const DeleteButton = styled.button`
	height: 48px;
	align-self: flex-end;
	margin-left: auto;
	background-color: transparent;
	svg {
		fill: ${(p) => p.theme.COLORS.itemField.deleteBtn};
	}

	&:hover {
		cursor: pointer;

		svg {
			fill: ${COLORS.warning[1]};
		}
	}
`;
