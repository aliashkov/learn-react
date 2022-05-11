import React, { useState } from 'react';
import MyButton from './button/MyButton';
import MyInput from './input/MyInput';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux"

const PostAdd = (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [cost, setCost] = useState('');
    const [file, setFile] = useState('');
    const posts = useSelector(state => state.itemsReducer.items)
    const dispatch = useDispatch();

    const addNews = () => {
        const id = uuidv4();
        const newArticle = {
            id,
            title,
            body,
            cost,
            file,
            hidden: true
        }
        dispatch({ type: "ADD_POST", payload: newArticle })
        //props.create(newArticle)
    }

    const updateNews = () => {
        const id = props.idValue;
        const newArticle = {
            id,
            title,
            body,
            cost,
            file,
            hidden: true
        }
        console.log([...posts].map((news, index) => ((news.id === id) ? { ...news, id: id, title: title } : { ...news })))
        dispatch({
            type: "CHANGE_POST", payload: [...posts].map((news, index) => (
                (news.id === id) ?
                    {
                        ...news,
                        ...newArticle
                    } : { ...news }))
        })
    }


    return (

        <div className='create__wrapper'>
            <div className='input__wrapper'>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder='Название новости'
                />
                <MyInput
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    type="text"
                    placeholder='Описание новости'
                />
                <MyInput
                    value={cost}
                    onChange={e => setCost(e.target.value)}
                    type="text"
                    placeholder='Стоимость товара'
                />
                <MyInput
                    value={file}
                    onChange={e => setFile(e.target.value)}
                    type="text"
                    placeholder='URL картинки'
                />

            </div>
            <div className='button__wrapper'>
                {(props.changed)
                    ? <MyButton onClick={updateNews} > Изменить пост</MyButton>
                    : <MyButton onClick={addNews} > Создать пост</MyButton>
                }
            </div>

        </div>

    )
}

export default PostAdd;