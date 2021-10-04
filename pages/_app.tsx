import { AnimatePresence } from 'framer-motion';
import withDarkMode, { useDarkMode } from 'next-dark-mode';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { InvoicesProvider } from 'context/InvoicesContext';

import GlobalStyle from '../styles/globalStyle';
import { lightTheme, darkTheme } from '../styles/theme';

import 'react-datepicker/dist/react-datepicker.css';

function MyApp({ Component, pageProps, router }: AppProps) {
	const { darkModeActive } = useDarkMode();

	return (
		<>
			<ThemeProvider theme={darkModeActive ? darkTheme : lightTheme}>
				<GlobalStyle />
				<InvoicesProvider>
					<AnimatePresence exitBeforeEnter>
						<Component {...pageProps} key={router.route} />
					</AnimatePresence>
				</InvoicesProvider>
			</ThemeProvider>
		</>
	);
}
export default withDarkMode(MyApp);
