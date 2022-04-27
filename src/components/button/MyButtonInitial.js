import React from 'react';
import styles from './MyButton.module.css'

class MyButtonInitial extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <button className={styles.myBtn} onClick={() => { this.props.initialState(this.props.news) }}> {this.props.name}
        </button>;

    }
}

export default MyButtonInitial;