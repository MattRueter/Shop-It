import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function RecyclePage (){
	return (
		<div>
			<Navbar />
			<header>
				<h1>Recylce initiative.</h1>
			</header>
			<main>
				<p className="lightText">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Aliquam ultricies nunc sit amet vulputate facilisis.
				Vivamus at dictum quam. Curabitur eu tellus eget ligula commodo
				cursus in quis arcu. Etiam id hendrerit metus. Praesent
				quis risus ut justo imperdiet dapibus vel non massa. 
				Mauris libero enim, pellentesque sit amet sagittis et,
				ullamcorper quis risus. Ut pharetra sem at est varius, 
				sit amet tincidunt est fringilla. Integer tristique cursus enim, 
				vitae vehicula erat eleifend vitae. Morbi vitae blandit metus, 
				id viverra ante. Quisque viverra lobortis ligula quis tempor. 
				Nullam iaculis cursus porta. Nullam leo ex, imperdiet ac maximus sed, 
				sollicitudin sit amet risus. Sed pretium ultrices nibh quis consectetur. 
				Ut iaculis pellentesque sapien, a fringilla nisi elementum quis. 
				Nullam convallis volutpat purus, et dictum sapien pellentesque ut.
				</p>
				<p className="lightText">
				Fusce congue mi eget magna tristique, a viverra arcu molestie. 
				Praesent in leo ac ex aliquam varius. Donec id euismod turpis. 
				Mauris luctus ullamcorper pellentesque. Sed scelerisque venenatis quam, 
				quis vehicula lorem tristique nec. Pellentesque eleifend felis lacus, eu 
				pellentesque dui rutrum quis. Cras ligula elit, porttitor eu quam ultricies, 
				fermentum scelerisque diam. Fusce a orci eget felis placerat pharetra in non odio. 
				Cras interdum aliquet fringilla.
				</p>
				<p className="lightText">
				Aenean commodo volutpat tortor ut hendrerit. Aliquam egestas urna consectetur 
				turpis posuere venenatis. Curabitur eleifend consequat ligula nec euismod. 
				In sapien tellus, pharetra eu fringilla ut, pharetra non mauris. 
				Ut tincidunt sem in suscipit tincidunt. Nunc ac neque ornare, 
				varius nunc et, mollis enim. Suspendisse potenti. Ut turpis lacus, lobortis 
				eget diam et, pretium dapibus justo. Donec ante orci, 
				gravida bibendum ex nec, auctor condimentum eros. 
				Suspendisse nec ligula neque. Donec convallis lacus vel risus 
				semper mollis. Etiam ac ornare magna. Pellentesque commodo, augue eget 
				finibus hendrerit, risus est ultrices elit, eget egestas est nulla commodo sapien.
				</p>	
			</main>
			<Footer />
		</div>
	)
}