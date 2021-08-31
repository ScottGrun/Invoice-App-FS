import { css } from 'styled-components';

// Base Styles
export const headerBaseStyles = css`
	font-family: ${(p) => p.theme.FONT_FAMILY.header};
	font-weight: ${(p) => p.theme.WEIGHTS.bold};
`;

export const bodyBaseStyles = css`
	font-family: ${(p) => p.theme.FONT_FAMILY.body};
	font-weight: ${(p) => p.theme.WEIGHTS.medium};
`;

// Headers
export const h1TextStyle = css`
	${headerBaseStyles}
	font-size: ${(p) => p.theme.FONT_SIZES.h1};
	line-height: 36px;
	letter-spacing: -1px;
`;

export const h2TextStyle = css`
	${headerBaseStyles}
	font-size: ${(p) => p.theme.FONT_SIZES.h2};
	line-height: 22px;
	letter-spacing: -0.625px;
`;

export const h3TextStyle = css`
	${headerBaseStyles}
	font-size: ${(p) => p.theme.FONT_SIZES.h3};
	line-height: 24px;
	letter-spacing: -0.8px;
`;

export const h4TextStyle = css`
	${headerBaseStyles}
	font-size: ${(p) => p.theme.FONT_SIZES.h4};
	line-height: 15px;
	letter-spacing: -0.25px;
`;

// Body
export const bodyTextStyle = css`
	${bodyBaseStyles}
	font-size: ${(p) => p.theme.FONT_SIZES.body};
	line-height: 15px;
	letter-spacing: -0.25px;
`;

export const body2TextStyle = css`
	${bodyBaseStyles}
	font-size: ${(p) => p.theme.FONT_SIZES.body2};
	line-height: 18px;
	letter-spacing: -0.229167px;
`;
