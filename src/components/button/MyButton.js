import React from 'react';
import styles from './MyButton.module.css'

class MyButton extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <button className={styles.myBtn} onClick={() => { this.props.addTurn(this.props.name)}}> {this.props.name}
               </button>;

    }
}

export default MyButton;