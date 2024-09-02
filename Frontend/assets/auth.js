function fetchProducts() {
    fetch("https://ecommerce-webapp-lmtu.onrender.com/api/v1/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          loadFuseAndDisplayProducts(data.message);
        } else {
          console.error("Failed to fetch products");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
  function loadFuseAndDisplayProducts(products) {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/fuse.js/7.0.0/fuse.min.js";
    
    script.onload = () => {
      const fuse = new Fuse(products, {
        keys: ["name"],
        threshold: 0.4, // Adjust based on how fuzzy you want the search to be
      });
  
      const searchBar = document.getElementById("searchBar");
      const productContainer = document.getElementById("product-container");
  
      function renderFilteredProducts() {
        productContainer.innerHTML = ""; // Clear existing content
        const queryText = searchBar.value.trim().toLowerCase();
  
        if (queryText.length > 2) {
          const results = fuse.search(queryText).map((result) => result.item);
          displayResults(results);
        } else {
          displayResults(products); // Show all products if the search query is too short
        }
      }
  
      function displayResults(filteredProducts) {
        filteredProducts.forEach((product) => {
          const productDiv = document.createElement("div");
          productDiv.className =
            "product-card w-full h-28 bg-white border shadow-sm rounded-lg flex items-center justify-start gap-2 cursor-pointer";
  
          productDiv.innerHTML = `
            <div class="w-20 h-20 p-2">
              <img class="w-full h-full" src="${product.image}" alt="${product.name}" />
            </div>
            <div class="text-gray-700">
              <h4 class="font-bold text-gray-900 text-sm">${product.name}</h4>
              <h4>${product.category || "Category"}</h4>
              <div class="flex items-center justify-start gap-4">
                <strong class="text-red-400">$${product.price}</strong>
              </div>
            </div>
          `;
  
          productContainer.appendChild(productDiv);
        });
      }
  
      searchBar.addEventListener("input", renderFilteredProducts);

      displayResults(products);
    };
  
    document.head.appendChild(script);
  }
  
  export { fetchProducts };
  