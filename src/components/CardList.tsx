import '../styles/App.css'
import { useSelector } from "react-redux"
import CardItems from './CardItems';

const CardList = (props: any) => {

    const items: any = useSelector<{ state: any, itemsReducer: any }>(state => state.itemsReducer.items);

    const card = [...items].filter((posts, index) => (posts.amountPosts > 0))
    return (

        <div className='posts__wrapper'>
            <div className='posts__title' style={{ textAlign: 'center', fontSize: '29px' }}>
                {props.title}
            </div>
            {card.map((posts: any, index: number) =>
                <CardItems number={index + 1} admin={props.admin} posts={posts} key={posts.id} />)
            }
        </div>
    )
}

export default CardList;