
import React, { useState }  from 'react';
import "./activity.css"
import ReactDOM from 'react-dom';


const ProductRow = () => {
    var name = this.props.product.stocked ?
        <td style={{background:'#F5FFFA'}}>{this.props.product.name}</td> :
        <td style={{background: '#FFF1F6'}}>
          {this.props.product.name}
        </td>;
    return (
        <tr>
        {name}
        <td>{this.props.product.price}</td>
      </tr>
    );
  };

  const ProductCategory = () => {
    return <tr className="category"><td colSpan="2">{this.props.category}</td></tr>
  };

  const ProductTable = () => {
    var rows = [];
    var category = '';
    this.props.products.forEach(function(product) {
      if(product.name.toLowerCase().indexOf(this.props.searchVal.toLowerCase()) == -1 || (this.props.checkVal && !product.stocked)) return;
      if(product.category !== category) {
        rows.push(<ProductCategory category={product.category} key={product.category}/>);
        category = product.category;
      }
      rows.push(<ProductRow product={product} key={product.name}/>);
      
    }.bind(this));
    return (
        <table className="table">
          <thead>
            <tr><th>Name</th><th>Price</th></tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
    )
  };

  const Search = () => {

   const handleChange =()=> {
      this.props.onInput(this.refs.search.value, this.refs.stockIn.checked)
    }
    return (
        <div>
        <input className="search" type="text" placeholder="Search..." ref="search"  />
        <p>
          <input className="stock" type="checkbox" ref="stockIn" />
          {' '}
          <span style={{color: '#FFF'}}>Only show products in stock</span>
        </p>
      </div>
    );
  };

  const Table = () => {
    const [search, setSearch]= useState('');
     const [stockIn, setStock] = useState(false);
     const handleInput =(search, stock)=> {
         
        this.setSearch(search)
        this.setStock(stock)
     }
     return (
        <div>
        <Search searchVal={search} checkVal={stockIn} />
        <ProductTable searchVal={search} checkVal={stockIn} products={PRODUCTS}/>
      </div>
     );
   };

  
  var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];

  export default class Activity extends React.Component{
      render(){
          return(
            <Table products={PRODUCTS}/>
          )
      }
  }
  
 // ReactDOM.render(<Table products={PRODUCTS}/>,document.getElementById('table-container'));
  
  