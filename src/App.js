
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
        qty: 0,
        img: '',
        id: 1
      },
      {
        price: 8,
        title: 'Pen',
        qty: 10,
        img: '',
        id: 2
      },
      {
        price: 89900,
        title: 'Laptop',
        qty: 1,
        img: '',
        id: 3
      },
      {
        price: 89,
        title: 'Toy',
        qty: 1,
        img: '',
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
      //creating constraint if product is 0
      if (product.qty <= 0) { return }
      const index = products.indexOf(product);//got the current item index 
      products[index].qty -= 1;
      this.setState({
        products: products

      })
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
    return (
      <div className="App">
        <Navbar />
        <Cart products={products} handleIncrease={handleIncrease} handledecrease={handledecrease} handleDelete={handleDelete} />
      </div>
    );
  }
}

export default App;
