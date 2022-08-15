import React, {useContext} from 'react';
import ErrorContext from "../context";

const ErrorElement = () => {
    const {error} = useContext(ErrorContext)
    return (
        <div className='text-xl p-3'>
            {error}
        </div>
    );
};

export default ErrorElement;
