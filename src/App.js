import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
 constructor() {
  super();
  this.state = { aliens: [], searchField: "" };
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
     <input
      type="search"
      placeholder="search aliens"
      onChange={e => {
       this.setState({ searchField: e.target.value }, () =>
        console.log(this.state.searchField)
       );
      }}
     />
     <CardList aliens={this.state.aliens} />
    </div>
   </>
  );
 }
}

export default App;
