import { useState } from 'react';
import '../css/cart.css';
import usrCart from '../data/usrCart.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';


const currencies = { dollars: "$", euros: "€", pounds: "£" };
export let crntCurrency = currencies.pounds;

export default function Cart() {
		
	return (
		<div id="cart">
			<Navbar />
			<CartItem />
			<Footer />
		</div>
	)
}

function CartItem () {
	const [currentCart, setCurrentCart] = useState(usrCart);
	/*
	const addOne=()=>{
		//update the usrCart quantity for this item *access using index? i.e. sort out key issue.
		//call update () which hopefully renders the Cart again and updates all children.
		usrCart[index].quantity +=1
		console.log(usrCart[index].quantity)
		setCurrentCart(usrCart);
		
	}
	const removeOne=()=>{
		//update the usrCart quantity for this item *access using index? i.e. sort out key issue.
		//call update () which hopefully renders the Cart again and updates all children.
		usrCart[index].quantity -=1
		console.log(usrCart[index].quantity)
		setCurrentCart(usrCart);
	}
*/
	const displayCart = currentCart.map((item, index) => {
		return (
			<div className="cartitem" key={index}>
				<img src={item.img} alt={item.product} className="cartItemImage"></img>
				<div className="cartItemInfo">
					<div>{item.product}</div>
					<div>
						<div>Item Price:</div>
						<div>{crntCurrency}{item.price}</div>
					</div>
					<div id="quantitybox">
						<div>{item.quantity}</div>
						<button>+</button>
						<button>-</button>
					</div>
					<div>
						<div>Total:</div>
						<div>{crntCurrency}{item.total}</div>
					</div>
				</div>
			</div>
			
		)
	});

	return (
		<div className="cartContainer">
			<div id="cartItemsBox">
				{displayCart}
			</div>
			<OrderSummary />
		</div>
			
	)
}


function OrderSummary() {
	const numberOfItems = usrCart.length;
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