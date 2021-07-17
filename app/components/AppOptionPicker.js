import React, { useState } from 'react';
import { Button, FlatList, Modal, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import AppScreen from './AppScreen';
import AppOptionPickerItem from './AppOptionPickerItem';
import DEFAULT_STYLES from '../config/styles';

const AppOptionPicker = ({ icon, items, numberOfColumns = 1, onSelectItem, PickerItemComponent = AppOptionPickerItem, placeholder, selectedItem, width = '100%' }) => {
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
                <AppScreen>
                    <Button title="CLOSE" onPress={() => setIsModalVisible(false)}/>
                    <FlatList 
                        data={items}
                        key={'_'}
                        keyExtractor={item => '_' + item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}
                                onPress={() => {
                                    setIsModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />)
                        }
                        />
                    </AppScreen>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
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