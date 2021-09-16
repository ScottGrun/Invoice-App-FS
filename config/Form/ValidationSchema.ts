// import * as yup from 'yup';
import { string, array, date, object, number } from 'yup';

export const formSchema = object().shape({
	userStreetAddress: string().required('Required'),
	userCity: string().required('Required'),
	userPostCode: string().required('Required'),
	userCountry: string().required('Required'),
	clientName: string().required('Required'),
	clientEmail: string().email('Must be a valid email').required('Required'),
	clientStreetAddress: string().required('Required'),
	clientCity: string().required('Required'),
	clientPostCode: string().required('Required'),
	clientCountry: string().required('Required'),
	invoiceDate: date().required('Required'),
	invoiceDueDate: date().when(
		'invoiceDate',
		(invoiceDate, schema) => invoiceDate && schema.min(invoiceDate, 'Must be after start date')
	),
	projectDescription: string().required('Required'),
	invoiceItems: array()
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
