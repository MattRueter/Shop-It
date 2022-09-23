import { useState } from 'react';
import '../css/cart.css';
import usrCart from '../data/usrCart.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';


export default function Cart() {
	const [currentCart, setCurrentCart] = useState(usrCart);


	const displayCart = currentCart.map((item, index) => {
		return (
			<CartItem
				img={item.img}
				product={item.product}
				price={item.price}
				quantity={item.quantity}
				total={item.quantity * item.price}
			/>
		)
	})

	return (
		<div id="cart">
			<Navbar />
			<div className="cartContainer">
				<div id="cartItemsBox">
					{displayCart}
				</div>
				<OrderSummary />
			</div>
			<Footer />
		</div>
	)
}

function CartItem({ img, product, price, quantity, total }) {
	let currencies = { dollars: "$", euros: "€", pounds: "£" };
	let crntCurrency = currencies.euros;

	return (
		<div className="cartitem">
			<img src={img} alt={product} className="cartItemImage"></img>

			<div className="cartItemInfo">
				<div>{product}</div>
				<div>
					<div>Item Price:</div>
					<div>{crntCurrency}{price}</div>
				</div>
				<div className="quantitybox">
					<div>{quantity}</div>
					<div>+</div>
					<div>-</div>
				</div>
				<div>
					<div>Total:</div>
					<div> {crntCurrency}{total}</div>
				</div>
			</div>

		</div>
	)
}
function OrderSummary() {
	return (
		<div id="orderSummaryBox">
			<h3>Order Summary</h3>
			<p>Items: 5</p>
			<p>Total: $75.89</p>
			<button id="checkoutBtn">Checkout</button>
		</div>
	)
}