import { FC } from 'react';
import styled from 'styled-components';

import { COLORS } from '@/styles/constants';
import { errorMessageTextStyle } from '@/styles/typography';

export const Error: FC = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.p`
	${errorMessageTextStyle};
	color: ${COLORS.warning[1]};
`;
