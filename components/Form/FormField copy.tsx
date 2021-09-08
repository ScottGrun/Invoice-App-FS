import React from 'react';
import { useFormContext, useFormState } from 'react-hook-form';
import styled from 'styled-components';

import { Error } from './Error';

import { bodyTextStyle, h4TextStyle } from '@/styles/typography';

export const FormField = ({ className, style, label, name, ...inputProps }) => {
	const { register, control } = useFormContext(); // retrieve all hook methods
	const { errors } = useFormState({ control });

	return (
		<Label className={className} style={style} hasError={errors[name] !== undefined}>
			<InputHeader>
				<span>{label}</span>
				{errors[name] && <Error>{errors[name].message}</Error>}
			</InputHeader>
			<Input {...register(name)} {...inputProps} hasError={errors[name] !== undefined} />
		</Label>
	);
};

const Label = styled.label<{ hasError: boolean }>`
	${bodyTextStyle};
	display: flex;
	flex-flow: column;
	color: ${(p) => (p.hasError ? p.theme.COLORS.warning[1] : p.theme.COLORS.primary[3])};

	span {
		margin-bottom: 10px;
	}
`;

const InputHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Input = styled.input<{ hasError: boolean }>`
	${h4TextStyle};
	height: 48px;
	padding-left: 20px;
	border-radius: 4px;
	border: solid 2px ${(p) => (p.hasError ? p.theme.COLORS.warning[1] : p.theme.COLORS.grey[2])};
	width: 100%;
`;
