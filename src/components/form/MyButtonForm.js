import React from 'react';
import MyButton from '../button/MyButton.js';
import styles from './MyButtonForm.module.css'

class MyButtonForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={styles.wrapper}>
            <MyButton addTurn={this.props.addTurn} name={'1'} />
            <MyButton addTurn={this.props.addTurn} name={'2'} />
            <MyButton addTurn={this.props.addTurn} name={'3'} />
            <MyButton addTurn={this.props.addTurn} name={'4'} />
            <MyButton addTurn={this.props.addTurn} name={'5'} />
        </div>

    }
}

export default MyButtonForm;