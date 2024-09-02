function isAuthenticated() {
    return localStorage.getItem('jwtToken') !== null;
}

// Function to toggle visibility based on authentication status
function toggleAuthElements(loginbutton, usericon) {
    const loginButton = loginbutton;
    const userIcon = usericon;

    if (isAuthenticated()) {
        // If the user is authenticated, show the user icon
        userIcon.classList.remove('hidden');
        loginButton.classList.add('hidden');
    } else {
        // If the user is not authenticated, show the login button
        loginButton.classList.remove('hidden');
        userIcon.classList.add('hidden');
    }
}

// Call the toggle function on page load
document.addEventListener('DOMContentLoaded', toggleAuthElements);

function fetchProducts() {

    fetch('https://ecommerce-webapp-lmtu.onrender.com/api/v1/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            displayProducts(data.message);
        } else {
            console.error('Failed to fetch products');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    const searchBar = document.getElementById('searchBar');
    
    function renderFilteredProducts() {
        const searchTerm = searchBar.value.trim().toLowerCase();
        productContainer.innerHTML = ''; // Clear existing content

        const filteredProducts = products.filter((product) => {
            if (searchTerm.length <= 3) return true; // Show all products if search term is less than 3 characters
            return product.name.toLowerCase().includes(searchTerm);
        });

        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product-card w-full h-28 bg-white border shadow-sm rounded-lg flex items-center justify-start gap-2 cursor-pointer';

            productDiv.innerHTML = `
                <div class="w-20 h-20 p-2">
                    <img class="w-full h-full" src="${product.image}" alt="${product.name}" />
                </div>
                <div class="text-gray-700">
                    <h4 class="font-bold text-gray-900 text-sm">${product.name}</h4>
                    <h4>${product.category || 'Category'}</h4>
                    <div class="flex items-center justify-start gap-4">
                        <strong class="text-red-400">$${product.price}</strong>
                    </div>
                </div>
            `;

            productContainer.appendChild(productDiv);
        });
    }

    // Initial render
    renderFilteredProducts();

    // Add event listener for search input
    searchBar.addEventListener('input', renderFilteredProducts);
}
export{isAuthenticated, toggleAuthElements, fetchProducts, displayProducts}