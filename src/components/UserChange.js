import React, { useMemo, useState } from 'react';
import MyButton from './button/MyButton';
import MyInput from './input/MyInput';
import { useDispatch, useSelector } from "react-redux"
import { changeUserAction } from '../actions/usersAction';
import ErrorHander from './error/ErrorHandler';

const UserChange = ({ cardSymbols, name, setName, surname, setSurname, file, setFile, card, setCard }) => {
    const users = useSelector(state => state.usersReducer.users)
    const dispatch = useDispatch();


    const updateUser = () => {
        const newUser = {
            name,
            surname,
            card,
            file
        }
        modifyData(newUser);
    }

    const modifyData = (newUser) => {
        const changedUser = [...users].map((users, index) => (
            (users.id === 1)
                ? {
                    ...users,
                    ...newUser
                } : { ...users }
        )
        )
        dispatch(changeUserAction(changedUser))
    }

    function memoizedValue(value, setValue, placeholderTitle) {

        return <><MyInput
            value={value}
            onChange={e => setValue(e.target.value)}
            type="text"
            placeholder={placeholderTitle}
        /> {placeholderTitle === 'Номер карты' ? <ErrorHander value={value} cardSymbols={cardSymbols} /> : <></>}</>

    }

    const memoizedName = useMemo(() => memoizedValue(name, setName, 'Имя'), [name])
    const memoizedSurname = useMemo(() => memoizedValue(surname, setSurname, 'Фамилия'), [surname])
    const memoizedCard = useMemo(() => memoizedValue(card, setCard, 'Номер карты'), [card])
    const memoizedFile = useMemo(() => memoizedValue(file, setFile, 'URL аватара'), [file])



    return (
        <>
            <div className='create__wrapper'>
                <div className='input__wrapper'>
                    {memoizedName}
                    {memoizedSurname}
                    {memoizedCard}
                    {memoizedFile}
                </div>
                <div className='button__wrapper'>
                    <MyButton onClick={updateUser} > Изменить данные</MyButton>

                </div>

            </div>
        </>


    )
}

export default UserChange;

