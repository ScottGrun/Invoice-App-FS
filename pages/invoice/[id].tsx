import { NextPage } from 'next';
import styled from 'styled-components';

import { DetailsCard } from '@/components/InvoiceDetails/DetailsCard/DetailsCard';
import { Header } from '@/components/InvoiceDetails/Header/Header';
import { PageLink } from '@/components/PageLink/PageLink';
import PageLayout from '@/layouts/PageLayout';

const InvoiceDetails: NextPage = () => {
	return (
		<PageLayout>
			<PageLink href="/" icon="back">
				Go back
			</PageLink>
			<DetailsHeader />
			<InvoiceDetailsCard />
		</PageLayout>
	);
};

export default InvoiceDetails;

const DetailsHeader = styled(Header)`
	margin-top: 32px;
`;

const InvoiceDetailsCard = styled(DetailsCard)`
	margin-top: 16px;
`;
