import React from 'react';

import { useFormikContext } from 'formik';

import AppOptionPicker from '../AppOptionPicker';
import AppErrorMessage from './AppErrorMessage';

/** To be used within AppForm component. */

const AppFormOptionPicker = ({ name, items, placeholder }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <AppOptionPicker
                items={items}
                placeholder={placeholder}
                selectedItem={values[name]}
                onSelectItem={(item) => setFieldValue(name, item)}
            />
            <AppErrorMessage visible={touched[name]} errorMessage={errors[name]}/>
        </>
    );
};

export default AppFormOptionPicker;