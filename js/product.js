// load the content before
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // remove cart item
  let removeCartItemBtn = document.querySelectorAll(".btn-danger");
  removeCartItemBtn.forEach((button) => {
    button.addEventListener("click", removeCartItem);
  });
  // update Quantity
  let quantityInput = document.querySelectorAll(".quantity");
  console.log(quantityInput)
  quantityInput.forEach((input) => {
    input.addEventListener("change", quantityChange);
  });

  // add to cart Button
  let addToCartBtn = document.querySelectorAll(".add-cart-btn");
  for (let i = 0; i < addToCartBtn.length; i++) {
    let button = addToCartBtn[i];
    button.addEventListener("click", addToCartClicked);
    console.log(button);
  }

  let checkoutBtn = document.querySelector(".checkout");
  checkoutBtn.addEventListener("click", checkoutBtnClicked);
}

let checkoutBtnClicked = () => {
  alert("Thank you For purchasing");
  let cartItem = document.querySelector(".cart-item-container");
  while (cartItem.hasChildNodes()) {
    cartItem.removeChild(cartItem.lastChild);
  }
};

let removeCartItem = (event) => {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
};

let quantityChange = (event) => {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
};

let addToCartClicked = (event) => {
  let button = event.target;
  let productItem = button.parentElement.parentElement.parentElement;
  let productName = productItem.querySelector(".prod-name").innerText;
  let productPrice = productItem.querySelector(".product-price").innerText;
  let imgSrc = productItem.querySelector(".product-img").src;
  console.log(productName, productPrice, imgSrc);
  addItemToCart(productName, productPrice, imgSrc);
  updateCartTotal();
};

let addItemToCart = (productName, productPrice, imgSrc) => {
  let cartAddItem = document.createElement("tr");
  let cartContain = document.querySelector(".cart-item-container");
  cartAddItem.classList.add("cart-item");
  let cartItemName = cartContain.querySelectorAll(".cart-img");
  for (let i = 0; i < cartItemName.length; i++) {
    if (cartItemName[i].innerText == productName) {
      alert(`This ${productName} already Added`);
      return;
    }
  }
  let cartAddItemContent = `
    <td class="cart-img"><img src="${imgSrc}" alt=""><br>${productName}</td>
    <td class="price">${productPrice}</td>
    <td>
      <div class="input-group cart-Qty-inpt">
        <input type="number" class="form-control quantity" placeholder="Qty" value="1">
      </div>
      <button type="button" class="btn btn-danger">Remove</button>
    </td>`;
  cartAddItem.innerHTML = cartAddItemContent;
  cartContain.append(cartAddItem);

  cartAddItem
    .querySelector(".btn-danger")
    .addEventListener("click", removeCartItem);
  cartAddItem
    .querySelector(".quantity")
    .addEventListener("change", quantityChange);
};

// Update Cart if click btn cart modal
let cartBtn = document.querySelector(".cart-btn");
cartBtn.addEventListener("click", () => {
  updateCartTotal();
});

// Update cart total
function updateCartTotal() {
  let cartContain = document.querySelector(".cart-item-container");
  let cartItem = cartContain.querySelectorAll(".cart-item");
  let total = 0;
  for (let i = 0; i < cartItem.length; i++) {
    let cartItems = cartItem[i];
    let priceElement = cartItems.querySelector(".price");
    let quantity = cartItems.querySelector(".quantity");

    let price = parseFloat(priceElement.innerText.replace("₱", ""));
    quantity = quantity.value;
    total = total + price * quantity;
  }
  document.querySelector(".item-total").innerText = "₱" + total;
}
