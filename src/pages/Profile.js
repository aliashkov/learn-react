import React from 'react';
import UserChange from '../components/UserChange';
import '../styles/Profile.css'
import MyButton from '../components/button/MyButton';
import { useDispatch, useSelector } from "react-redux"


const Profile = (props) => {

  const dispatch = useDispatch();
  const isClosed = useSelector(state => state.isClosedReducer.isClosed)
  const users = useSelector(state => state.usersReducer.users)
  const foundUser = users.find(user => user.id === 1)


  const openChangingForm = (visible) => {
    if (visible)
      dispatch({ type: "OPEN" })
    else
      dispatch({ type: "CLOSE" })
  }


  React.useEffect(() => {
    dispatch({ type: "CLOSE" })
  }, [dispatch]);


  return (

    <div className='App'>
      <div className='user__main'>
        <div className='user__container'>
          <img className='user__logo' width="180px" height="180px" alt="img" src={foundUser.file}></img>
          <div className='user__data'>
            <div className='user__text'>Имя : {foundUser.name}</div>
            <div className='user__text'>Фамилия : {foundUser.surname}</div>
            <div className='user__text'>Год : {foundUser.year}</div>
            <div className='user__text'>Номер паспорта : {foundUser.passwordNumber}</div>
          </div>

          {(!isClosed)
            ? <MyButton onClick={() => { openChangingForm(true) }} > Открыть редактирование </MyButton>
            : <MyButton onClick={() => { openChangingForm(false) }} > Закрыть редактирование</MyButton>
          }
        </div>
      </div>

      {
        (!isClosed)
          ? ''
          : <UserChange />
      }

    </div >
  );
}

export default Profile;