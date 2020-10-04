
import React, { useState } from 'react';
import "./activity.css"
import {

  Button,
  Col,
  Card,
  CardHeader

} from "shards-react";




var ProductRow = ({ product }) => {
  var hour = <td className="td-custum" style={{ background: '#F5FFFA' }}>{product.hour}</td>;
  return (
    <tr>
      {hour}
      <td className="td-custum">{product.course}</td>
    </tr>
  );
}

var ProductCategory = ({ category }) => {
  return <tr className="category"><td className="td-custum" colSpan="2">{category}</td></tr>
}

var ProductTable = ({ checkVal, products, searchVal }) => {
  var rows = [];
  var category = '';
  products.forEach(function (product) {
    if (product.hour.toLowerCase().indexOf(searchVal.toLowerCase()) == -1 || product.course.toLowerCase().indexOf(searchVal.toLowerCase()) == -1 || product.date.toLowerCase().indexOf(searchVal.toLowerCase()) == -1) return;
    if (product.date !== category) {
      rows.push(<ProductCategory category={product.date} key={product.date} />);
      category = product.date;
    }
    rows.push(<ProductRow product={product} key={product.hour} />);

  }.bind(this));
  return (
    <table className="table">
      <thead>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
class Search extends React.Component {
  constructor(props) {
    super(props)
  }
  handleChange() {
    this.props.onInput(this.refs.search.value)
  }
  render() {
    return (
      <div className="search">
        <input className=" form-control " size="10" type="text" ref="search" placeholder="rechercher..." onChange={this.handleChange.bind(this)} value={this.props.searchVal} />
      </div>
    )
  }
}


class Table extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      search: '',
      stockIn: false
    }
  }
  handleInput = (search) => {
    this.setState({
      search: search,
    })
  }
  render() {
    return <div>
      <Search searchVal={this.state.search} checkVal={this.state.stockIn} onInput={this.handleInput} />
      <ProductTable searchVal={this.state.search} checkVal={this.state.stockIn} products={this.props.products} />
      <Col className="text-center view-report">
        <Button pill outline size="sm" className="mb-2">
          <i className="material-icons mr-1">person_add</i>  Suivant
        </Button>
      </Col>
    </div>
  }
}


export default class Activity extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="table-container">
        <Card small className="mb-4 pt-3">
          <CardHeader className="border-bottom text-center">
            <h6 className="m-0">Historique de Reservation</h6>
          </CardHeader>

          <Table products={this.props.historyReservation} />
        </Card>

      </div>
    )
  }
}



