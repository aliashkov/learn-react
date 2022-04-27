import React from 'react';
import MyInput from './components/input/MyInput';
import PostList from './components/PostList';
import MyButtonSort from './components/button/MyButtonSort';
import './styles/App.css'
import MyButtonInitial from './components/button/MyButtonInitial';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      news: [
        { id: 1, title: 'Новость 1', body: 'Какая-то новость', hidden: false },
        { id: 2, title: 'Новость 2', body: 'Какая-то новость 2', hidden: true },
        { id: 3, title: 'Новость 3', body: 'Какая-то новость 3', hidden: true },
        { id: 4, title: 'Новость 4', body: 'Какая-то новость 4', hidden: true },
        { id: 5, title: 'Новость 5', body: 'Какая-то новость 5', hidden: true },
        { id: 6, title: 'Новость 6', body: 'Какая-то новость 6', hidden: true },
      ],
      text: '',
      searchQuery: '',
      firstStage: true,
    }
    this.sortReverse = this.sortReverse.bind(this);

  }

  searchedPosts = () => {
    return [...this.state.news].filter(news => news.title.toLowerCase().includes(this.state.searchQuery))
  }



  initialState = (newsArticle) => {
    console.log(newsArticle)
    return this.setState({
      news: newsArticle.map((news, index) => (
        (index === 0) ? { ...news, hidden: false } : { ...news, hidden: true }
      ))
    })
  }

  sortReverse() {
    this.state.news.sort((a, b) => {
      if (a.title > b.title) {
        return -1
      } else if (a.title < b.title) {
        return 1
      } else {
        return 0
      }
    })
    this.initialState(this.state.news);
  }

  addVisibleValue = (id, visible) => {
    return this.setState({
      news: [...this.state.news].map((news, index) => (
        (news.id === id) ? { ...news, hidden: visible } : { ...news }
      ))
    })
  }

  render() {
    const news = this.searchedPosts();
    return (
      <div className='App'>
        <div className='header__wrapper'>
          <MyInput
            placeholder='Поиск новости...'
            value={this.state.searchQuery}
            onChange={e => this.setState({ searchQuery: e.target.value })}
          />
          <MyButtonInitial name={'Сбросить состояния'} news={news} initialState={this.initialState} />
          <MyButtonSort sortReverse={this.sortReverse} name={'Отсортировать'} />
        </div>

        <PostList addVisibleValue={this.addVisibleValue} news={news} title='Новости' />
      </div>
    );
  }
}

export default App;

