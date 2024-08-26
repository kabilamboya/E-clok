document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartModal = document.getElementById('cartModal');
    const closeBtn = document.querySelector('.close-btn');
    const cartItemsContainer = document.getElementById('cartItems');

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', event => {
            const productElement = event.target.closest('.product');
            const productName = productElement.querySelector('h3').innerText;
            const productPrice = productElement.querySelector('p').innerText;

            const product = {
                name: productName,
                price: productPrice
            };

            cart.push(product);
            displayCart();
            cartModal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', event => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    function displayCart() {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('p');
            cartItem.textContent = `${item.name} - ${item.price}`;
            cartItemsContainer.appendChild(cartItem);
        });
    }
});
function goToCheckout() {
    // Assuming the cart data is stored in the session or passed to the checkout page
    window.location.href = 'checkout.html';
}
