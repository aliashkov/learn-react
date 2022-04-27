import React  from 'react';
import MyButtonForm from './components/form/MyButtonForm';
import MyTitle from './components/title/MyTitle';
import './styles/App.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
  }

  addTurn = (newTurn) => {
    const newValue = [...this.state.value, newTurn];
    if (newValue.length > 3)
      newValue.shift();
    this.setState({value: newValue});
  }


  render() {
    return (
      <>
        <MyButtonForm addTurn={this.addTurn}/>
        <MyTitle value={this.state.value} />
      </>
    );
  }
}
export default App;
