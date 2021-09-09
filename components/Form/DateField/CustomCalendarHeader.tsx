import React from 'react';
import styled from 'styled-components';

interface Props {}

export const CustomCalendarHeader = ({
	date,
	changeYear,
	changeMonth,
	decreaseMonth,
	increaseMonth,
	prevMonthButtonDisabled,
	nextMonthButtonDisabled,
}: Props) => {
	return <div>{date}</div>;
};
