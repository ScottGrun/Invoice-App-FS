// Constants
export const BREAKPOINTS = {
	mobile: 500,
	tablet: 768,
	laptop: 1110,
	xl: 1440,
};

export const COLORS = {
	primary: {
		1: '#7C5DFA',
		2: '#9277FF',
		3: '#7E88C3',
	},
	dark: {
		1: '#0C0E16',
		2: '#141625',
		3: '#1E2139',
		4: '#252945',
		5: '#373B53',
		6: '#494E6E',
	},
	grey: {
		1: '#888EB0',
		2: '#DFE3FA',
		3: '#F8F8FB',
		4: '#F9FAFE',
		5: '#858BB2',
		6: '#F3F3F5',
		7: '#777F98',
	},
	success: {
		1: '#33D69F',
		2: '#F3FCF9',
	},
	caution: {
		1: '#FF8F00',
		2: '#FFF8F0',
	},
	warning: {
		1: '#EC5757',
		2: '#FF9797',
	},
	white: '#fff',
};

export const FONT_FAMILY = {
	header: "'Spartan', sans-serif",
	body: "'Spartan', sans-serif",
	error: "'Spartan', sans-serif",
};

export const FONT_SIZES = {
	h1: `${32 / 16}rem`,
	h2: `${20 / 16}rem`,
	h3: `${16 / 16}rem`,
	h4: `${12 / 16}rem`,
	body: `${12 / 16}rem`,
	body2: `${11 / 16}rem`,
	formH1: `${24 / 16}rem`,
	formItemListH1: `${18 / 16}rem`,
	formError: `${10 / 16}rem`,
};

export const WEIGHTS = {
	medium: 500,
	semiBold: 600,
	bold: 700,
};

export const MEDIA_QUERIES = {
	phoneAndUp: `(min-width: ${BREAKPOINTS.phone / 16}rem)`,
	tabletAndUp: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
	laptopAndUp: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
	xlAndUp: `(min-width: ${BREAKPOINTS.xl / 16}rem)`,
};
