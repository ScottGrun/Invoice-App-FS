import React from 'react';
import styled from 'styled-components';

import { errorMessageTextStyle } from '@/styles/typography';

interface Props {
	children: React.ReactNode;
}

export const Error = ({ children }: Props) => {
	return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.p`
	${errorMessageTextStyle};
	color: ${(p) => p.theme.COLORS.warning[1]};
`;
