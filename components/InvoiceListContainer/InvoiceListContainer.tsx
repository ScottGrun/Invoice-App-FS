import { FC } from 'react';
import styled from 'styled-components';

import { EmptyState } from '../EmptyState/EmptyState';

export const InvoiceListContainer: FC = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.ul`
	display: flex;
	flex-flow: column;
	gap: 16px;

	margin-top: 32px;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		margin-top: 56px;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		margin-top: 65parx;
	}
`;
