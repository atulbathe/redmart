// This example is for basic functionality, like adding a message

const addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});