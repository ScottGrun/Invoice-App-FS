import { FC } from 'react';
import styled from 'styled-components';

import { errorMessageTextStyle } from '@/styles/typography';

export const Error: FC = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.p`
	${errorMessageTextStyle};
	color: ${(p) => p.theme.COLORS.warning[1]};
`;
