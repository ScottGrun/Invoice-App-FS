import { Invoice } from '@/types/index';

type InvoiceActions =
	| { type: 'ADD'; payload: Invoice | Invoice[] }
	| { type: 'DELETE'; payload: string }
	| { type: 'UPDATE'; payload: Invoice };

export const invoiceReducer = (state: Invoice[], action: InvoiceActions) => {
	switch (action.type) {
		case 'ADD':
			if (Array.isArray(action.payload)) {
				return [...state, ...action.payload];
			} else {
				return [...state, action.payload];
			}
		case 'DELETE':
			return state.filter((invoice: Invoice) => invoice.id !== action.payload);
		case 'UPDATE':
			return state.map((invoice: Invoice) => {
				if (invoice.id === action.payload.id) {
					return action.payload;
				} else {
					return invoice;
				}
			});

		default:
			throw new Error(`Unknown action type${action}`);
	}
};
