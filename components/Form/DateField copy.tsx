import Image from 'next/image';
import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Controller, useFormContext } from 'react-hook-form';
import styled, { createGlobalStyle } from 'styled-components';

import iconChevronLeftSrc from '@/public/icons/icon-arrow-left.svg';
import iconChevronRightSrc from '@/public/icons/icon-arrow-right.svg';
import iconCalendarSrc from '@/public/icons/icon-calendar.svg';
import { bodyTextStyle, h4TextStyle } from '@/styles/typography';

export const DateField = ({ label, name, style }) => {
	const [calendarOpen, setCalendarOpen] = useState(false);
	const { control } = useFormContext();

	return (
		<>
			<Controller
				style={style}
				control={control}
				name={name}
				render={({ field }) => (
					<DatePicker
						closeOnScroll={() => true}
						onChange={(e) => field.onChange(e)}
						selected={field.value}
						className="red-border"
						showPopperArrow={false}
						dateFormat="d MMM yyyy"
						calendarClassName="calender-wrapper"
						dayClassName={() => 'custom-day'}
						customInput={
							<CustomDateInput type="button" calendarOpen={calendarOpen} label={label} />
						}
						onCalendarOpen={() => setCalendarOpen(true)}
						onCalendarClose={() => setCalendarOpen(false)}
						renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
							<Header>
								<HeaderButton aria-label="Previous Month" onClick={decreaseMonth}>
									<Image src={iconChevronLeftSrc} alt="" />
								</HeaderButton>
								<Month className="react-datepicker__current-month">
									{monthDate.toLocaleString('en-US', {
										month: 'short',
										year: 'numeric',
									})}
								</Month>
								<HeaderButton aria-label="Next Month" onClick={increaseMonth}>
									<Image src={iconChevronRightSrc} alt="" />
								</HeaderButton>
							</Header>
						)}
					/>
				)}
			/>

			<DatePickerStyles calendarOpen={calendarOpen} />
		</>
	);
};

// eslint-disable-next-line react/display-name
const CustomDateInput = forwardRef(({ value, onClick, label, calendarOpen }, ref) => (
	<CustomInputWrapper>
		<span>{label}</span>
		<CustomInput type="button" calendarOpen={calendarOpen} onClick={onClick} ref={ref}>
			{value}
			<Image src={iconCalendarSrc} alt="" />
		</CustomInput>
	</CustomInputWrapper>
));

const CustomInputWrapper = styled.div`
	display: flex;
	flex-flow: column;
	span {
		${bodyTextStyle};
		color: ${(p) => p.theme.COLORS.primary[3]};
		margin-bottom: 10px;
	}
`;

const CustomInput = styled.button<{ calendarOpen: boolean }>`
	${h4TextStyle};
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 48px;
	width: 100%;
	padding: 0 20px;
	border-radius: 4px;
	background-color: ${(p) => p.theme.COLORS.white};
	border: solid 2px ${(p) => (p.calendarOpen ? p.theme.COLORS.primary[1] : p.theme.COLORS.grey[2])};

	&:hover {
		cursor: pointer;
		border: solid 2px ${(p) => p.theme.COLORS.primary[1]};
	}
`;

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

const DatePickerStyles = createGlobalStyle`

#custom-btn{
}
 .custom-day{
	 color: ${(p) => p.theme.COLORS.dark[1]};
    &:hover {
         background-color: transparent;
         color: ${(p) => p.theme.COLORS.primary[1]};
    }
}
 .react-datepicker__day-names{
     display: none;
}
 .react-datepicker__header{
     background-color: white;
     padding: 0;
     border: none;
}
 .react-datepicker__day--selected{
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
 .calender-wrapper {
     ${h4TextStyle};
     background-color: white;
     padding: 22px 10px 22px 10px;
     border: none;
     border-radius: 8px;
     box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
}
 .react-datepicker__day--keyboard-selected {
      background-color: ${(p) => p.theme.COLORS.primary[1]};
      color: ${(p) => p.theme.COLORS.white};
    }

  .react-datepicker__day--outside-month{
      color: ${(p) => p.theme.COLORS.dark[1]};
      opacity: 0.08;
     }
      
    .calender-wrapper {
      ${h4TextStyle};
      background-color: white;
      padding: 22px 10px 22px 10px;
      border: none;
      border-radius: 8px;

      box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
    }
    .react-datepicker__tab-loop{
		
			background-color: red;
		}
`;
