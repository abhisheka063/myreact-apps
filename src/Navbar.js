import React from "react";

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.iconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="Cart Items">
                </img>
                <span style={styles.cartCount}>{props.getCartCount}</span>
            </div>
        </div>
    );

}

const styles = {
    nav: {
        height: 55,
        backgroundColor: '#3269a8',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIcon: {
        width: 40,
        height: 35

    },
    iconContainer: {
        position: 'absolute',
        right: 14,
        color: 'white'

    },
    cartCount: {
        position: 'relative',
        backgroundColor: 'yellow',
        borderRadius: '50%',
        right: 6,
        color: 'black',
        padding: '0px 6px',
        top: -20

    }
}


export default Navbar;