import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
	COLORS: {
		body: {
			bg: '#F8F8FB',
			color: '#0C0E16',
		},
		header: {
			headerColor: '#0C0E16',
			subHeaderColor: '#888EB0',
		},
		aside: {
			bg: '#373B53',
			color: '#7E88C3',
			border: '#494E6E',
		},
		dropdown: {
			bg: '#FFF',
			color: '#0C0E16',
			itemColor: '#1E2139',
			itemSelectedColor: '#7C5DFA',
		},
		checkbox: {
			bgEmpty: '#DFE3FA',
			bgChecked: '#7C5DFA',
			borderChecked: '#7C5DFA',
		},
		button: {
			primary: {
				bg: '#7C5DFA',
				color: '#FFFFFF',
				hover: '#9277FF',
			},
			secondary: {
				bg: '#F9FAFE',
				color: '#7E88C3',
				hover: '#DFE3FA',
			},
			tertiary: {
				bg: '#373B53',
				color: '#888EB0',
				hover: '#0C0E16',
			},
			warning: {
				bg: '#EC5757',
				color: '#FFFFFF',
				hover: '#FF9797',
			},
		},
		invoiceCard: {
			bg: '#fff',
			id: '#0C0E16',
			dueDate: '#7E88C3',
			clientName: '#858BB2',
			total: '#0C0E16',
		},
		invoiceDetails: {
			bg: '#FFF',
		},
		invoiceDetailsTable: {
			heading: '#7E88C3',
			bg: '#F9FAFE',
			totalSection: {
				bg: '#373B53',
				color: '#FFFFFF',
			},
		},
		statusBadge: {
			paid: {
				bg: '#F3FCF9',
				color: '#33D69F',
			},
			pending: {
				bg: '#FFF8F0',
				color: '#FF8F00',
			},
			draft: {
				bg: '#F3F3F5',
				color: '#373B53',
			},
		},
		text: {
			h1: '#0C0E16',
			body1: '#858BB2',
			body2: '#7E88C3',
		},
		drawer: {
			bg: '#FFFFFF',
		},
		form: {
			sectionLabel: '#7C5DFA',
			inputLabel: '#7E88C3',
			inputValue: '#0C0E16',
			inputBorderColor: '#DFE3FA',
			itemListHeader: '#777F98',
		},
		itemField: {
			deleteBtn: '#888EB0',
			total: '#888EB0',
		},
		emptyState: {
			heading: '#0C0E16',
			message: '#888EB0',
		},
	},
};

export const darkTheme: DefaultTheme = {
	COLORS: {
		body: {
			bg: '#141625',
			color: '#FFFFFF',
		},
		header: {
			headerColor: '#FFFFFF',
			subHeaderColor: '#DFE3FA',
		},
		aside: {
			bg: '#373B53',
			color: '#7E88C3',
			border: '#494E6E',
		},
		dropdown: {
			bg: '#252945',
			color: '#FFFFFF',
			itemColor: '#FFFFFF',
			itemSelectedColor: '#7C5DFA',
		},
		checkbox: {
			bgEmpty: '#1E2139',
			bgChecked: '#7C5DFA',
			borderChecked: '#7C5DFA',
		},
		button: {
			primary: {
				bg: '#7C5DFA',
				color: '#FFFFFF',
				hover: '#9277FF',
			},
			secondary: {
				bg: '#252945',
				color: '#DFE3FA',
				hover: '#FFFFFF',
			},
			tertiary: {
				bg: '#373B53',
				color: '#DFE3FA',
				hover: '#1E2139',
			},
			warning: {
				bg: '#EC5757',
				color: '#FFFFFF',
				hover: '#FF9797',
			},
		},
		invoiceCard: {
			bg: '#1E2139',
			id: '#FFFFFF',
			dueDate: '#DFE3FA',
			clientName: '#FFFFFF',
			total: '#FFFFFF',
		},
		invoiceDetails: {
			bg: '#1E2139',
		},
		invoiceDetailsTable: {
			heading: '#DFE3FA',
			bg: '#252945',
			totalSection: {
				bg: '#0C0E16',
				color: '#FFFFFF',
			},
		},
		statusBadge: {
			paid: {
				bg: '#1F2B3F',
				color: '#33D69F',
			},
			pending: {
				bg: '#2B2736',
				color: '#FF8F00',
			},
			draft: {
				bg: '#292C44',
				color: '#373B53',
			},
		},
		text: {
			h1: '#FFF',
			body1: '#DFE3FA',
			body2: '#DFE3FA',
		},
		drawer: {
			bg: '#FFFFFF',
		},
		form: {
			sectionLabel: '#7C5DFA',
			inputLabel: '#7E88C3',
			inputValue: '#0C0E16',
			inputBorderColor: '#DFE3FA',
			itemListHeader: '#777F98',
		},
		itemField: {
			deleteBtn: '#888EB0',
			total: '#888EB0',
		},
		emptyState: {
			heading: '#0C0E16',
			message: '#888EB0',
		},
	},
};
