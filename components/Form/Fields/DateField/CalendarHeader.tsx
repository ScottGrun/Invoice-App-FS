import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

import iconChevronLeftSrc from '@/icons/icon-arrow-left.svg';
import iconChevronRightSrc from '@/icons/icon-arrow-right.svg';
import { h4TextStyle } from '@/styles/typography';

interface CalendarHeaderProps {
	monthDate: Date;
	increaseMonth: () => void;
	decreaseMonth: () => void;
}

export const CalendarHeader: FC<CalendarHeaderProps> = ({
	monthDate,
	decreaseMonth,
	increaseMonth,
}) => {
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
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	padding: 0 10px;
	margin-bottom: 22px;
	width: 100%;
	background-color: ${(p) => p.theme.COLORS.calendarField.bg};
`;

const Month = styled.span`
	${h4TextStyle};
	background-color: ${(p) => p.theme.COLORS.calendarField.bg};
	color: ${(p) => p.theme.COLORS.calendarField.color};
`;

const HeaderButton = styled.button`
	background-color: ${(p) => p.theme.COLORS.calendarField.bg};

	&:hover {
		cursor: pointer;
	}
`;
