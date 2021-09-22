import React, { FC, useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { Controller, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { bodyTextStyle, h4TextStyle } from '@/styles/typography';

interface PriceFieldProps {
	formPriceValue: number;
	name: string;
}

export const PriceField: FC<PriceFieldProps> = ({ formPriceValue, name }) => {
	const { control } = useFormContext();
	const [price, setPrice] = useState<string | undefined>('0');

	// Oh the joys of working with currency...
	// So essentailly this input is setting the form state value as a float in cents, while
	// managing the local state of price input as a string in dollars with decimals I have no idea why
	// the react-currency input wont accpet on change values as float's but it doesn't so alas here we are..

	useEffect(() => {
		// On mount convert the the saved value from value from cents as a INT to to dollars as string
		setPrice(parseFloat((formPriceValue / 100).toFixed(2)).toString());
	}, []);

	return (
		<Wrapper>
			<span>Price</span>
			<Controller
				control={control}
				name={name}
				render={({ field }) => (
					<Price
						allowNegativeValue={false}
						decimalScale={2}
						intlConfig={{ locale: 'en-US', currency: 'USD' }}
						onValueChange={(e) => {
							if (e === undefined) {
								// If e is undefined we still need to pass it to the currency input as a value
								// this is what lets users type in numbers as decimals, but we make sure to set the form value to 0 in case they submit
								// with no price
								field.onChange(0);
								setPrice(e);
							} else {
								field.onChange(Math.round(parseFloat(e) * 100));
								setPrice(e);
							}
						}}
						defaultValue={field.value / 100}
						value={price}
					/>
				)}
			/>
		</Wrapper>
	);
};

// Price Field
const Wrapper = styled.div`
	${bodyTextStyle};
	display: flex;
	flex-flow: column;
	color: ${(p) => p.theme.COLORS.primary[3]};
	max-width: 100px;
	span {
		margin-bottom: 10px;
	}
`;

const Price = styled(CurrencyInput)`
	${h4TextStyle};
	text-align: center;
	padding: 0 10px;
	margin-right: 16px;
	height: 48px;
	border-radius: 4px;
	border: solid 2px ${(p) => p.theme.COLORS.grey[2]};
`;
