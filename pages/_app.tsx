import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';
import { InvoicesProvider } from 'context/InvoicesContext';

import GlobalStyle from '../styles/globalStyle';
import { theme, darkTheme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<GlobalStyle />
				<InvoicesProvider>
					<Component {...pageProps} />
				</InvoicesProvider>
			</ThemeProvider>
		</>
	);
}
export default MyApp;
