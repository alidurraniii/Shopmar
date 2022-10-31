import React from 'react'
import Cards from './Cards'
import '../css/cart.css'

function Cart(props) {
    console.log("data from parent", props)

    const itemdatas = props.cartdata.map((itemdata) => {
        return (

            <li className='list-group-item'>{itemdata.title}: {itemdata.desc}</li>


        )

    });

    const success = () => {
        alert("SUCCESSFULLY BOUGHT");
    }

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h2 className="cart-title">Cart  <i class="fa-solid fa-cart-shopping"></i></h2>
                    <h6 className="card-subtitle mb-2 text-muted">The total number of items you have selected</h6>
                    <hr></hr>
                    <h5 className="card-subtitle mb-2 text-muted">ITEMS</h5>
                    <div className="cart-items-selected">
                        <ol className="list-group list-group-flush">
                            <li className='list-group-item'>{itemdatas}</li>
                        </ol>
                    </div>

                    <button onClick={success} type="button" className="btn btn-outline-success cart-buttons">Checkout</button>
                    <button onClick={props.clearCart} type="button" className="btn btn-outline-danger cart-buttons">Clear Cart</button>

                </div>
            </div>
        </div>
    )
}

export default Cart