import React from 'react';
import styles from './MyButton.module.css'

class MyButtonSort extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <button className={styles.myBtn} onClick={this.props.sortReverse}> {this.props.name}
        </button>;

    }
}

export default MyButtonSort;