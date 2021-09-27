import { createContext, FC, useEffect, useReducer, useState } from 'react';

import { demoInvoicesData } from 'data/demo';

import { Invoice } from '../types';

import { invoiceReducer } from './invoiceReducer';

type InvoicesContextStateType = {
	invoices: Invoice[] | [];
	addInvoice: (invoice: Invoice) => void;
	deleteInvoice: (id: string) => void;
	updateInvoice: (invoice: Invoice) => void;
};

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
		const localInvoices = JSON.parse(localStorage.getItem('invoices'));
		// TODO: Add check for demo flag here
		if (localInvoices !== null) {
			dispatch({ type: 'ADD', payload: localInvoices });
		} else {
			dispatch({ type: 'ADD', payload: demoInvoicesData });
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
