import React from 'react';
import { useFormikContext } from 'formik';

import AppImageInputList from '../AppImageInputList';
import AppErrorMessage from './AppErrorMessage';

const AppFormImagePicker = ({ name }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name];


    const handleAdd = (uri) => {
        setFieldValue(name, [ ...imageUris, uri ]);
    };
    
    const handleRemove = (uri) => {
        setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri));
    };

    return (
        <>
            <AppImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove}/>
            <AppErrorMessage visible={touched[name]} errorMessage={errors[name]}/>
        </>
    );
}

export default AppFormImagePicker;