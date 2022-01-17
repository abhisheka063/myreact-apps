import React from 'react'
import './index.css'

class CartItem extends React.Component{
    render(){
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={styles.itemName}>Phone</div>
                    <div style={styles.detail}>Price</div>
                    <div style={styles.detail}>Quantity:1</div>
                    <div className='cart-item-actions'>
                        {/* {Buttons} */}
                    </div>

                </div>


            </div>

        );
    }
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:'#ccc',
        },
    detail:{
        color:'#777'
    },
    itemName:{
        fontSize:22,
        fontWeight:'bold'
    }
   
}

export default CartItem;