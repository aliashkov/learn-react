import React from 'react';
import styles from './MyButton.module.css'

class MyButtonShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <button className={styles.myBtn} onClick={() => { this.props.addVisibleValue(this.props.id, this.props.visible) }}> {this.props.name}
        </button>;

    }
}

export default MyButtonShow;