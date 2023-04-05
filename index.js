// Get all the buy buttons
const buyButtons = document.querySelectorAll('.buy-btn');

// Get the cart list and the total price element
const cartList = document.querySelector('.cart-list');
const totalPrice = document.querySelector('.total-price');
const price = document.querySelector('.price');

var p=price.innerText;
// Get the pay button
const payButton = document.querySelector('.pay-btn');

// Initialize an empty array to hold the selected pictures
let selectedPictures = [];

// Loop through all the buy buttons
buyButtons.forEach(button => {
	// Add a click event listener to each button
	button.addEventListener('click', () => {
		// Get the parent picture element of the clicked button
		const picture = button.parentNode;

        console.log(picture.innerHTML);
		
		// Get the source of the picture
		const src = picture.querySelector('img').src;
		
		// Add the source to the selected pictures array
		selectedPictures.push(src);

       
		
		// Create a new list item and add the source as its text content
		const listItem = document.createElement('li');
		listItem.textContent = src;
		
		// Append the new list item to the cart list
		cartList.appendChild(listItem);
		
		// Calculate and display the total price
		const price = selectedPictures.length * p;
		totalPrice.textContent = `Total Price: $${price}`;
	});
});

// Add a click event listener to the pay button
payButton.addEventListener('click', () => {
	// Remove all the selected pictures from the gallery
	selectedPictures.forEach(src => {
		const picture = document.querySelector(`img[src="${src}"]`).parentNode;
		picture.parentNode.removeChild(picture);
        cartList.innerHTML = ' ';
        totalPrice.textContent = ' ';
	});
	
	// Clear the cart list and reset the total price
	cartList.innerHTML = ' ';
	totalPrice.textContent = ' ';
	
	// Clear the selected pictures array
	selectedPictures = [];
});
