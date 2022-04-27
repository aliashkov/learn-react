import React from 'react';
import MyButton from '../components/button/MyButton';
import '../styles/App.css'

class PostNews extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='news'>
                 <div className='news__content'>
                    <strong>{this.props.news.id}. {this.props.news.title}</strong>
                    <div>
                       {this.props.news.body}
                    </div>
                 </div>
                <div className='news_buttons'>
                   <MyButton name={'Открыть новость'}/>
                   <MyButton name={'Закрыть новость'}/>
            </div>
        </div>

    }
}

export default PostNews;