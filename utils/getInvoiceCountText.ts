export const getInvoiceCountText = (count = 0) => {
	if (count <= 0) {
		return 'No invoices';
	} else if (count === 1) {
		return 'There is 1 invoice';
	} else {
		return `There are ${count} invoices.`;
	}
};
