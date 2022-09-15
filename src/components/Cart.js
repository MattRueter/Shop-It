import '../css/cart.css';


export default function Cart () {
	const toggleCart =()=>{
		const cartView = document.getElementById('blackOutScreen');
		cartView.style.display==="none" ? show(cartView): hide(cartView);

		function hide (element){
			element.style.display = "none";
		}
		function show(element){
			element.style.display ="flex";
		}
	}
	return(
		<div id="blackOutScreen">
			<button className="closeBtn" onClick={toggleCart}>close</button>
			<div id="currentCartLabel">Showing: cart / wishlist</div>
			<div className="cartContainer">
				<div id="cartItemsBox">
					<CartItem />
					<CartItem />
				</div>
				<OrderSummary />
			</div>
		</div>
	)
}

function CartItem (){
	return(
		<div className="cartitem">
			<div className="imageTest"></div>
			<div>Sweater</div>
			<div>Item-price</div>
			<div className="quantitybox">
				<div>2</div>
				<div>+</div>
				<div>-</div>
			</div>
			<div>Total</div>
		</div>
	)
}
function OrderSummary (){
	return(
		<div id="orderSummaryBox">
			<h3>Order Summary</h3>
			<p>Items: 5</p>
			<p>Total: $75.89</p>
			<button>Checkout</button>
		</div>
	)
}