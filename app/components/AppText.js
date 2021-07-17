import React from 'react';
import { Text } from 'react-native';

import DEFAULT_STYLES from '../config/styles';

const AppText = ({ children, style, ...otherProps}) => {
    return (
        <Text style={[DEFAULT_STYLES.text, style]} { ...otherProps }>{children}</Text>
    );
};

export default AppText;