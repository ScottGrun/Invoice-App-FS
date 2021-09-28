import { PossibleThemes } from '@/config/PossibleThemes';

export const getInitialTheme = () => {
	// Don't execute on the server
	if (typeof window !== 'undefined') {
		const persistedThemePref = window.localStorage.getItem('theme');

		// Check if user has already chosen a theme
		if (typeof persistedThemePref === 'string') {
			return persistedThemePref;
		}

		// If the user hasn't choosen a theme before check if their OS has color pref
		const mql = window.matchMedia('(prefers-color-scheme: dark)');
		if (typeof mql.matches === 'boolean') {
			return mql.matches ? 'dark' : 'light';
		}

		// If they have none of the above just default to light

		return 'light';
	}
};
