import {  DefaultTheme } from '@react-navigation/native';

import APP_COLORS from '../config/colors';

const APP_NAVIGATION_THEME = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: APP_COLORS.primary,
        background: APP_COLORS.white,
    }
};

export default APP_NAVIGATION_THEME;