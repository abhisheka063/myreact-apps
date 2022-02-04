import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {

    const { products, handleIncrease, handledecrease, handleDelete } = props;
    console.log(products)
    return (
        <div className="Cart">
            {products.map((product) => {
                return <CartItem product={product} key={product.id} handleIncrease={handleIncrease} handledecrease={handledecrease} handleDelete={handleDelete} />
            })}


        </div>
    )

}

export default Cart;