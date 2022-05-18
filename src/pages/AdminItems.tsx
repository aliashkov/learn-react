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

const AdminItems = (props : any) => {

  const dispatch = useDispatch();

  const posts : any = useSelector<{ state : any , itemsReducer: any }>(state => state.itemsReducer.items);
  const filter : any = useSelector<{ state : any , filterReducer: any }>(state => state.filterReducer.filter);
  const isLoaded : any = useSelector<{ state : any , isLoadedReducer: any , isLoadedItems : any }>(state => state.isLoadedReducer.isLoadedItems);
  const isSorted : any = useSelector<{ state : any , isSortedReducer: any }>(state => state.isSortedReducer.isSorted);


  const initialState = (postsArticle : object) => {

    if (isSorted) {
      const sortedPosts = posts.sort((a : any, b : any) => {
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
    const initialPosts = posts.map((posts : object, index : number) => (
      (index === 0) ? { ...posts, hidden: false } : { ...posts, hidden: true }
    ))
    dispatch(initialStateAction(initialPosts))
  }

  React.useEffect(() => {
    if (!isLoaded)
      dispatch(fetchItems() as any)
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
          <Watch 
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