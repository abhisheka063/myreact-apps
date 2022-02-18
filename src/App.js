import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import {
  collection,
  getFirestore,
  setDoc,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();
    //calling super because we are using class which is inheriting a parent class /we need to call his constructor here
    this.state = {
      products: [],
      loading: true,
    };
    this.db = getFirestore();
    this.call = collection(this.db, "products");

    /*  this.increaseQuantity=this.increaseQuantity.bind(this)//we are doing this because without this the object 
    reference will lost and function will return undefined because here we are assigning class refrence to a new var
    */
  }
  // Instead of using binding we can also use arrow function which auto binds it
  componentDidMount() {
    //we can also use getDocs(call) it return promise but here using snapshot for realtime update
    onSnapshot(
      this.call,
      (item) => {
        console.log("again");
        const products = item.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          console.log("again");
          return data;
        });
        this.setState({
          products: products,
          loading: false,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //Functions

  handleIncrease = (product) => {
    const { products } = this.state;

    const index = products.indexOf(product); //got the current item index
    const docRef = doc(this.db, "products", products[index].id);

    updateDoc(docRef, {
      qty: products[index].qty + 1,
    }).then(() => {
      console.log("Updated");
    });
  };

  handledecrease = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    const docRef = doc(this.db, "products", products[index].id);
    updateDoc(docRef, {
      qty: products[index].qty - 1,
    }).then(() => {
      console.log("Updated-del");
    });
    //added constraint in case item is 0
    if (product.qty === 0 || product.qty <= 0) {
      this.handleDelete(product);
      console.log("below");
    }
  };

  handleDelete = (product) => {
    const { products } = this.state;
    const docRef = doc(this.db, "products", product.id);
    deleteDoc(docRef).then(() => {
      console.log("Deleted");
    });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  getTotalPrice = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal += product.price * product.qty;
      return cartTotal;
    });
    return cartTotal;
  };
  addItems = () => {
    // this.call
    setDoc(doc(this.call), {
      title: "Test",
      qty: 1,
      price: 872,
      img: "",
    }).then(() => {
      console.log("Added");
    });
  };

  render() {
    const { products, loading } = this.state;

    return (
      <div className="App">
        <Navbar getCartCount={this.getCartCount()} />
        <button
          onClick={() => this.addItems()}
          style={{ padding: 5, width: 100, margin: 4 }}
        >
          Add items
        </button>
        <Cart
          products={products}
          handleIncrease={this.handleIncrease}
          handledecrease={this.handledecrease}
          handleDelete={this.handleDelete}
        />
        {loading && <h1>Loading..</h1>}
        <div style={{ fontSize: "1.6rem", padding: 4 }}>
          TOTAL:{this.getTotalPrice()}
        </div>
      </div>
    );
  }
}

export default App;
