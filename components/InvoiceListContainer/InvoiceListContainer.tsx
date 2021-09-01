import styled from 'styled-components';

import { EmptyState } from '../EmptyState/EmptyState';

interface Props {
	children: React.ReactNode;
}

export const InvoiceListContainer = ({ children }: Props) => {
	return (
		<Wrapper>
			{children ? (
				children
			) : (
				<li>
					<StyledEmptyState
						heading="There is nothing here"
						errorMessage="Create a new invoice by clicking the
					New Invoice button and get started"
					/>
				</li>
			)}
		</Wrapper>
	);
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

const StyledEmptyState = styled(EmptyState)`
	margin-top: 71px;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		margin-top: 154px;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		margin-top: 76px;
	}
`;
