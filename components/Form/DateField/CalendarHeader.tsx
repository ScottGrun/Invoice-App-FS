import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import iconChevronLeftSrc from '@/public/icons/icon-arrow-left.svg';
import iconChevronRightSrc from '@/public/icons/icon-arrow-right.svg';
import { h4TextStyle } from '@/styles/typography';

export const CalendarHeader = ({ monthDate, decreaseMonth, increaseMonth }) => {
	return (
		<Header>
			<HeaderButton type="button" aria-label="Previous Month" onClick={decreaseMonth}>
				<Image src={iconChevronLeftSrc} alt="" />
			</HeaderButton>
			<Month className="react-datepicker__current-month">
				{monthDate.toLocaleString('en-US', {
					month: 'short',
					year: 'numeric',
				})}
			</Month>
			<HeaderButton type="button" aria-label="Next Month" onClick={increaseMonth}>
				<Image src={iconChevronRightSrc} alt="" />
			</HeaderButton>
		</Header>
	);
};

const Header = styled.div`
	background-color: white;
	padding: 0 10px;
	margin-bottom: 22px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;

const Month = styled.span`
	${h4TextStyle};
	background-color: white;
`;

const HeaderButton = styled.button`
	background-color: white;

	&:hover {
		cursor: pointer;
	}
`;
