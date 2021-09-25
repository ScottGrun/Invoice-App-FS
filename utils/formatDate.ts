export const formatDateToString = (date: typeof DateType) => {
	return date
		.toLocaleString('en-US', { year: 'numeric', day: 'numeric', month: 'short' })
		.replace(',', '');
};
