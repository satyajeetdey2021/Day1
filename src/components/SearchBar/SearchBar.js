import React, { Component } from 'react';
import './SearchBar.css'

export class SearchBar extends Component {

  handleOnChange = (e) => {
    //console.log('value: '+e.target.value+ ' name: '+ e.target.name);
    this.props.handleSearchEvents(e.target.value, e.target.name);
  };

  render() {
    return (
      <form className='SearchBarStyle'>
        <input 
          type="text"
          name='country'
          value={this.props.country}
          onChange={this.handleOnChange}
          placeholder='Countries...'/>
        <input 
          type="text" 
          name='region'
          value={this.props.region}
          onChange={this.handleOnChange}
          placeholder='Regions...'/>
        <input 
          type="text" 
          name='subregion'
          value={this.props.subregion}
          onChange={this.handleOnChange}
          placeholder='Subregions...'/>
      </form>
    )
  }
}

export default SearchBar
