import { InvoiceItem } from '../types/index';

export const calculateInvoiceTotal = (items: InvoiceItem[]): number => {
	const totalInCents = items.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
	return parseFloat((totalInCents / 100).toFixed(2));
};
