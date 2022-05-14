import React, { useState } from 'react';
import '../styles/Profile.css'
import MyButton from '../components/button/MyButton';
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from '../serivces/users';
import { Watch } from 'react-loader-spinner'
import MyInput from '../components/input/MyInput';
import { userLoginedAction, userUnloginedAction } from '../actions/isLoginedAction';
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';


const Auth = (props) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const dispatch = useDispatch();
    const isLoaded = useSelector(state => state.isLoadedReducer.isLoadedUsers)
    const isLogined = useSelector(state =>  state.isLoginedReducer.isLogined)
    const users = useSelector(state => state.usersReducer.users)
    const foundUser = users.find(user => user.id === 1)
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isLoaded)
            dispatch(fetchUsers())
    }, []);

    const login = () => {
        if ((name === foundUser.name) && (surname === foundUser.surname)) {
            alert('Пользователь успешно авторизирован')
            dispatch(userLoginedAction())
            navigate('/profile');
        }
        else
            alert('Нет данного пользователя')
    }

    const exit = () => {
        if(isLogined) {
            alert('Пользователь успешно деаторизирован')
            dispatch(userUnloginedAction())
        }
        navigate('/');
    }

    return (

        <div className='App'>
            {(!isLoaded)
                ? <div className='watch'>
                    <Watch className='watch'
                        height="250"
                        width="250"
                        color='black'
                        ariaLabel='loading'
                    />
                </div>
                : <>
                    <div className='text__header'>Авторизация</div>
                    <div className='auth__input__wrapper'>
                        <MyInput
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text"
                            placeholder='Имя' />
                        <MyInput
                            value={surname}
                            onChange={e => setSurname(e.target.value)}
                            type="text"
                            placeholder='Фамилия' />

                    </div><div className='auth__button__wrapper'>
                        <MyButton onClick={login}> Логин </MyButton>
                        <MyButton onClick={exit}> Выйти </MyButton>
                    </div></>

            }
        </div >

    );
}

export default Auth;


