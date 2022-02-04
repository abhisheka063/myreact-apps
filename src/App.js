
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component {
  constructor() {
    super();
    //calling super because we are using class which is inheriting a parent class /we need to call his constructor here
    this.state = {
      products: [{
        price: 8990,
        title: 'Phone',
        qty: 1,
        img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        id: 1
      },
      {
        price: 8,
        title: 'Pen',
        qty: 10,
        img: 'https://media.istockphoto.com/photos/pen-picture-id1059543698?s=612x612',
        id: 2
      },
      {
        price: 89900,
        title: 'Laptop',
        qty: 1,
        img: 'https://media.istockphoto.com/photos/modern-laptop-on-white-background-picture-id1140541722',
        id: 3
      },
      {
        price: 89,
        title: 'Toy',
        qty: 1,
        img: 'https://media.istockphoto.com/photos/unicorn-plush-toy-sitting-isolated-on-white-background-picture-id1314268502?s=612x612',
        id: 4
      }
      ]
    }
    /*  this.increaseQuantity=this.increaseQuantity.bind(this)//we are doing this because without this the object 
    reference will lost and function will return undefined because here we are assigning class refrence to a new var
    */
    // Instead of using binding we can also use arrow function which auto binds it
  }
  render() {
    const { products } = this.state;
    const handleIncrease = (product) => {
      const index = products.indexOf(product);//got the current item index 
      console.log(product[index], index);
      products[index].qty += 1;
      this.setState({
        products: products

      })
    }

    const handledecrease = (product) => {
      const index = products.indexOf(product);//got the current item index 
      products[index].qty -= 1;
      this.setState({
        products: products

      })
      //added constraint in case item is 0
      if(product.qty===0 || product.qty <= 0){
        handleDelete(product)
      }
    }
    const getCartCount=()=>{
      const {products}=this.state;
      let count=0;
      products.forEach((product)=>{
        count+=product.qty;
        
      })
      return count
    }

    const handleDelete = (product) => {

      //filtering data which are except this
      const temp = products.filter((prod) => {
        return prod.id !== product.id;
      })
      this.setState({
        products: temp
      })

    }

    const getTotalPrice=()=>{
      const {products}=this.state;
      let cartTotal=0;
      products.map((product)=>{
        cartTotal+=product.price*product.qty;
        return cartTotal
      })
      return cartTotal
    }
    return (
      <div className="App">
        <Navbar getCartCount={getCartCount()}/>
        <Cart 
        products={products}
         handleIncrease={handleIncrease} 
         handledecrease={handledecrease}
         handleDelete={handleDelete} 
          />
        <div style={{fontSize:'1.6rem',padding:4}}>
          TOTAL:{getTotalPrice()}

        </div>
      </div>
    );
  }
}

export default App;
