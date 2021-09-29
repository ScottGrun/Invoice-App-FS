import { css } from 'styled-components';

import { FONT_FAMILY, FONT_SIZES, MEDIA_QUERIES, WEIGHTS } from './constants';

// Base Styles
export const headerBaseStyles = css`
	font-family: ${FONT_FAMILY.header};
	font-weight: ${WEIGHTS.bold};
`;

export const bodyBaseStyles = css`
	font-family: ${FONT_FAMILY.body};
	font-weight: ${WEIGHTS.medium};
`;

// Headers
export const h1TextStyle = css`
	${headerBaseStyles}
	font-size: ${FONT_SIZES.h1};
	line-height: 36px;
	letter-spacing: -1px;
`;

export const h2TextStyle = css`
	${headerBaseStyles}
	font-size: ${FONT_SIZES.h2};
	line-height: 22px;
	letter-spacing: -0.625px;
`;

export const h3TextStyle = css`
	${headerBaseStyles}
	font-size: ${FONT_SIZES.h3};
	line-height: 24px;
	letter-spacing: -0.8px;
`;

export const h4TextStyle = css`
	${headerBaseStyles}
	font-size: ${FONT_SIZES.h4};
	line-height: 15px;
	letter-spacing: -0.25px;
`;

export const modalHeaderTextStyle = css`
	${headerBaseStyles}
	font-size: ${FONT_SIZES.h2};
	line-height: 32px;
	letter-spacing: -0.4166666567325592px;
`;

// Body
export const bodyTextStyle = css`
	${bodyBaseStyles}
	font-size: ${FONT_SIZES.body};
	line-height: 15px;
	letter-spacing: -0.25px;
`;

export const body2TextStyle = css`
	${bodyBaseStyles}
	font-size: ${FONT_SIZES.body2};
	line-height: 18px;
	letter-spacing: -0.229167px;
`;

export const modalBodyTextStyle = css`
	${bodyBaseStyles}
	font-size: ${FONT_SIZES.body};
	line-height: 22px;
	letter-spacing: -0.25px;
`;

// Invoice Details

export const detailValueTextStyle = css`
	${headerBaseStyles};
	font-size: ${15 / 16}rem;
	line-height: 20px;
	letter-spacing: -0.3125px;
`;

export const tableFooterTotalTextStyle = css`
	${headerBaseStyles};
	font-size: ${20 / 16}rem;
	line-height: 32px;
	letter-spacing: -0.416667px;

	@media ${MEDIA_QUERIES.tabletAndUp} {
		font-size: ${24 / 16}rem;
		line-height: 32px;
		letter-spacing: -0.5px;
	}
`;

// Form

export const formHeaderTextStyle = css`
	${headerBaseStyles};
	font-size: ${FONT_SIZES.formH1};
	line-height: 32px;
	letter-spacing: -0.5px;
`;

export const itemlistHeaderTextStyle = css`
	${headerBaseStyles};
	font-size: ${FONT_SIZES.formItemListH1};
	line-height: 32px;
	letter-spacing: -0.375px;
`;

export const errorMessageTextStyle = css`
	font-family: ${FONT_FAMILY.error};
	font-size: ${FONT_SIZES.formError};
	font-weight: ${WEIGHTS.semiBold};
	line-height: 15px;
	letter-spacing: -0.208333px;
`;

// Empty State
export const EmptyStateMessageTextStyle = css`
	font-family: ${FONT_FAMILY.body};
	font-weight: ${WEIGHTS.medium};
	font-size: ${12 / 16}rem;
	line-height: 15px;

	letter-spacing: -0.25px;
`;
