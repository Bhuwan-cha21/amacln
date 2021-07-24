import styled from 'styled-components'
import React from 'react'
function CartTotal({cartItems}){
    const getTotal = () => {
        let Total = 0;
        // Loop through all cart items
        cartItems.forEach((item) => {
            // add the quantity of the cart item to tota;
            Total += item.product.price*item.product.Quantity;
        })

        return Total;
    }

    return(
        <Container>
            <Subtotal> <h2>Total:{getTotal()}</h2></Subtotal>
           <CheckoutButton>Check Out</CheckoutButton>
        </Container>
    )
}
export default CartTotal

const Container = styled.div`
    flex: 0.3;
    padding: 20px;
    background-color: white;
`
const Subtotal = styled.h2`
    margin-bottom: 16px;
`

const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    // vertical - horizontal
    padding: 4px 8px;
    border: 2px solid #a88734;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        background:  #ddb347;
    }
`