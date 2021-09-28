export const formatDateToString = (date: Date) => {
	return date
		.toLocaleString('en-US', { year: 'numeric', day: 'numeric', month: 'short' })
		.replace(',', '');
};
