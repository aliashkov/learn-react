import React, { useMemo } from 'react';
import '../../styles/App.css'
import { useState } from 'react';

const ErrorHander = ({ value, cardSymbols }) => {
    let title = ''
    const errorHandler = () => {
        //console.log(666)
        if (value.length < cardSymbols) {
            return title = 'Введите больше символов'

        }

        else if (value.length > cardSymbols) {
            return title = 'Введите меньше символов'
        }
        else {
            return title = ''
        }
    }

    return (
        <div className='error_handler'> {errorHandler()}</div>
    )
}


export default React.memo(ErrorHander, (prevState, nextState) => {
    console.log(prevState.value.length)
    console.log(nextState.value.length)
    if ((nextState.value.length === 15) || (nextState.value.length === 16) || (nextState.value.length === 17))
        return false;
    return true;
});
