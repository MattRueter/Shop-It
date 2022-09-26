import { useState } from 'react';
import '../css/cart.css';
import usrCart from '../data/usrCart.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';


const currencies = { dollars: "$", euros: "€", pounds: "£" };
export let crntCurrency = currencies.pounds;

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
				key={index}
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

function CartItem({ img, product, price, quantity, total, handlePlus, handleMinus}) {
	const [currentQuantity, setCurrentQuantity] = useState(quantity)
	

	return (
		<div className="cartitem">
			<img src={img} alt={product} className="cartItemImage"></img>

			<div className="cartItemInfo">
				<div>{product}</div>
				<div>
					<div>Item Price:</div>
					<div>{crntCurrency}{price}</div>
				</div>
				<div id="quantitybox">
					<div>{currentQuantity}</div>
					<button>+</button>
					<button>-</button>
				</div>
				<div>
					<div>Total:</div>
					<div>{crntCurrency}{total}</div>
				</div>
			</div>

		</div>
	)
}
function OrderSummary() {
	const [numberOfItems, setNumberOfItems] = useState(usrCart.length);
	let total = 0;
	
	const totalPrice = usrCart.forEach(item => {
		total += (item.price * item.quantity);
	})

	return (
		<div id="orderSummaryBox">
			<h3>Order Summary</h3>
			<p>Items: {numberOfItems}</p>
			<p>Total: {crntCurrency}{total}</p>
			<button id="checkoutBtn">Checkout</button>
		</div>
	)
}