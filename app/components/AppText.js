import React from 'react';
import { Text } from 'react-native';

import DEFAULT_STYLES from '../config/styles';

const AppText = ({ children, style }) => {
    return (
        <Text style={[DEFAULT_STYLES.text, style]}>{children}</Text>
    );
};

export default AppText;