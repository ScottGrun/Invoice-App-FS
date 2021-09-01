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
				<StyledEmptyState
					heading="There is nothing here"
					errorMessage="Create a new invoice by clicking the
					New Invoice button and get started"
				/>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-flow: column;
`;

const StyledEmptyState = styled(EmptyState)`
	margin-top: 102px;

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		margin-top: 210px;
	}

	@media ${(p) => p.theme.QUERIES.laptopAndUp} {
		margin-top: 141x;
	}
`;
