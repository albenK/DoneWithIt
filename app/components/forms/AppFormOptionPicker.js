import React from 'react';

import { useFormikContext } from 'formik';

import AppOptionPicker from '../AppOptionPicker';
import AppErrorMessage from './AppErrorMessage';

/** To be used within AppForm component. */

const AppFormOptionPicker = ({ items, name, numberOfColumns, PickerItemComponent, placeholder, width }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <AppOptionPicker
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}

            />
            <AppErrorMessage visible={touched[name]} errorMessage={errors[name]}/>
        </>
    );
};

export default AppFormOptionPicker;