import React, { useState, useMemo} from 'react';
import PostList from './components/PostList';
import './styles/App.css'
import PostAdd from './components/PostAdd';
import PostHeader from './components/PostHeader';

function App() {

  const [news, setNews] = useState([
    { id: 1, title: 'Новость 1', body: 'Какая-то новость' },
    { id: 2, title: 'Новость 2', body: 'Какая-то новость 2' },
    { id: 3, title: 'Новость 3', body: 'Какая-то новость 3' },
    { id: 4, title: 'Новость 4', body: 'Какая-то новость 4' },
    { id: 5, title: 'Новость 5', body: 'Какая-то новость 5' },
    { id: 6, title: 'Новость 6', body: 'Какая-то новость 6' },
  ]);

  const [filter, setFilter] = useState('')


  const initialState = (newsArticle) => {
    return setNews(newsArticle.map((news, index) => (
      (index === 0) ? { ...news, hidden: false } : { ...news, hidden: true }
    )))
  }

  const sortReverse = () => {
    news.sort((a, b) => {
      if (a.title > b.title) {
        return -1
      } else if (a.title < b.title) {
        return 1
      } else {
        return 0
      }
    })
    initialState(news);
  }

  const addVisibleValue = (id, visible) => {
    return setNews([...news].map((news, index) => ((news.id === id) ? { ...news, hidden: visible } : { ...news })))
  }

  React.useEffect(() => {
    initialState(news);
  }, []);

  const foundArray = (newsArticle) => {
    return [...newsArticle]
  }


  const createNews = (newArticle) => {
    setNews([...news, newArticle])
  }

  const searchedNews = useMemo(() => {
    return [...news].filter(post => post.title.toLowerCase().includes(filter))
  }, [filter, news])




  return (

    <div className='App'>
      <PostHeader found={foundArray} news={news} filter={filter} initialState={initialState} sortReverse={sortReverse} setFilter={setFilter}/>
      <PostAdd create={createNews} news={news} />
      <PostList addVisibleValue={addVisibleValue} filter={filter}  news={searchedNews} title='Новости' />
    </div>
  );
}

export default App;


