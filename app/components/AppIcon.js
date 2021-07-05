import React from 'react';
import { View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const AppIcon = ({ name, size = 40, backgroundColor = '#000', iconColor = 'white' }) => {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor
        }}>
            <MaterialCommunityIcons name={name} size={size / 2 } color={iconColor}/>
        </View>
    );
};

export default AppIcon;