import React from 'react';

import { useFormikContext } from 'formik';

import AppButton from './AppButton';

const AppSubmitButton = ({ label }) => {
    const { handleSubmit } = useFormikContext();

    return (
        <AppButton
            label={label}
            onPress={handleSubmit}
        />
    );
};

export default AppSubmitButton;