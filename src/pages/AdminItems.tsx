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
import MyButton from '../components/button/MyButton';
import { sortedPostsAction, sortByAmountAction } from '../actions/sortedItemsAction';
import { useState } from 'react';


const AdminItems = (props: any) => {

  const dispatch = useDispatch();

  const [isClickedSort, setIsClickedSort] = useState(false);

  const posts: any = useSelector<{ state: any, itemsReducer: any }>(state => state.itemsReducer.items);
  const isLoaded: any = useSelector<{ state: any, isLoadedReducer: any, isLoadedItems: any }>(state => state.isLoadedReducer.isLoadedItems);
  const isSorted: any = useSelector<{ state: any, isSortedReducer: any }>(state => state.isSortedReducer.isSorted);

  console.log(posts)

  const initialState = (postsArticle: object) => {
    console.log(isLoaded)
    if (isSorted) {
      const sortedPosts = posts.sort((a: any, b: any) => {
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
    dispatch(foundPostsAction([...posts]))
  }, [isClickedSort , posts]);

  const sortIncrementByAmount = () => {
    const sortedPostsByAmount = posts.sort((a: any, b: any) => {
      if (a.amountPosts < b.amountPosts) {
        return -1
      } else if (a.amountPosts > b.amountPosts) {
        return 1
      } else {
        return 0
      }
    });
    const initialPosts = sortedPostsByAmount.map((posts: object, index: number) => (
      (index === 0) ? { ...posts, hidden: false } : { ...posts, hidden: true }
    ))
    dispatch(sortedPostsAction(initialPosts))
    dispatch(sortByAmountAction())
    dispatch(foundPostsAction(initialPosts))
    setIsClickedSort(!isClickedSort)

  }

  const sortDecrementByAmount = () => {
    const sortedPostsByAmount = posts.sort((a: any, b: any) => {
      if (a.amountPosts > b.amountPosts) {
        return -1
      } else if (a.amountPosts < b.amountPosts) {
        return 1
      } else {
        return 0
      }
    });
    const initialPosts = sortedPostsByAmount.map((posts: object, index: number) => (
      (index === 0) ? { ...posts, hidden: false } : { ...posts, hidden: true }
    ))
    dispatch(sortedPostsAction(initialPosts))
    dispatch(sortByAmountAction())
    dispatch(foundPostsAction(initialPosts))
    setIsClickedSort(!isClickedSort)
  }



  return (

    <div className='App'>
      {(isLoaded)
        ? <>
          <div className='buttons__form'>
            <MyButton onClick={sortIncrementByAmount} > По возрастанию </MyButton>
            <MyButton onClick={sortDecrementByAmount} > По убыванию </MyButton>
          </div>
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