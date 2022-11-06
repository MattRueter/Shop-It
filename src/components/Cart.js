import { useState, useEffect } from 'react';
import '../css/cart.css';
import usrCart from '../data/usrCart.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';


const currencies = { dollars: "$", euros: "€", pounds: "£" };
export let crntCurrency = currencies.pounds;

//**************************************************************************** 
//CartPage is responsible for rendering the whole page.
//**************************************************************************** 
export default function CartPage() {

	return (
		<div id="cartPage">
			<Navbar />
			<Cart />
			<Footer />
		</div>
	)
}
//**************************************************************************** 
//Cart is responsible renders the list of objects in the cart and an instance of the OrderSummary component.
//**************************************************************************** 
function Cart() {
	const [currentCart, setCurrentCart] = useState(usrCart);
	

	useEffect(()=>{
		let cartTotal = 0;
		usrCart.forEach(item => {
		cartTotal += (item.price * item.quantity);
	})
	document.getElementById('cartTotal').textContent = `Total: ${crntCurrency}${cartTotal}`;
	},[currentCart])


	const deleteItem = (cartId) =>{		
		
		let itemToDelete = currentCart[cartId].productId;
	
		const updatedCart = currentCart.filter((item) => item.productId !== itemToDelete)
		usrCart.splice(cartId,1);

		setCurrentCart(updatedCart);	
	};
	
	const displayItems = currentCart.map((item,index) => {
		return (
			<CartItems
				img={item.img}
				product={item.product}
				price={item.price}
				quantity={item.quantity}
				total={item.price * item.quantity}
				cartId={index}
				key={item.productId}
				deleteItem={deleteItem}
			/>
		)
	})
	return (
		<div className="cartContainer">
			<div id="cartItemsBox">
				{displayItems}
			</div>
			<OrderSummary />
		</div>

	)
};
//****************************************************************************
//child of Cart shows total items and price (updates with changes made to Cart)
//**************************************************************************** 
function OrderSummary() {
	const numberOfItems = usrCart.length
	
	let total
	let cartTotal = usrCart.forEach(item => {
		total += (item.price * item.quantity);
	})

	return (
		<div id="orderSummaryBox">
			<h3>Order Summary</h3>
			<p>Items: {numberOfItems}</p>
			<p id='cartTotal'>Total: {crntCurrency}{cartTotal}</p>
			<button id="checkoutBtn">Checkout</button>
		</div>
	)
};
//**************************************************************************** 
//child of Cart. List of items is constructed of instances of CartItems and is called in Cart.
//**************************************************************************** 
function CartItems({ img, product, price, quantity, total, cartId, deleteItem}) {
	const [number, setNumber] 			= useState(quantity);
	const [totalPrice, setTotalPrice]	= useState(total);
	

	useEffect(()=>{
		let cartTotal = 0;
		usrCart.forEach(item => {
		cartTotal += (item.price * item.quantity);
	})
	document.getElementById('cartTotal').textContent = `Total: ${crntCurrency}${cartTotal}`;
	},[number,totalPrice, usrCart])
	
	const addOne = () => {		
		usrCart[cartId].quantity +=1
		setNumber(number +1);
		setTotalPrice(totalPrice + price)			
	}
	const removeOne = () => {
		if(usrCart[cartId].quantity >0){
			usrCart[cartId].quantity -=1
			setNumber(number -1);
			setTotalPrice(totalPrice - price)		
		}
	}
	

	return (
		<div className="cartitem" id={cartId}>
			<img src={img} alt={product} className="cartItemImage"></img>
			<div className="cartItemInfo">
				<div>{product}</div>
				<div>
					<div>Item Price:</div>
					<div>{crntCurrency}{price}</div>
				</div>
				<div id="quantitybox">
					<div>{number}</div>
					<button onClick={addOne} >+</button>
					<button onClick={removeOne}>-</button>
				</div>
				<div>
					<div>Total:</div>
					<div>{crntCurrency}{totalPrice}</div>
				</div>
				<button id='trashcan'onClick={() => deleteItem(cartId)}></button>
			</div>
		</div>
	)
}