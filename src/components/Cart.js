import {useState} from 'react';
import '../css/cart.css';
import usrCart from '../data/usrCart.js';




export default function Cart () {
	const [currentCart, setCurrentCart]=useState(usrCart);

	const toggleCart =()=>{
		const cartView = document.getElementById('cart');
		cartView.style.display==="none" ? show(cartView): hide(cartView);

		function hide (element){
			element.style.display = "none";
		}
		function show(element){
			element.style.display ="flex";
		}
	};

	const displayCart = currentCart.map((item)=>{
		return(
			<CartItem
			img={item.img} 
			product={item.product} 
			price={item.price} 
			quantity={item.quantity} 
			total={item.quantity * item.price} 
			key={item.id} />
		)
	})

	return(
		<div id="cart">
			<button className="cartBtn" id="cartCloseBtn" onClick={toggleCart}>close</button>
			<div id="currentCartLabel">Showing: cart / wishlist</div>
			<div className="cartContainer">
				<div id="cartItemsBox">
					{displayCart}
				</div>
				<OrderSummary />
			</div>
		</div>
	)
}

function CartItem ({img,product,price,quantity,total}){
	return(
		<div className="cartitem">
			<img src={img} alt={product} className="cartItemImage"></img>
		
			<div className="cartItemInfo">
				<div>{product}</div>
				<div>{price}</div>
				<div className="quantitybox">
					<div>{quantity}</div>
					<div>+</div>
					<div>-</div>
				</div>
				<div>{total}</div>
			</div>

		</div>
	)
}
function OrderSummary (){
	return(
		<div id="orderSummaryBox">
			<h3>Order Summary</h3>
			<p>Items: 5</p>
			<p>Total: $75.89</p>
			<button className="cartBtn">Checkout</button>
		</div>
	)
}