import React, { Component } from 'react';
import './TableRow.css';

export class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.country}</td>
        <td>{this.props.capital}</td>
        <td>{this.props.region}</td>
        <td>{this.props.subregion}</td>
        <td>{this.props.language}</td>
      </tr>
    )
  }
}

export default TableRow;
