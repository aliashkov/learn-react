import React from 'react';
import PostList from '../components/PostList';
import '../styles/App.css'
import PostHeader from '../components/PostHeader';
import { useDispatch, useSelector } from "react-redux"
import { initialStateAction } from '../actions/itemsAction';
import { foundPostsAction } from '../actions/foundItemsAction';
import { fetchItems } from '../serivces/items';
import { Watch } from 'react-loader-spinner'

const UserItems = (props: any) => {

  const dispatch = useDispatch();

  const posts: any = useSelector<{ state: any, itemsReducer: any }>(state => state.itemsReducer.items);
  posts.sort((a: any, b: any) => {
    if (a.id < b.id) {
      return -1
    } else if (a.id > b.id) {
      return 1
    } else {
      return 0
    }
  });
  const filter: any = useSelector<{ state: any, filterReducer: any }>(state => state.filterReducer.filter);
  const isLoaded: any = useSelector<{ state: any, isLoadedReducer: any, isLoadedItems: any }>(state => state.isLoadedReducer.isLoadedItems);
  console.log(posts)


  const initialState = (postsArticle: object) => {

    const initialPosts = posts.map((posts: object, index: number) => (
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
          <PostHeader initialState={initialState} />
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

export default UserItems;
