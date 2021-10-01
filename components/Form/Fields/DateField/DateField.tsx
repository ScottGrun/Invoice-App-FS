import { FC, useEffect, useState } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { Controller, useFormContext } from 'react-hook-form';
import styled, { createGlobalStyle, CSSProperties } from 'styled-components';

import { CalendarHeader } from './CalendarHeader';
import { CalendarInput } from './CalendarInput';

import { COLORS } from '@/styles/constants';
import { h4TextStyle } from '@/styles/typography';

interface DateFieldProps extends Omit<ReactDatePickerProps, 'onChange'> {
	style?: CSSProperties;
	label: string;
	name: string;
}

export const DateField: FC<DateFieldProps> = ({ style, label, name }) => {
	const { control, getValues } = useFormContext();
	const [date, setDate] = useState<Date | null>(new Date());
	const storedDate = getValues(name);

	// On mount if there is stored date convert it to a date object
	// because react-datepicker can only work with date objects
	useEffect(() => {
		if (storedDate) {
			setDate(new Date(storedDate));
		}
	}, []);

	return (
		<Wrapper style={style}>
			<Controller
				name={name}
				control={control}
				render={({ field, fieldState }) => (
					<ReactDatePicker
						closeOnScroll={() => true}
						onChange={(e) => {
							setDate(e as Date);
							field.onChange(e);
						}}
						selected={date}
						showPopperArrow={false}
						dateFormat="MMM dd yyyy"
						calendarClassName="custom-calendar"
						dayClassName={() => 'custom-day'}
						customInput={
							<CalendarInput
								name={field.name}
								hasError={fieldState.invalid}
								error={fieldState.error?.message}
								value={field.value}
								label={label}
							/>
						}
						renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
							<CalendarHeader
								monthDate={monthDate}
								decreaseMonth={decreaseMonth}
								increaseMonth={increaseMonth}
							/>
						)}
					/>
				)}
			/>
			<DatePickerStyles />
		</Wrapper>
	);
};

// Need this arbitrary div to prevent the date-picker from pushing content below it down a fex px
const Wrapper = styled.div``;

// Overide react-datepicker styles with a gobalstyle this a bit hacky but only workaround I could find that was useable
const DatePickerStyles = createGlobalStyle`
.custom-calendar {
     ${h4TextStyle};
     background-color: ${COLORS.white};
     padding: 22px 10px 22px 10px;
     border: none;
     border-radius: 8px;
     box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
		background-color: ${(p) => p.theme.COLORS.calendarField.bg};
}

.custom-day{

	color: ${(p) => p.theme.COLORS.calendarField.color};
    &:hover {
         background-color: transparent;
         color: ${COLORS.primary[1]};
    }
}

.react-datepicker__day--selected {
	background-color: ${COLORS.primary[1]};
	color: ${(p) => p.theme.COLORS.calendarField.selectedColor};
}

.react-datepicker__day--keyboard-selected {
     background-color: ${COLORS.primary[1]};
		 color: ${(p) => p.theme.COLORS.calendarField.selectedColor};
}


.react-datepicker__day--outside-month{
			color: ${(p) => p.theme.COLORS.calendarField.daysOutOfMonth};
      
     }

		 .react-datepicker__day-names{
     display: none;
}

 .react-datepicker__header{
     background-color: transparent;
     padding: 0;
     border: none;
}
`;
