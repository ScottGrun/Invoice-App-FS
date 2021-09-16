import { FC } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { Controller, useFormContext } from 'react-hook-form';
import styled, { createGlobalStyle, CSSProperties } from 'styled-components';

import { CalendarHeader } from './CalendarHeader';
import { CalendarInput } from './CalendarInput';

import { h4TextStyle } from '@/styles/typography';

interface DateFieldProps extends Omit<ReactDatePickerProps, 'onChange'> {
	style?: CSSProperties;
	label: string;
	name: string;
}

export const DateField: FC<DateFieldProps> = ({ style, label, name }) => {
	const { control } = useFormContext();

	return (
		<Wrapper style={style}>
			<Controller
				name={name}
				control={control}
				render={({ field, fieldState }) => (
					<ReactDatePicker
						closeOnScroll={() => true}
						onChange={(e) => field.onChange(e)}
						selected={field.value}
						showPopperArrow={false}
						dateFormat="d MMM yyyy"
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

		 .react-datepicker__day-names{
     display: none;
}

 .react-datepicker__header{
     background-color: white;
     padding: 0;
     border: none;
}
`;
