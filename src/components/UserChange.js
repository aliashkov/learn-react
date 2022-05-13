import React, { useState } from 'react';
import MyButton from './button/MyButton';
import MyInput from './input/MyInput';
import { useDispatch, useSelector } from "react-redux"

const UserChange = (props) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [year, setYear] = useState('');
    const [passwordNumber, setPasswordNumber] = useState('');
    const [file, setFile] = useState('');
    const users = useSelector(state => state.usersReducer.users)
    const dispatch = useDispatch();

    const updateUser = () => {
        const newUser = {
            name,
            surname,
            year,
            passwordNumber,
            file
        }
        dispatch({
            type: "CHANGE_USER", payload: [...users].map((users, index) => (
                (users.id === 1) ?
                    {
                        ...users,
                        ...newUser
                    } : { ...users }))
        })
    }

    return (

        <div className='create__wrapper'>
            <div className='input__wrapper'>
                <MyInput
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"
                    placeholder='Имя'
                />
                <MyInput
                    value={surname}
                    onChange={e => setSurname(e.target.value)}
                    type="text"
                    placeholder='Фамилия'
                />
                <MyInput
                    value={year}
                    onChange={e => setYear(e.target.value)}
                    type="text"
                    placeholder='Год'
                />
                <MyInput
                    value={passwordNumber}
                    onChange={e => setPasswordNumber(e.target.value)}
                    type="text"
                    placeholder='Номер паспорта'
                />
                <MyInput
                    value={file}
                    onChange={e => setFile(e.target.value)}
                    type="text"
                    placeholder='URL аватара'
                />

            </div>
            <div className='button__wrapper'>
                <MyButton onClick={updateUser} > Изменить данные</MyButton>
            </div>

        </div>

    )
}

export default UserChange;
