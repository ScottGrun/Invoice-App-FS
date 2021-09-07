import React from 'react';
import styled from 'styled-components';

import { bodyTextStyle, h4TextStyle } from '@/styles/typography';

export const FormField = ({ className, style, register, label, name, ...inputProps }) => {
	return (
		<Label className={className} style={style}>
			<span>{label}</span>
			<Input {...register(name)} {...inputProps} />
		</Label>
	);
};

const Label = styled.label`
	${bodyTextStyle};
	display: flex;
	flex-flow: column;
	color: ${(p) => p.theme.COLORS.primary[3]};

	span {
		margin-bottom: 10px;
	}
`;

const Input = styled.input`
	${h4TextStyle};
	height: 48px;
	padding: 0 20px;
	border-radius: 4px;
	border: solid 2px ${(p) => p.theme.COLORS.grey[2]};
	width: 100%;
`;
