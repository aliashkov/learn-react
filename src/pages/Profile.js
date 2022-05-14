import React , {useState} from 'react';
import UserChange from '../components/UserChange';
import '../styles/Profile.css'
import MyButton from '../components/button/MyButton';
import { useDispatch, useSelector } from "react-redux"
import { closeAction, openAction } from '../actions/IsOpenedAction';
import { fetchUsers } from '../serivces/users';
import { Lines } from 'react-preloaders';
import { Watch } from 'react-loader-spinner'





const Profile = (props) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [card, setCard] = useState('');
  const [file, setFile] = useState('');
  const dispatch = useDispatch();
  const isClosed = useSelector(state => state.isClosedReducer.isClosed)
  const isLoaded = useSelector(state => state.isLoadedReducer.isLoadedUsers)
  const users = useSelector(state => state.usersReducer.users)
  console.log(users)
  const foundUser = users.find(user => user.id === 1)


  const openChangingForm = (visible) => {
    if (visible)
      dispatch(openAction())
    else
      dispatch(closeAction())
  }


  React.useEffect(() => {
    if (!isLoaded)
      dispatch(fetchUsers())
    dispatch(closeAction())
  }, []);


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
          : <UserChange cardSymbols={16} name={name}  setName={setName} surname={surname}  setSurname={setSurname} card={card} setCard={setCard} file={file} setFile={setFile}/>
      }
    </div >

  );
}


export default Profile;

