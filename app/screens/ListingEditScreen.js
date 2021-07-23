import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Keyboard } from 'react-native';

import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import AppCategoryPickerItem from '../components/AppCategoryPickerItem';
import { AppForm, AppFormField, AppFormOptionPicker, AppSubmitButton } from '../components/forms';
import AppFormImagePicker from '../components/forms/AppFormImagePicker';

const validationSchema = Yup.object().shape({
    images: Yup.array().min(1, 'Please select at least one image.'),
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
});

const CATEGORIES = [
    { label: 'Furniture', value: 0, backgroundColor: '#fc5c65', icon: 'floor-lamp' },
    { label: 'Cars', value: 1 , backgroundColor: '#fd9644', icon: 'car'},
    { label: 'Cameras', value: 2 , backgroundColor: '#fed330', icon: 'camera'},
    { label: 'Games', value: 3 , backgroundColor: '#26de81', icon: 'cards'},
    { label: 'Clothing', value: 4, backgroundColor: '#2bcbba', icon: 'shoe-heel' },
    { label: 'Sports', value: 5 , backgroundColor: '#45aaf2', icon: 'basketball'},
    { label: 'Movies & Music', value: 6 , backgroundColor: '#4b7bec', icon: 'headphones'},
    { label: 'Books', value: 7 , backgroundColor: 'lightgreen', icon: 'book-open-variant'},
    { label: 'Other', value: 8 , backgroundColor: 'grey', icon: 'help-box'},
];
const ListingEditScreen = () => {
    return (
        <AppScreen style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.formWrapper}>
                    <AppForm
                        initialValues={{ images: [], title: '', price: '', description: '', category: null}}
                        validationSchema={validationSchema}
                        onSubmit={(values) => { console.log(values) }}
                    >
                        <AppFormImagePicker name="images" />

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
                            items={CATEGORIES}
                            name="category"
                            numberOfColumns={3}
                            PickerItemComponent={AppCategoryPickerItem}
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