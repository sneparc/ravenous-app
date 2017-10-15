import React from 'react';
import './App.css';

 import BusinessList from './components/BusinessList/BusinessList';
 import SearchBar from './components/SearchBar/SearchBar';
 import { Yelp } from './util/yelp';


 class App extends React.Component {
  constructor(props){
    super(props);
    this.state= { 
      businesses: [] 
    };
   this.searchYelp=this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy){
    Yelp.search(term, location, sortBy).then(function (businesses){
      this.setState({businesses: businesses})
    })
  }
  render() {
    return (
      <div className="App">
  <h1>ravenous</h1>
  <SearchBar searchYelp = {this.searchYelp}/>
   <BusinessList  />
</div>
    );
  }
}

export default App;
