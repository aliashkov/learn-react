import React from 'react';
import styles from './MyTitle.module.css'

class MyTitle extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <h1 className={styles.title}>История событий : {this.props.value}</h1>

    }
}

export default MyTitle;