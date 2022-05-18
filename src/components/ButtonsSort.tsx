import '../styles/App.css'
import { useSelector } from "react-redux"
import CardItems from './CardItems';
import { useDispatch } from 'react-redux';
import { sortByAmountAction, sortedPostsAction } from '../actions/sortedItemsAction';
import { foundPostsAction } from '../actions/foundItemsAction';
import MyButton from './button/MyButton';

const ButtonsSort = (props: any) => {

    const dispatch = useDispatch();

    const posts: any = useSelector<{ state: any, itemsReducer: any }>(state => state.itemsReducer.items);
    const filter: any = useSelector<{ state: any, filterReducer: any }>(state => state.filterReducer.filter);
    const isLoaded: any = useSelector<{ state: any, isLoadedReducer: any, isLoadedItems: any }>(state => state.isLoadedReducer.isLoadedItems);
    const isSorted: any = useSelector<{ state: any, isSortedReducer: any }>(state => state.isSortedReducer.isSorted);

    const sortedPostsAmount: any = useSelector<{ state: any, sortedItemsReducer: any }>(state => state.sortedItemsReducer.sortedItems);
    console.log(posts)

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
        console.log(sortedPostsByAmount)
        dispatch(sortedPostsAction(sortedPostsByAmount))
        dispatch(sortByAmountAction())
        dispatch(foundPostsAction(sortedPostsByAmount))

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
        console.log(sortedPostsByAmount)
        dispatch(sortedPostsAction(sortedPostsByAmount))
        dispatch(sortByAmountAction())
        dispatch(foundPostsAction(sortedPostsByAmount))
    }




    return (

        <div className='buttons__form'>
            <MyButton onClick={sortIncrementByAmount} > По возрастанию </MyButton>
            <MyButton onClick={sortDecrementByAmount} > По убыванию </MyButton>
        </div>
    )
}

export default ButtonsSort;