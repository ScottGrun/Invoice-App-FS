export interface Invoice {
	userStreetAddress: string;
	userCity: string;
	userPostCode: string;
	userCountry: string;
	clientName: string;
	clientEmail: string;
	clientStreetAddress: string;
	clientCity: string;
	clientPostCode: string;
	clientCountry: string;
	invoiceDate: Date | string;
	invoiceDueDate: Date | string;
	projectDescription: string;
	invoiceItems: InvoiceItem[];
}

export interface InvoiceItem {
	name: string;
	quantity: number;
	price: number;
}
