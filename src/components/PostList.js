import React from 'react';
import PostNews from './PostNews';

class PostList extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        console.log(this.props)
        return <div>
            <h1 style={{ textAlign: 'center' }}>
                {this.props.title}
            </h1>
            {this.props.news.map((news) =>
                <PostNews addVisibleValue={this.props.addVisibleValue} news={news} key={news.id} />)
            }
        </div>

    }
}

export default PostList;