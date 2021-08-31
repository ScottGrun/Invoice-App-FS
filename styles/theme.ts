// Constants
export const BREAKPOINTS = {
	phone: 375,
	tablet: 768,
	laptop: 1110,
	xl: 1440,
};

export const theme = {
	COLORS: {
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
		},
		warning: {
			1: '#EC5757',
			2: '#FF9797',
		},
	},
	FONT_FAMILY: {
		header: "'Spartan', sans-serif",
		body: "'Spartan', sans-serif",
	},
	FONT_SIZES: {
		h1: `${32 / 16}rem`,
		h2: `${20 / 16}rem`,
		h3: `${16 / 16}rem`,
		h4: `${12 / 16}rem`,
		body: `${12 / 16}rem`,
		body2: `${11 / 16}rem`,
	},
	WEIGHTS: {
		medium: 500,
		bold: 700,
	},
	// Using REM for breakpoints to maintain a nicer UI
	//  when changing zoom levels
	QUERIES: {
		phoneAndUp: `(min-width: ${BREAKPOINTS.phone / 16}rem)`,
		tabletAndUp: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
		laptopAndUp: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
		xlAndUp: `(min-width: ${BREAKPOINTS.xl / 16}rem)`,
	},
};
