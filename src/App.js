import React, { Component } from 'react'
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import CountryTable from './components/CountryTable/CountryTable';

export class App extends Component {
  constructor(props) {
    super(props);

    this.data = []; // this data should not live in state
    this.state = {
      country: '',
      region: '',
      subregion: '',
      isLoading: true,
    };
  }

  // fetch src data from JSON url (on Github)
  //UNSAFE_componentWillMount() we can use it
  componentDidMount() {
    // Where we're fetching data from
    fetch(`https://raw.githubusercontent.com/mledoze/countries/master/countries.json`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      .then(data => {
        let array = [];

        for (let i = 0; i < data.length; i++) {
          let entry = {};
          //key value pairs
          entry.country = data[i].name.official;
          entry.capital = data[i].capital;
          entry.region = data[i].region;
          entry.subregion = data[i].subregion;
          // get first child of the languages object
          entry.language = data[i].languages[Object.keys(data[i].languages)[0]];

          array[i] = entry;
        }
        this.data = array;
        this.setState({
          isLoading: false,
        });
      })

      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }

  handleSearchEvents = (title, name) => {
    this.setState({ [name]: title });
  }

  render() {
    console.log(this.data); // data is array of objects
    const filteredData = this.data.filter((dataObj)=> (dataObj.country.indexOf(this.state.country) !== -1)&&
    (dataObj.region.indexOf(this.state.region) !== -1)&&
    (dataObj.subregion.indexOf(this.state.subregion) !== -1));
  

    return (
      <div className="App">
        <h1>Country/Capital Data Multi-Search Service</h1>
        <SearchBar
          country={this.state.country}
          region={this.state.region}
          subregion={this.state.subregion}
          handleSearchEvents={this.handleSearchEvents} />
        <CountryTable
          country={this.state.country}
          region={this.state.region}
          subregion={this.state.subregion}
          data={filteredData} /> {/* should pass filtered data into CountryTable*/}
      </div>
    )
  }
}

export default App;

// <p>{this.state.data}</p>


