import React from 'react';

import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import AppErrorMessage from './AppErrorMessage';

const AppFormField = ({ name, width, ...otherProps }) => {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
        <>
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                width={width}
                { ...otherProps }
            />
            <AppErrorMessage visible={touched[name]} errorMessage={errors[name]}/>
        </>
    );
};

export default AppFormField;