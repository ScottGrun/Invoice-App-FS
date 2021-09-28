// Invoice Types
export interface Invoice {
	id: string;
	status: PossibleStatus;
	user_street_address: string;
	user_city: string;
	user_post_code: string;
	user_country: string;
	client_name: string;
	client_email: string;
	client_street_address: string;
	client_city: string;
	client_post_code: string;
	client_country: string;
	invoice_date: string | Date;
	invoice_due_date: string | Date;
	description: string;
	invoice_items: InvoiceItem[];
}

export interface InvoiceItem {
	name: string;
	quantity: number;
	price: number;
}

export type PossibleStatus = 'draft' | 'pending' | 'paid';

export type PossibleThemes = 'light' | 'dark';

export type InvoicesContextStateType = {
	invoices: Invoice[] | [];
	addInvoice: (invoice: Invoice) => void;
	deleteInvoice: (id: string) => void;
	updateInvoice: (invoice: Invoice) => void;
};
