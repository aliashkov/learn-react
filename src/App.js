import React, { useState, useMemo } from 'react';
import PostList from './components/PostList';
import './styles/App.css'
import PostAdd from './components/PostAdd';
import PostHeader from './components/PostHeader';
import data from './data'
import {useDispatch , useSelector} from "react-redux"

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.customerReducer.cash)
  console.log(cash)
  const customers = useSelector(state => state.newsReducer.news)
  console.log(customers)

  const [news, setNews] = useState(data);
  const [filter, setFilter] = useState('')
  const [isSorted, setIsSorted] = useState(false)


  const initialState = (newsArticle) => {
    return setNews(newsArticle.map((news, index) => (
      (index === 0) ? { ...news, hidden: false } : { ...news, hidden: true }
    )))
  }

  const sortById = () => {
    news.sort((a, b) => {
      if (a.title > b.title) {
        return -1
      } else if (a.title < b.title) {
        return 1
      } else {
        return 0
      }
    })
    setIsSorted(true)
  }

  const sortInitial = () => {
    news.sort((a, b) => {
      if (a.title < b.title) {
        return -1
      } else if (a.title > b.title) {
        return 1
      } else {
        return 0
      }
    })
    setIsSorted(false)
  }

  const sortReverse = (isSorted) => {
    if (!isSorted) 
      sortById()
    else 
      sortInitial()
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
    return [...news].filter(post => post.title.toLowerCase().includes(filter.toLowerCase()))
  }, [filter, news])

  const getCash = () => {
     dispatch({type: "ADD_MONEY" , payload : 5})
     console.log(cash)
  }

  const addCash = () => {
     dispatch({type: "GET_MONEY" , payload : 5})
     console.log(cash)
  }



  return (
   
    <div className='App'>
       <button onClick={() => addCash()}>Пополнить</button>
       <button onClick={() => getCash()}>Забрать</button>
       <h1>{cash}</h1>
      <PostHeader found={foundArray} news={news} filter={filter} initialState={initialState} isSorted={isSorted} sortReverse={sortReverse} setFilter={setFilter} />
      <PostAdd create={createNews} news={news} />
      <PostList addVisibleValue={addVisibleValue} filter={filter} news={searchedNews} title='Новости' />
    </div>
  );
}

export default App;


