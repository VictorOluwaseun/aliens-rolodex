import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
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

 handleChange = e => {
  this.setState({ searchField: e.target.value });
 };

 render() {
  const { aliens, searchField } = this.state;
  const filteredAliens = aliens.filter(alien =>
   alien.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
   <>
    <div className="App">
     <h1>Aliens Rolodex</h1>
     <SearchBox onChange={this.handleChange} placeholder="search aliens" />

     {!aliens.length && <h2 className="loading">Loading...</h2>}
     {/* {!filteredAliens.length && <h2>No Alien with the name {searchField}</h2>} */}
     {/* <CardList aliens={filteredAliens.length ? filteredAliens : aliens} /> */}
     <CardList aliens={filteredAliens} />
    </div>
   </>
  );
 }
}

export default App;
