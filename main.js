let products = async function human() {
  let productFetch = await fetch("http://localhost:3001/phones");
  let productGet = await productFetch.json();

  function productInformation(mobileInfo) {
    let cardFather = document.querySelector(".all-card");
    cardFather.innerHTML = "";

    mobileInfo.forEach((information) => {
      let createDiv = document.createElement("div");
      createDiv.innerHTML = `
        <div class="card">
          <img src="${information.image}" alt="">
          <div class="product-items">
            <p class="product-name">${information.title}</p>
            <p class="product-info">${information.information}</p>
            <p class="product-price">${information.price}</p>
            <button class="delete-btn">Delete</button>
          </div>
        </div>
      `;

      createDiv.querySelector(".delete-btn").addEventListener("click", async () => {
        await fetch(`http://localhost:3001/phones/${information.id}`, {
          method: "DELETE",
        });
        human();
      });

      cardFather.append(createDiv);
    });
  }

  productInformation(productGet);
};

products();


let submitBtn = document.querySelector(".create-product");

submitBtn?.addEventListener("click", () => {
  let imageInput = document.querySelector(".product-image").value;
  let titleInput = document.querySelector(".product-title").value;
  let infoInput = document.querySelector(".product-info").value;
  let priceInput = document.querySelector(".product-price").value;

  let newProduct = {
    image: imageInput,
    title: titleInput,
    information: infoInput,
    price: priceInput
  };

  fetch("http://localhost:3001/phones", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newProduct)
  }).then(() => {
    alert("Product added!");
  });
});
let edit = document.querySelector(  )
