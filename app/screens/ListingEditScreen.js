import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Keyboard } from 'react-native';

import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import { AppForm, AppFormField, AppFormOptionPicker, AppSubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
});

const CATEGORIES = [
    { label: 'Furniture', value: 0 },
    { label: 'Clothing', value: 1 },
    { label: 'Camera', value: 2 },
];
const ListingEditScreen = () => {
    return (
        <AppScreen style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.formWrapper}>
                    <AppForm
                        initialValues={{ title: '', price: '', description: '', category: null}}
                        validationSchema={validationSchema}
                        onSubmit={(values) => { console.log(values) }}
                    >
                        <AppFormField
                            name="title"
                            placeholder="Title"
                            maxLength={255}
                        />
                        <AppFormField
                            name="price"
                            placeholder="Price"
                            keyboardType="numeric"
                            maxLength={8}
                            width={120}
                        />
                        <AppFormOptionPicker
                            name="category"
                            items={CATEGORIES}
                            placeholder="Category"
                            width="50%"
                        />
                        <AppFormField
                            name="description"
                            placeholder="Description"
                            maxLength={255}
                            multiline
                            numberOfLines={3}
                        />
                        <AppSubmitButton label="Post"/>
                    </AppForm>
                </View>
            </TouchableWithoutFeedback>
        </AppScreen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    formWrapper: {
        width: '100%',
        height: '100%'
    }
});

export default ListingEditScreen;