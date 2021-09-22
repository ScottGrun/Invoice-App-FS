// import * as yup from 'yup';
import { string, array, date, object, number } from 'yup';

export const formSchema = object().shape({
	user_street_address: string().required('Required'),
	user_city: string().required('Required'),
	user_post_code: string().required('Required'),
	user_country: string().required('Required'),
	client_name: string().required('Required'),
	client_email: string().email('Must be a valid email').required('Required'),
	client_street_address: string().required('Required'),
	client_city: string().required('Required'),
	client_post_code: string().required('Required'),
	client_country: string().required('Required'),
	invoice_date: date().required('Required'),
	invoice_due_date: date().when(
		'invoice_date',
		(invoice_date, schema) => invoice_date && schema.min(invoice_date, 'Must be after start date')
	),
	description: string().required('Required'),
	invoice_items: array()
		.of(
			object().shape({
				name: string().required('A Item Name is required.'),
				quantity: number()
					.nullable()
					.transform((v, o) => (o === '' ? null : v)),
				price: number()
					.nullable()
					.transform((v, o) => (o === '' ? null : v)),
			})
		)
		.min(1, 'Must have at least 1 billable item'),
});
