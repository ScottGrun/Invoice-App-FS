import { Invoice } from '@/types/index';

export const initalValues: Invoice = {
	userStreetAddress: '',
	userCity: '',
	userPostCode: '',
	userCountry: '',
	clientName: '',
	clientEmail: '',
	clientStreetAddress: '',
	clientCity: '',
	clientPostCode: '',
	clientCountry: '',
	invoiceDate: new Date(),
	invoiceDueDate: new Date(),
	projectDescription: '',
	invoiceItems: [
		{
			name: 'Banner Design',
			quantity: 1,
			price: 156.0,
		},
		{
			name: 'Email Design',
			quantity: 2,
			price: 200.0,
		},
	],
};
