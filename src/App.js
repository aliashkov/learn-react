import React, { useState } from 'react'

const sum = ((a, b) => (a + b))

const MyComponents = () => {
  return <div>
    <h1>Title</h1>
    <button> Button1 </button>
    <button> Button2 </button>
  </div>
}

const MyComponents2 = () => {
  return <div>
    <ul>
      <li>Молоко</li>
      <li>Сахар</li>
      <li>Мука</li>
    </ul>
    <button> Button3 </button>
  </div>
}

const posts = {
  name: "Посты", 
  title: 'Нажать' 
};

const PostsComponent = () => {
  return <div>
    <h1>{posts.name}</h1>
    <button> {posts.title} </button>
  </div>
}

const ports = [
  { title: 'Javacript'},
  { title: 'React'},
  { title: 'Vue' },
]


//{sum(2, 3)}
//{sum(0.1, 0.2)}
//<MyComponents/>
//<MyComponents2/>
//<PostsComponent/>
//{ports.map(port => port.title)}

function App() {

  return (
    <div className="App">
      {ports.map(port => port.title)}
    </div>
  );
}

export default App;
