import { createContext, FC, useEffect, useReducer } from 'react';

import { demoInvoicesData } from '../data/demo';

import { invoiceReducer } from './invoiceReducer';

import { Invoice, InvoicesContextStateType, PossibleStatus } from '@/types/index';

// Context
export const InvoicesContext = createContext<InvoicesContextStateType>({
	invoices: [],
	addInvoice: () => {},
	deleteInvoice: () => {},
	updateInvoice: () => {},
});

export const InvoicesProvider: FC = ({ children }) => {
	const [state, dispatch] = useReducer(invoiceReducer, []);
	useEffect(() => {
		const localocalStorageInvoices = localStorage.getItem('invoices');
		// TODO: Add check for demo flag here

		if (typeof localocalStorageInvoices === 'string') {
			const parsedLocalStorageInvoices: Invoice[] = JSON.parse(localocalStorageInvoices);
			dispatch({ type: 'ADD', payload: parsedLocalStorageInvoices });
		} else {
			// Need to map over obj to circumvent incorrect type error with demo data
			dispatch({
				type: 'ADD',
				payload: demoInvoicesData.map((invoice) => ({
					...invoice,
					status: invoice.status as PossibleStatus,
				})),
			});
			localStorage.setItem('invoices', JSON.stringify(demoInvoicesData));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('invoices', JSON.stringify(state));
	}, [state]);

	// Turn dispatch actions into funcs for context to make things easier to use also ensures they are typed
	const addInvoice = (invoice: Invoice | Invoice[]) => {
		dispatch({ type: 'ADD', payload: invoice });
	};

	const deleteInvoice = (id: string) => {
		dispatch({ type: 'DELETE', payload: id });
	};

	const updateInvoice = (invoice: Invoice) => {
		dispatch({ type: 'UPDATE', payload: invoice });
	};

	return (
		<InvoicesContext.Provider value={{ invoices: state, addInvoice, deleteInvoice, updateInvoice }}>
			{children}
		</InvoicesContext.Provider>
	);
};
