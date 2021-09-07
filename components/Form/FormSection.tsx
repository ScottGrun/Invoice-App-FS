import React from 'react';
import styled from 'styled-components';

import { h4TextStyle } from '@/styles/typography';

interface Props {
	children: React.ReactNode;
	label: string;
}

export const FormSection = ({ children, label }: Props) => {
	return (
		<Wrapper>
			<Label>{label}</Label>
			{children}
		</Wrapper>
	);
};

const Wrapper = styled.fieldset`
	display: flex;
	gap: 24px;
	flex-flow: column;
	margin-top: 24px;
`;

const Label = styled.h3`
	${h4TextStyle};
	color: ${(p) => p.theme.COLORS.primary[1]};
`;
