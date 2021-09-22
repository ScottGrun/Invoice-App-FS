import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';
import { InvoicesProvider } from 'context/InvoicesContext';

import GlobalStyle from '../styles/globalStyle';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<InvoicesProvider>
					<Component {...pageProps} />
				</InvoicesProvider>
			</ThemeProvider>
		</>
	);
}
export default MyApp;
