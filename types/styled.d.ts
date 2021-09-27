// import original module declarations
import 'styled-components';
import { Colors } from './themeTypes';

declare module 'styled-components' {
	export interface DefaultTheme {
		COLORS: Colors;
	}
}
