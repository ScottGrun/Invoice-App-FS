import Image from 'next/image';
import React, { forwardRef } from 'react';
import styled from 'styled-components';

import iconCalendarSrc from '@/public/icons/icon-calendar.svg';
import { bodyTextStyle, h4TextStyle } from '@/styles/typography';

interface Props {}

// eslint-disable-next-line react/display-name
export const CustomDateInput = forwardRef(
	({ value, onClick, onChange, label, calendarOpen }, ref) => (
		<CustomInputWrapper>
			<Label>
				<span>{label}</span>
				<InputWrapper>
					<CustomInput
						value={value}
						onChange={onChange}
						calendarOpen={calendarOpen}
						onClick={onClick}
						ref={ref}
					/>
					<InputIcon>
						<Image src={iconCalendarSrc} alt="" />
					</InputIcon>
				</InputWrapper>
			</Label>
		</CustomInputWrapper>
	)
);

const CustomInputWrapper = styled.div`
	display: flex;
	flex-flow: column;
	width: 100%;
`;
const Label = styled.label`
	span {
		${bodyTextStyle};
		display: flex;
		flex-flow: column;
		margin-bottom: 10px;
		color: ${(p) => (p.hasError ? p.theme.COLORS.warning[1] : p.theme.COLORS.primary[3])};
	}
`;

const InputWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	height: 48px;
	width: 100%;
`;

const CustomInput = styled.input`
	${h4TextStyle};
	padding-left: 20px;
	height: 100%;
	border-radius: 4px;
	border: solid 2px ${(p) => (p.hasError ? p.theme.COLORS.warning[1] : p.theme.COLORS.grey[2])};
	&:hover {
		cursor: pointer;
		border: solid 2px ${(p) => p.theme.COLORS.primary[1]};
	}
`;

const InputIcon = styled.div`
	position: absolute;
	right: 16px;
`;
