import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { InvoicesProvider } from 'context/InvoicesContext';

import GlobalStyle from '../styles/globalStyle';
import { lightTheme } from '../styles/theme';

import 'react-datepicker/dist/react-datepicker.css';

// Couldn't find a exported type, but I found this which is what they use to type there context
// interface CustomAppProps extends AppProps {
// 	darkMode: {
// 		autoModeActive: boolean;
// 		autoModeSupported: boolean;
// 		darkModeActive: boolean;
// 		switchToAutoMode: () => void;
// 		switchToDarkMode: () => void;
// 		switchToLightMode: () => void;
// 	};
// }

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={lightTheme}>
				<GlobalStyle />
				<InvoicesProvider>
					<Component {...pageProps} />
				</InvoicesProvider>
			</ThemeProvider>
		</>
	);
}
export default MyApp;
