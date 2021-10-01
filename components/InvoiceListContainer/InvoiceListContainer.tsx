import { motion } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components';

import { MEDIA_QUERIES } from '@/styles/constants';

interface ListContainerProps {
	shouldAnimateList: boolean;
}

export const InvoiceListContainer: FC<ListContainerProps> = ({ children, shouldAnimateList }) => {
	return (
		<Wrapper initial={false} animate={shouldAnimateList ? 'visible' : 'hidden'} variants={list}>
			{children}
		</Wrapper>
	);
};

const list = {
	visible: {
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
	hidden: {
		transition: {
			when: 'afterChildren',
		},
	},
};

const Wrapper = styled(motion.ul)`
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
