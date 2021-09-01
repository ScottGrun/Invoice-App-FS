import { ListboxOption } from '@reach/listbox';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

import iconCheckmarkSrc from '@/public/icons/icon-check.svg';
import { h4TextStyle } from '@/styles/typography';

interface Props {
	value: any;
	children: React.ReactNode;
	className?: string;
	label: string;
}

export const DropdownOption = ({ value, children, className, label }: Props) => {
	return (
		<Option className={className} value={value} label={label}>
			<CheckWrapper>
				<Image src={iconCheckmarkSrc} alt="" />
			</CheckWrapper>
			{children}
		</Option>
	);
};

const Option = styled(ListboxOption)`
	${h4TextStyle};
	display: flex;
	align-items: center;
	color: inherit;
	padding-left: 0;

	div > img {
		display: none !important;
	}

	&[data-reach-listbox-option][data-current-selected] {
		div {
			background-color: ${(p) => p.theme.COLORS.primary[1]};
		}

		div > img {
			display: block !important;
		}
	}

	&[data-reach-listbox-option][data-current-nav] {
		background-color: transparent;
		color: ${(p) => p.theme.COLORS.primary[1]};
		cursor: pointer;
		div {
			border-color: ${(p) => p.theme.COLORS.primary[1]};
		}
	}
`;

const CheckWrapper = styled.div`
	display: grid;
	place-content: center;

	width: 16px;
	height: 16px;
	margin-right: 13px;

	background-color: ${(p) => p.theme.COLORS.grey[2]};
	border-radius: 2px;
	border: solid 2px transparent;
`;
