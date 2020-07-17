import React, { Component } from 'react';
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './components/style.css';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListProduct from './components/ListProduct';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Container className="Header" fluid={true}>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home"><h1>Midterm 1_B</h1></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/create">AddProduct</Nav.Link>
              <Nav.Link href="/list">ListProduct</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
        <Router>
          <Switch>
            <Route path="/home"> <Products /></Route>
            <Route path="/create"> <AddProduct /></Route>
            <Route path="/list"> <ListProduct /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
