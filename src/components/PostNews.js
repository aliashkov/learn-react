import React from 'react';
import MyButtonShow from './button/MyButtonShow';
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
                    {console.log()}
                    {(this.props.news.hidden) ? '' : (this.props.news.body)}
                </div>
            </div>
            <div className='news_buttons'>
                <MyButtonShow addVisibleValue={this.props.addVisibleValue} id={this.props.news.id} visible={false} name={'Открыть новость'} />
                <MyButtonShow addVisibleValue={this.props.addVisibleValue} id={this.props.news.id} visible={true} name={'Закрыть новость'} />
            </div>
        </div>

    }
}

export default PostNews;