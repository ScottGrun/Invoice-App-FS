import { FC } from 'react';
import styled from 'styled-components';

import { MEDIA_QUERIES } from '@/styles/constants';

export const InvoiceListContainer: FC = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.ul`
	display: flex;
	flex-flow: column;
	gap: 16px;

	margin-top: 32px;

	@media ${MEDIA_QUERIES.tabletAndUp} {
		margin-top: 56px;
	}

	@media ${MEDIA_QUERIES.laptopAndUp} {
		margin-top: 65parx;
	}
`;
