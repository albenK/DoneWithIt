import { Platform } from "react-native";

import COLORS from "./colors";

export default {
    colors: COLORS,
    text: {
        fontSize: 18,
        color: COLORS.dark,
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