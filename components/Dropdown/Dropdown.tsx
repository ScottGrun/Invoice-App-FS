import { ListboxInput, ListboxButton, ListboxPopover, ListboxList } from '@reach/listbox';
import VisuallyHidden from '@reach/visually-hidden';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

import { DropdownOption } from './DropdownOption';

import '@reach/listbox/styles.css';
import iconChevronDownSrc from '@/public/icons/icon-arrow-down.svg';
import { h4TextStyle } from '@/styles/typography';

interface Props {
	children: typeof DropdownOption;
	className?: string;
}

export const Dropdown = ({ children, className }: Props) => {
	const labelId = `filter-by-status`;
	const [value, setValue] = useState('Pending');

	return (
		<div className={className}>
			<VisuallyHidden id={labelId}>Filter By Status</VisuallyHidden>
			<ListboxInput aria-labelledby={labelId} value={value} onChange={(value) => setValue(value)}>
				<DropdownButton
					arrow={<Image id="chevron" src={iconChevronDownSrc} alt="Arrow facing up" />}
				>
					Filter by status
				</DropdownButton>
				<PopOver>
					<ListboxList>{children}</ListboxList>
				</PopOver>
			</ListboxInput>
		</div>
	);
};

const PopOver = styled(ListboxPopover)`
	&[data-reach-listbox-popover] {
		width: 192px !important;
		margin-top: 23px;
		padding: 24px;
		border-radius: 8px;
		box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
		border: none;
	}
`;

const DropdownButton = styled(ListboxButton)`
	${h4TextStyle};
	display: flex;
	align-items: center;
	width: fit-content;
	padding: 0;

	background-color: transparent;
	border: none;
	cursor: pointer;

	span {
		height: 10px;
		margin-left: 16px;
	}

	&[data-reach-listbox-button][aria-expanded='true'] {
		#chevron {
			transition: transform 200ms;
			transform: rotate(180deg);
		}
	}
`;
