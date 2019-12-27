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
     <CardList aliens={this.state.aliens} />
    </div>
   </>
  );
 }
}

export default App;
