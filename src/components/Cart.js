import '../css/cart.css';


export default function Cart () {
	return(
		<div id="blackOutScreen">
			<button className="closeBtn">close</button>
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
			<p># of items.</p>
			<p>order-total</p>
			<button>Checkout</button>
		</div>
	)
}