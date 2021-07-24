import { Platform } from "react-native";

import APP_COLORS from "./colors";

export default {
    APP_COLORS: APP_COLORS,
    text: {
        fontSize: 18,
        color: APP_COLORS.dark,
        ...Platform.select({
            android: {
                fontFamily: 'Roboto',
            },
            ios: {
                fontFamily: 'Avenir',
            }
        }),
    }
};