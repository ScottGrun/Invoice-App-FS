import { NextPage } from 'next';

import { Header } from '@/components/InvoiceDetails/Header/Header';
import { PageLink } from '@/components/PageLink/PageLink';
import PageLayout from '@/layouts/PageLayout';

const InvoiceDetails: NextPage = () => {
	return (
		<PageLayout>
			<PageLink href="/" icon="back">
				Go back
			</PageLink>
			<Header></Header>
		</PageLayout>
	);
};

export default InvoiceDetails;
