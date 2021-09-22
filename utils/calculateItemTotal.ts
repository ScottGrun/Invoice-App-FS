export const calculateItemTotal = (quantity = 0, price = 0) => {
	return ((quantity * price) / 100).toFixed(2);
};
