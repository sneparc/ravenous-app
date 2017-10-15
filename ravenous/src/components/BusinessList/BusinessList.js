import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        { /* callback function with one parameter */ }
        { this.props.businesses.map(function (business){
          // return needs (); because <Business /> instance have multiple lines
          return (
            <Business business={ business } key={business.id} />
          );
        }) }
      </div>      
    );
  }
}


export default BusinessList;

