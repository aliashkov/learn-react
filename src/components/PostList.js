import React from 'react';
import PostNews from './PostNews';

class PostList extends React.Component {
    constructor(props) {
        super(props);

    }

    sortReverse(){
        return this.props.news.sort((a, b) => {
            if (a.title > b.title){
                return -1
            } else if (a.title < b.title){
                return 1
            } else {
              return 0
            }
        })
    }

    render() {
        this.sortReverse()
        return <div>
            <h1 style={{ textAlign: 'center' }}>
                {this.props.title}
            </h1>
            {this.props.news.map((news) =>
                    <PostNews news={news} key={news.id} />)
            }
        </div>

    }
}

export default PostList;