import React, { useState, useMemo } from 'react';
import PostList from './components/PostList';
import './styles/App.css'
import PostAdd from './components/PostAdd';
import PostHeader from './components/PostHeader';
import data from './data'

function App() {

  const [news, setNews] = useState(data);
  const [filter, setFilter] = useState('')
  const [isSorted, setIsSorted] = useState(false)




  const initialState = () => {
    const posts = [...news].map((news, index) =>
      (index === 0)
        ?
        { ...news, hidden: false } 
        :
        { ...news, hidden: true }
    );
    return setNews(posts)
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
    initialState();
  }

  const addVisibleValue = (id, visible) => {
    const posts = [...news].map((news, index) =>
      (news.id === id)
        ?
        { ...news, hidden: visible }
        :
        { ...news }
    );
    return setNews(posts)
  }

  React.useEffect(() => {
    initialState();
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




  return (

    <div className='App'>
      <PostHeader found={foundArray} news={news} filter={filter} initialState={initialState} isSorted={isSorted} sortReverse={sortReverse} setFilter={setFilter} />
      <PostAdd create={createNews} news={news} />
      <PostList addVisibleValue={addVisibleValue} filter={filter} news={searchedNews} title='Новости' />
    </div>
  );
}

export default App;


