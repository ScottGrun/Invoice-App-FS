import Image from 'next/image';
import React, { forwardRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Controller, useFormContext } from 'react-hook-form';
import styled, { createGlobalStyle } from 'styled-components';

import { CustomCalendarHeader } from './CustomCalendarHeader';
import { CustomDateInput } from './CustomDateInput';

import iconChevronLeftSrc from '@/public/icons/icon-arrow-left.svg';
import iconChevronRightSrc from '@/public/icons/icon-arrow-right.svg';
import iconCalendarSrc from '@/public/icons/icon-calendar.svg';
import { bodyTextStyle, h4TextStyle } from '@/styles/typography';
interface Props {}

export const DateField = ({ label, name, style }) => {
	const [calendarOpen, setCalendarOpen] = useState(false);
	const { control } = useFormContext();

	return (
		<Wrapper>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<ReactDatePicker
						closeOnScroll={() => true}
						onChange={(e) => field.onChange(e)}
						selected={field.value}
						showPopperArrow={false}
						dateFormat="d MMM yyyy"
						calendarClassName="custom-calendar"
						dayClassName={() => 'custom-day'}
						customInput={<CustomDateInput calendarOpen={calendarOpen} label={label} />}
						renderCustomHeader={<CustomCalendarHeader />}
					/>
				)}
			/>
			<DatePickerStyles />
		</Wrapper>
	);
};

// Need this arbitrary div to prevent the date-picker from pushing content down
const Wrapper = styled.div``;

// Overide react-datepicker styles with a gobalstyle
const DatePickerStyles = createGlobalStyle`
.custom-calendar {
     ${h4TextStyle};
     background-color: ${(p) => p.theme.COLORS.white};
     padding: 22px 10px 22px 10px;
     border: none;
     border-radius: 8px;
     box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
}

.custom-day{
	color: ${(p) => p.theme.COLORS.dark[1]};
    &:hover {
         background-color: transparent;
         color: ${(p) => p.theme.COLORS.primary[1]};
    }
}

.react-datepicker__day--selected {
	background-color: ${(p) => p.theme.COLORS.primary[1]};
  color: ${(p) => p.theme.COLORS.white};
}

.react-datepicker__day--keyboard-selected {
     background-color: ${(p) => p.theme.COLORS.primary[1]};
     color: ${(p) => p.theme.COLORS.white};
}


.react-datepicker__day--outside-month{
      color: ${(p) => p.theme.COLORS.dark[1]};
      opacity: 0.08;
     }
`;
