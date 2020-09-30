import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./Pages/Home.js"
import MyBooks from "./Pages/MyBooks.js"
import Navigation from "./Pages/Navigation.js"
import NotFound from "./Pages/NotFound.js"

class App extends Component {
  constructor(){
    super()
    this.state = {
      searchResults: []
    } 
    this.update = this.update.bind(this);
  }
  update = (arr) =>{
    this.setState({searchResults: arr});
    console.log(arr)


  }
  render(){ 
    return (
      <>
        <Router>
          <div className="App">
            <Navigation />
              <Switch>
                <Route exact path="/" render={() => (<Home update={this.update}/> )}/>
                <Route path="/MyBooks" render={() => (<MyBooks info={this.state.searchResults}/>)}/>
                <Route path="*" Component={NotFound} />
              </Switch> 
            </div> 
          </Router>
        </>
    );
  }

}

export default App;