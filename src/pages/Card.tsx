import React from 'react';
import '../styles/App.css'
import { useDispatch, useSelector } from "react-redux"
import { initialStateAction } from '../actions/itemsAction';
import { foundPostsAction } from '../actions/foundItemsAction';
import { fetchItems } from '../serivces/items';
import { Watch } from 'react-loader-spinner'
import CardList from '../components/CardList';

const Card = (props : any) => {

  const dispatch = useDispatch();

  const posts : any = useSelector<{ state : any , itemsReducer: any }>(state => state.itemsReducer.items);
  const filter : any = useSelector<{ state : any , filterReducer: any }>(state => state.filterReducer.filter);
  const isLoaded : any = useSelector<{ state : any , isLoadedReducer: any , isLoadedItems : any }>(state => state.isLoadedReducer.isLoadedItems);


  const initialState = (postsArticle : object) => {
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
          <CardList title='Корзина' admin={props.admin} />
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

export default Card;