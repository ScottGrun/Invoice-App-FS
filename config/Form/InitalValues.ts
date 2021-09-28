import { Invoice } from '@/types/index';

export const initalValues: Invoice = {
	id: '',
	status: 'draft',
	user_street_address: '',
	user_city: '',
	user_post_code: '',
	user_country: '',
	client_name: '',
	client_email: '',
	client_street_address: '',
	client_city: '',
	client_post_code: '',
	client_country: '',
	invoice_date: new Date(),
	invoice_due_date: new Date(),
	description: '',
	invoice_items: [],
};
