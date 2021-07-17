import React, { useState } from 'react';
import { Button, FlatList, Modal, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import AppScreen from './AppScreen';
import AppOptionPickerItem from './AppOptionPickerItem';
import DEFAULT_STYLES from '../config/styles';

const AppOptionPicker = ({ icon, items, selectedItem, onSelectItem, placeholder, width = '100%' }) => {
    const [ isModalVisible, setIsModalVisible ] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setIsModalVisible(true)}>
                <View style={[styles.pickerButton, { width }]}>
                    {!!icon && <MaterialCommunityIcons
                        name={icon}
                        size={20}
                        color={DEFAULT_STYLES.colors.medium}
                        style={styles.icon}
                    />}
                    <AppText style={[styles.text, { color: selectedItem ? DEFAULT_STYLES.text.color : DEFAULT_STYLES.colors.medium}]}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={DEFAULT_STYLES.colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={isModalVisible} animationType="slide">
                <View style={styles.pickerModalContainer}>
                    <AppScreen>
                        <Button title="CLOSE" onPress={() => setIsModalVisible(false)}/>
                        <FlatList 
                            data={items}
                            keyExtractor={item => item.value.toString()}
                            renderItem={({ item }) => (
                                <AppOptionPickerItem
                                    label={item.label}
                                    onPress={() => {
                                        setIsModalVisible(false);
                                        onSelectItem(item);
                                    }}
                                />)
                            }
                        />
                    </AppScreen>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    pickerModalContainer: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 15,
        paddingBottom: 15,
        backgroundColor: DEFAULT_STYLES.colors.white,
    },
    pickerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 25,
        marginVertical: 10,
        backgroundColor: DEFAULT_STYLES.colors.light,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    }
});

export default AppOptionPicker;