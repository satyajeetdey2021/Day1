import React, { Component } from 'react';
import TableRow from './TableRow';
import './CountryTable.css';

export class CountryTable extends Component {
  render() {
    let rows = [];

    //generate the table rows
    //based on container representational pattern and Hook, CountryTable should not have business logic
    this.props.data.forEach((dataObj) => {
      rows.push(
        <TableRow
          key={dataObj.country}
          country={dataObj.country}
          capital={dataObj.capital}
          region={dataObj.region}
          subregion={dataObj.subregion}
          language={dataObj.language} />);
    });

    return (
      <table className='tableStyle'>
        <thead>
          <tr>
            <th>Country</th>
            <th>Capital</th>
            <th>Region</th>
            <th>Subregion</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody className='tableBodyStyle'>
          {rows}
        </tbody>
      </table>
    )
  }
}

export default CountryTable
