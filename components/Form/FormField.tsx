import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { Error } from './Error';

import { bodyTextStyle, h4TextStyle } from '@/styles/typography';

export const FormField = ({ name, style, className, label, type }) => {
	const { control } = useFormContext();
	const { field, fieldState } = useController({ name, control });

	return (
		<Label className={className} style={style} hasError={fieldState.invalid}>
			<InputHeader>
				<span>{label}</span>
				<Error>{fieldState.error?.message}</Error>
			</InputHeader>
			<Input {...field} type={type} hasError={fieldState.invalid} />
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
