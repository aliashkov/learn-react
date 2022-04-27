import React from 'react';
import MyInput from './components/input/MyInput';
import PostList from './components/PostList';
import MyButton from './components/button/MyButton';
import './styles/App.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      news: [
        { id: 1, title: 'Новость 1', body: 'Какая-то новость' },
        { id: 2, title: 'Новость 2', body: 'Какая-то новость 2' },
        { id: 3, title: 'Новость 3', body: 'Какая-то новость 3' },
        { id: 4, title: 'Новость 4', body: 'Какая-то новость 4' },
        { id: 5, title: 'Новость 5', body: 'Какая-то новость 5' },
        { id: 6, title: 'Новость 6', body: 'Какая-то новость 6' },
      ],
      text: '',
      searchQuery: '',
    }
  }

  searchedPosts = () => {
    return [...this.state.news].filter(news => news.title.toLowerCase().includes(this.state.searchQuery))
  }

  addHiddenValue = () => {
    //console.log([...this.state.news].map(news => ({...news, hidden: false})))
    const array = {};
    if (this.state.news[0])
       return array.push([this.state.news[0]].map(news => ({...news, hidden: true})))
    return [...this.state.news].map(news => ({...news, hidden: false}))
  }



  render() {
    const added = this.addHiddenValue()
    console.log(added)
    const news = this.searchedPosts();
    return (
      <div className='App'>
        <div className='header__wrapper'>
          <MyInput
            placeholder='Поиск новости...'
            value={this.state.searchQuery}
            onChange={e => this.setState({ searchQuery: e.target.value })}
          />
          <MyButton name={'Отсортировать массив'}/>
        </div>

        <PostList news={news} title='Новости' />
      </div>
    );
  }
}
export default App;



/* <>
<input 
   type='text' 
   text={this.state.text}
   onChange={event => this.setState({text : event.target.value})}
/>
<button>Открыть новость</button>
<button>Закрыть новость</button>
</> */

/* 
  addTurn = (newTurn) => {
    console.log(this.state.news)
    const newValue = [...this.state.value, newTurn];
    if (newValue.length > 3)
      newValue.shift();
    this.setState({ value: newValue });
  }
 */
