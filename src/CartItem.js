import React from 'react'
import './/css/index.css'

const CartItem = (props) => {
    const {
        product,
        handleIncrease,
        handledecrease,
        handleDelete } = props
    const { 
        price,
        title, 
        qty } = props.product;
        
    return (

        <div className='cart-item'>
            <div className='left-block' style={styles.image}>
                <img style={styles.image} alt ='itemimage' src={product.img}/>
            </div>
            <div className='right-block'>
                <div style={styles.itemName}>{title}</div>
                <div style={styles.detail}>Rs.{price}</div>
                <div style={styles.detail}>Qty:{qty}</div>
                <div className='cart-item-actions'>

                    {/* {Buttons} */}
                    <img alt='increase'
                        className='action-icons'
                        src='https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1644430542~hmac=2fe7cd5564aee05c77692b518999b991'
                        onClick={() => handleIncrease(product)}>
                    </img>
                    <img alt='decrease'
                        className='action-icons'
                        src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                        onClick={() => handledecrease(product)}>
                    </img>
                    <img alt='delete'
                        className='action-icons'
                        src='https://cdn-icons-png.flaticon.com/512/1214/1214926.png'
                        onClick={() => handleDelete(product)}>
                    </img>
                </div>

            </div>


        </div>

    );
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