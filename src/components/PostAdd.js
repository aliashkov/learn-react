import React, { useState } from 'react';
import MyButton from './button/MyButton';
import MyInput from './input/MyInput';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux"

const PostAdd = (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [file, setFile] = useState('');
    const dispatch = useDispatch();

    const addNews = () => {
        const id = uuidv4();
        const newArticle = {
            id,
            title,
            body,
            file,
            hidden: true
        }
        dispatch({ type: "ADD_POST", payload: newArticle })
        //props.create(newArticle)
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
                    value={file}
                    onChange={e => setFile(e.target.value)}
                    type="text"
                    placeholder='URL картинки'
                />
            </div>
            <div className='button__wrapper'>
                <MyButton onClick={addNews} > Создать новость</MyButton>
            </div>

        </div>

    )
}

export default PostAdd;