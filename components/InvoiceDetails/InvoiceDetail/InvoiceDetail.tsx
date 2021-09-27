import React, { FC } from 'react';
import styled from 'styled-components';

import { body2TextStyle, bodyTextStyle, detailValueTextStyle } from '@/styles/typography';

interface InvoiceDetailProps {
	label: string;
	value: string;
	className?: string;
}

export const InvoiceDetail: FC<InvoiceDetailProps> = ({ label, value, children, className }) => {
	return (
		<Wrapper className={className}>
			<Label>{label}</Label>
			<Value>{value}</Value>
			{children && <ChildrenWrapper>{children}</ChildrenWrapper>}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-flow: column;
`;

const Label = styled.h4`
	${bodyTextStyle};
	color: ${(p) => p.theme.COLORS.text.body2};
`;

const Value = styled.p`
	margin-top: 12px;
	${detailValueTextStyle};
	color: ${(p) => p.theme.COLORS.text.h1};
`;

const ChildrenWrapper = styled.div`
	${body2TextStyle};
	margin-top: 8px;
	color: ${(p) => p.theme.COLORS.text.body2};
`;
