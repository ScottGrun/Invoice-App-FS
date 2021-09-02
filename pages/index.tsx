import { NextPage } from 'next';

import { Header } from '@/components/Home';
import { InvoiceCard } from '@/components/InvoiceCard/InvoiceCard';
import { InvoiceListContainer } from '@/components/InvoiceListContainer/InvoiceListContainer';
import PageLayout from '@/layouts/PageLayout';

const Home: NextPage = () => {
	return (
		<PageLayout>
			<Header invoiceCount={0} />
			<InvoiceListContainer>
				<InvoiceCard
					id="RT3080"
					dueDate="Due 19 Aug 2021"
					clientName="Jensen Huang"
					total="£1,800.90"
					status="Paid"
				/>
				<InvoiceCard
					id="XM9141"
					dueDate="Due  20 Sep 2021"
					clientName="Alex Grim"
					total="£ 556.00"
					status="Pending"
				/>
			</InvoiceListContainer>
		</PageLayout>
	);
};

export default Home;
