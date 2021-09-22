import { ListboxInput, ListboxButton, ListboxPopover, ListboxList } from '@reach/listbox';
import VisuallyHidden from '@reach/visually-hidden';
import Image from 'next/image';
import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';

import '@reach/listbox/styles.css';
import iconChevronDownSrc from '/public/icons/icon-arrow-down.svg';

import { DropdownOption } from '.';

import { PossibleStatus } from '@/config/PossibleStatus';
import { h4TextStyle } from '@/styles/typography';

interface DropDownProps {
	className?: string;
	setDropdownValue: Dispatch<SetStateAction<any>>;
	filter: PossibleStatus | '';
}

// Need to comeback here and refactor this. Reason I had to compose Dropdown and DropdownOption
// like this was to enable the ability to click on a input that has already been clicked and toggle it off
// This preserves the value being either '', 'Draft', 'Pending', 'Paid' making the dropdown accessible
// currently no way to do this with the native Reach UI controls because it only offers a onChange handler
// and I wanted to keep accessible nature of Reach UI components since they are battle tested as being acessible rather
// then try implement my own version https://reach.tech/listbox

export const InvoiceFilterDropdown: FC<DropDownProps> = ({
	className,
	setDropdownValue,
	filter,
}) => {
	const labelId = `filter-by-status`;

	return (
		<div className={className}>
			<VisuallyHidden id={labelId}>Filter By Status</VisuallyHidden>
			<ListboxInput aria-labelledby={labelId} defaultValue="" value={filter}>
				<DropdownButton
					arrow={<Image id="chevron" src={iconChevronDownSrc} alt="Arrow facing up" />}
				>
					Filter&nbsp;<span id="extra-text">by status</span>
				</DropdownButton>
				<PopOver>
					<ListboxList>
						<DropdownOption
							onClick={() => setDropdownValue(filter === 'Draft' ? '' : 'Draft')}
							value="Draft"
							label="Draft"
						>
							Draft
						</DropdownOption>
						<DropdownOption
							onClick={() => setDropdownValue(filter === 'Pending' ? '' : 'Pending')}
							value="Pending"
							label="Pending"
						>
							Pending
						</DropdownOption>
						<DropdownOption
							onClick={() => setDropdownValue(filter === 'Paid' ? '' : 'Paid')}
							value="Paid"
							label="Paid"
						>
							Paid
						</DropdownOption>
					</ListboxList>
				</PopOver>
			</ListboxInput>
		</div>
	);
};

const PopOver = styled(ListboxPopover)`
	&[data-reach-listbox-popover] {
		margin: 0 auto;
		margin-left: -39px;
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
		margin-left: 12px;
	}

	#extra-text {
		display: none;
		height: auto;
		margin: 0;
	}

	&[data-reach-listbox-button][aria-expanded='true'] {
		#chevron {
			transition: transform 200ms;
			transform: rotate(180deg);
		}
	}

	@media ${(p) => p.theme.QUERIES.tabletAndUp} {
		#extra-text {
			display: revert;
		}
	}
`;
