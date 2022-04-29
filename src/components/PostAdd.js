import React, { useState } from 'react';
import MyButton from './button/MyButton';
import MyInput from './input/MyInput';
import { v4 as uuidv4 } from 'uuid';

const PostAdd = (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    const addNews = () => {
        const id = uuidv4();
        const newArticle = {
          id,
          title,
          body
        }
        props.create(newArticle)
    }

    console.log(props)
    return (

        <div className='create__wrapper'>
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
            <MyButton onClick={addNews} > Создать новость</MyButton>
        </div>

    )
}

export default PostAdd;