import React from 'react';
import PostList from '../components/PostList';
import '../styles/App.css'
import PostAdd from '../components/PostAdd';
import { useDispatch, useSelector } from "react-redux"
import { seatchStringAction } from '../actions/filterAction';
import { initialSortAction } from '../actions/isSortedAction';
import { foundPostsAction } from '../actions/foundItemsAction';
import { initialStateAction, postsSortAction } from '../actions/itemsAction';
import { fetchItems } from '../serivces/items';
import { Watch } from 'react-loader-spinner'

const AdminItems = (props) => {

  const dispatch = useDispatch();
  const posts = useSelector(state => state.itemsReducer.items)
  console.log(posts)
  const filter = useSelector(state => state.filterReducer.filter)
  const isSorted = useSelector(state => state.isSortedReducer.isSorted)
  const isLoaded = useSelector(state => state.isLoadedReducer.isLoadedItems)
  console.log(isLoaded)

  const initialState = (postsArticle) => {

    if (isSorted) {
      const sortedPosts = posts.sort((a, b) => {
        if (a.title < b.title) {
          return -1
        } else if (a.title > b.title) {
          return 1
        } else {
          return 0
        }
      });
      dispatch(postsSortAction(sortedPosts));
      dispatch(initialSortAction())
    }
    dispatch(seatchStringAction(''));
    const initialPosts = posts.map((posts, index) => (
      (index === 0) ? { ...posts, hidden: false } : { ...posts, hidden: true }
    ))
    dispatch(initialStateAction(initialPosts))
  }

  React.useEffect(() => {
    if (!isLoaded)
      dispatch(fetchItems())
    initialState(posts);
  }, []);


  React.useEffect(() => {
    const foundItems = [...posts].filter(post => post.title.toLowerCase().includes(filter.toLowerCase()))
    dispatch(foundPostsAction(foundItems))
  }, [filter, posts]);


  return (

    <div className='App'>
      {(isLoaded)
        ? <>
          <PostAdd />
          <PostList title='Новости' admin={props.admin} />
        </>
        : <div className='watch'>
          <Watch className='watch'
            height="250"
            width="250"
            color='black'
            ariaLabel='loading'
          />
        </div>
      }
    </div>
  );
}

export default AdminItems;