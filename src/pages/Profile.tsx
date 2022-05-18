import React, { useState } from 'react';
import UserChange from '../components/UserChange';
import '../styles/Profile.css'
import MyButton from '../components/button/MyButton';
import { useDispatch, useSelector } from "react-redux"
import { closeAction, openAction } from '../actions/IsOpenedAction';
import { fetchUsers } from '../serivces/users';
import { Watch } from 'react-loader-spinner'





const Profile = (props: any) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [card, setCard] = useState('');
  const [file, setFile] = useState('');
  const dispatch = useDispatch();

  const isClosed: any = useSelector<{ state: any, isClosedReducer: any }>(state => state.isClosedReducer.isClosed);
  const isLoaded : any = useSelector<{ state : any , isLoadedReducer: any , isLoadedItems : any }>(state => state.isLoadedReducer.isLoadedItems);
  const users: any = useSelector<{ state: any, usersReducer: any }>(state => state.usersReducer.users);



  const foundUser = users.find((user : any) => user.id === 1)


  const openChangingForm = (visible : boolean) => {
    if (visible)
      dispatch(openAction())
    else
      dispatch(closeAction())
  }


  React.useEffect(() => {
    if (!isLoaded)
      dispatch(fetchUsers() as any)
    dispatch(closeAction())
  }, []);


  return (

    <div className='App'>
      {(!isLoaded)
        ? <div className='watch'>
          <Watch 
            height="250"
            width="250"
            color='black'
            ariaLabel='loading'
          />
        </div>
        : <div className='user__main'>
          <div className='user__container'>
            {(foundUser !== undefined) ?
              <>
                <img className='user__logo' width="180px" height="180px" alt="img" src={foundUser.file}></img><div className='user__data'>
                  <div className='user__text'>Имя: {foundUser.name}</div>
                  <div className='user__text'>Фамилия: {foundUser.surname}</div>
                  <div className='user__text'>Номер карты: {foundUser.card}</div>
                </div>
              </>
              : <></>
            }
            {(!isClosed)
              ? <MyButton onClick={() => { openChangingForm(true) }} > Открыть редактирование </MyButton>
              : <MyButton onClick={() => { openChangingForm(false) }} > Закрыть редактирование</MyButton>
            }
          </div>
        </div>

      }{
        (!isClosed)
          ? ''
          : <UserChange cardSymbols={16} name={name} setName={setName} surname={surname} setSurname={setSurname} card={card} setCard={setCard} file={file} setFile={setFile} />
      }
    </div >

  );
}


export default Profile;

