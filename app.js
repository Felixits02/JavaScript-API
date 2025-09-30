const container = document.getElementById("productConatainer");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src= "${product.thumbnail} "alt="Product Image">
        <h3>${product.title}</h3>
        <p class="price">$${product.price}</p>
        <button>Add to Cart</button>
        `;
      container.appendChild(card);
    });
  });
