import React, { FC, InputHTMLAttributes } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import styled, { CSSProperties } from 'styled-components';

import { Error } from '../Error';

import { COLORS } from '@/styles/constants';
import { bodyTextStyle, h4TextStyle } from '@/styles/typography';

interface FromFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	style?: CSSProperties;
	className?: string;
	label: string;
	type: string;
	defaultValue?: any;
}

export const FormField: FC<FromFieldProps> = ({
	name,
	style,
	className,
	label,
	type,
	...props
}) => {
	const { control } = useFormContext();
	const { field, fieldState } = useController({ name, control });

	return (
		<Wrapper className={className} style={style}>
			<InputHeader>
				<Label htmlFor={name} hasError={fieldState.invalid}>
					{label}
				</Label>
				{fieldState.invalid && <Error>{fieldState.error?.message}</Error>}
			</InputHeader>
			<Input id={name} {...field} {...props} type={type} hasError={fieldState.invalid} />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	${bodyTextStyle};
`;

const Label = styled.label<{ hasError: boolean }>`
	flex-flow: column;
	color: ${(p) => (p.hasError ? COLORS.warning[1] : p.theme.COLORS.form.inputLabel)};
	margin-bottom: 10px;
`;

const InputHeader = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const Input = styled.input<{ hasError: boolean }>`
	${h4TextStyle};
	height: 48px;
	padding-left: 20px;
	border-radius: 4px;
	border: solid 2px
		${(p) => (p.hasError ? COLORS.warning[1] : p.theme.COLORS.form.inputBorderColor)};
	width: 100%;
	color: ${(p) => p.theme.COLORS.form.inputValue};
	background-color: ${(p) => p.theme.COLORS.form.inputBg};
`;
