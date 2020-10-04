
import React, { useState }  from 'react';
import "./activity.css"
import {
  
  Button,
  Col,
  Card,
  CardHeader
  
} from "shards-react";




var ProductRow = ({product}) =>{
    var name = <td style={{background:'#F5FFFA'}}>{product.name}</td>;
    return (
      <tr>
        {name}
        <td>{product.price}</td>
      </tr>
    );
}

var ProductCategory = ({category}) =>{
  return <tr className="category"><td colSpan="2">{category}</td></tr>
}

var ProductTable = ({checkVal,products,searchVal}) =>{
  var rows = [];
  var category = '';
  products.forEach(function(product) {
    if(product.name.toLowerCase().indexOf(searchVal.toLowerCase()) == -1 || (checkVal && !product.stocked)) return;
    if(product.category !== category) {
      rows.push(<ProductCategory category={product.category} key={product.category}/>);
      category = product.category;
    }
    rows.push(<ProductRow product={product} key={product.name}/>);
    
  }.bind(this));
  return (
    <table className="table">
    <thead>
    </thead>
    <tbody>{rows}</tbody>
  </table>
  );
}

var Search = ({onInput,checkVal,searchVal,product}) =>{
  
 
  return (
    <div>
        <input className="search" type="text" placeholder="Search..."  value={searchVal}/>
        <p>
          <input className="stock" type="checkbox" checked={checkVal} />
          {' '}
          <span style={{color: '#FFF'}}>Only show products in stock</span>
        </p>
      </div>
  );
}

class Table extends React.Component{

  constructor(props){
    super(props)
    this.state={
      search: '',
      stockIn: false
    }
  }
  handleInput =(search, stock)=>{
    this.setState({
      search: search,
      stockIn: stock
    })
  }
  render(){
    return <div>
      <ProductTable searchVal={this.state.search} checkVal={this.state.stockIn} products={PRODUCTS}/>
      <Col className="text-center view-report">
          <Button  pill outline size="sm" className="mb-2">
          <i className="material-icons mr-1">person_add</i>  Suivant
        </Button>
        </Col>
    </div>
  }
}



var PRODUCTS = [
  {category: 'lundi 22 juin 2020', name: '10:00', stocked: true, price: 'Maths 10, Lucas'},
  {category: 'lundi 22 juin 2020', name: '12:30', stocked: true, price: 'English, Descartes'},
  {category: 'lundi 22 juin 2020', name: '16:00', stocked: false, price: 'French 22, Franka '},
  {category: 'jeudi 10 juillet 2020', name: '20:00', stocked: true, price: 'English, Touch'},
  {category: 'jeudi 10 juillet 2020', name: '21:00', stocked: false, price: 'Goegra 5, Warren'},
  {category: 'jeudi 10 juillet 2020', name: '22:00', stocked: true, price: 'Ec 7, Tchatseu'}
];
export default class Activity extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="table-container">
        <Card small className="mb-4 pt-3">
      <CardHeader className="border-bottom text-center">
      <h6 className="m-0">Historique de Reservation</h6>
      </CardHeader>
      <Table products={PRODUCTS}/>
    </Card>
              
      </div>
    )
  }
}



