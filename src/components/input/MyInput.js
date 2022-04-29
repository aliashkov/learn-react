import React from 'react'
import classes from './MyInput.module.css'


class MyInput extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    render() {
        return (
            <input onChange={() => { this.props.searchedposts(this.props.news) }}
                {...this.props} ref={this.ref} className={classes.myInput}>
            </input>
        )

    }
}

export default MyInput;