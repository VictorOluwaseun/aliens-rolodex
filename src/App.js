import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
 constructor() {
  super();
  this.state = { aliens: [] };
 }

 componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/users")
   .then(response => response.json())
   .then(users => this.setState({ aliens: users }));
 }

 render() {
  return (
   <>
    <div className="App">
     <CardList>
      {this.state.aliens.map(alien => (
       <h1 key={alien.id}>{alien.name}</h1>
      ))}
     </CardList>
    </div>
   </>
  );
 }
}

export default App;
