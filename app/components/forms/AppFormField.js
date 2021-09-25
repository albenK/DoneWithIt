import React from 'react';

import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import AppErrorMessage from './AppErrorMessage';

const AppFormField = ({ name, width, ...otherProps }) => {
    const { setFieldTouched, setFieldValue, values, errors, touched } = useFormikContext();

    return (
        <>
            <AppTextInput
                onChangeText={(text) => setFieldValue(name, text)}
                onBlur={() => setFieldTouched(name)}
                value={values[name]}
                width={width}
                { ...otherProps }
            />
            <AppErrorMessage visible={touched[name]} errorMessage={errors[name]}/>
        </>
    );
};

export default AppFormField;