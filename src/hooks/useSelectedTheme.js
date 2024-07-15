import { useCallback, useEffect, useState } from 'react';
import theme from '../style/theme';

const lsKey = 'theme';

const useSelectedTheme = () => {
    const [selectedTheme, setSelectedTheme] = useState(
        localStorage.getItem(lsKey)
    );

    const THEMES = {
        LIGHT: 'light',
        DARK: 'dark',
    };

    const userPrefers =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';

    const toggleSelectedTheme = () => {
        if (selectedTheme === THEMES.LIGHT) {
            localStorage.setItem(lsKey, THEMES.DARK);
            setSelectedTheme(THEMES.DARK);
        } else {
            localStorage.setItem(lsKey, THEMES.LIGHT);
            setSelectedTheme(THEMES.LIGHT);
        }
    };

    const getTheme = useCallback(() => {
        if (localStorage.getItem(lsKey)) {
            return localStorage.getItem(lsKey);
        } else if (userPrefers) {
            return userPrefers;
        } else {
            return 'light';
        }
    }, [userPrefers]);

    useEffect(() => {
        setSelectedTheme(getTheme());
    }, [getTheme]);

    return {
        selectedTheme: theme[selectedTheme],
        selectedThemeName: selectedTheme,
        toggleSelectedTheme: toggleSelectedTheme,
    };
};

export default useSelectedTheme;
