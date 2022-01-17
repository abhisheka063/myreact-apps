import React from 'react'
import './index.css'

class CartItem extends React.Component {
    constructor() {
        super();//calling super because we are using class which is inheriting a parent class /we need to call his constructor here
        this.state = {
            price: 899,
            title: 'Phone',
            qty: 0,
            img: ''
        }
        /*    this.increaseQuantity=this.increaseQuantity.bind(this)//we are doing this because without this the object reference will lost and function will return undefined because here we are assigning class refrence to a new var
            this.decreaseQuantity=this.decreaseQuantity.bind(this)
            this.deleteItems=this.deleteItems.bind(this)*/
        // Instead of using binding we can also use arrow function which auto binds it
    }
    increaseQuantity = () => {
        // here it will catch this.state bcz we have already binded this function in comstructor
        //there are two method of changing states 1. if you need previous state of object values,2. if you dont
        //set state 1
        /*
        this.setState({
            qty:this.state.qty+1
        })
        */
        //second state
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }
    decreaseQuantity = () => {
        this.setState((prevState)=>{
            if(prevState.qty==0){
                //here for now we are ony returning it we won't use alert inside a component
                return   
            }
            return{
                
                qty:prevState.qty-1
            }
        });

    }
    deleteItems = () => {
        console.log("deleted")

    }
    render() {
        const { price, title, qty } = this.state;//here we are getting 3 values from this.state object so that we can directly use them instead of writing this.state.key
        return (

            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={styles.itemName}>{title}</div>
                    <div style={styles.detail}>Rs.{price}</div>
                    <div style={styles.detail}>Qty:{qty}</div>
                    <div className='cart-item-actions'>

                        {/* {Buttons} */}
                        <img alt='increase'
                            className='action-icons'
                            src='https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1642444667~hmac=255c275e48ba51a0e506598b8f67f0da'
                            onClick={this.increaseQuantity}>
                        </img>
                        <img alt='decrease'
                            className='action-icons'
                            src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                            onClick={this.decreaseQuantity}>
                        </img>
                        <img alt='delete'
                            className='action-icons'
                            src='https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1642444692~hmac=48b83290bfdbcb78074f5314faa0c90f'
                            onClick={this.deleteItems}>
                        </img>
                    </div>

                </div>


            </div>

        );
    }
}
const styles = {
    image: {
        height: 120,
        width: 120,
        borderRadius: 4,
        backgroundColor: '#ccc',
    },
    detail: {
        color: '#777'
    },
    itemName: {
        fontSize: 22,
        fontWeight: 'bold'
    }

}

export default CartItem;