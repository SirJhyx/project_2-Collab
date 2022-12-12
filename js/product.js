// load the content before 
if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}

function ready(){
// remove cart item
    let removeCartItemBtn=document.getElementsByClassName("btn-danger")
    for (let i = 0; i < removeCartItemBtn.length; i++){
        let button = removeCartItemBtn[i]
        button.addEventListener("click", removeCartItem)
    }
// update Quantity
    let quantityInput=document.getElementsByClassName("quantity")
    for (let i = 0; i < quantityInput.length; i++){
        let input = quantityInput[i]
        input.addEventListener("change", quantityChange)
    }

// add to cart Button
    let addToCartBtn=document.getElementsByClassName("add-cart-btn")
    for (let i = 0; i < addToCartBtn.length; i++){
        let button = addToCartBtn[i]
        button.addEventListener("click", addToCartClicked)
        console.log(button)
    } 
    
   let checkoutBtn=document.getElementsByClassName('checkout')[0]
   checkoutBtn.addEventListener('click',checkoutBtnClicked)
}

let checkoutBtnClicked=()=>{
    alert('Thank you For purchasing')
    let cartItem = document.getElementsByClassName('cart-item-container')[0]
    while(cartItem.hasChildNodes()){
        cartItem.removeChild(cartItem.lastChild)
    }
}

let removeCartItem=(event)=>{
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
    
let quantityChange = (event)=>{
    let input = event.target
    if(isNaN(input.value)||input.value<=0){
        input.value = 1
    }
    updateCartTotal()
}

let addToCartClicked=(event)=>{
    let button=event.target
    let productItem=button.parentElement.parentElement.parentElement
    let productName=productItem.getElementsByClassName('prod-name')[0].innerText
    let productPrice=productItem.getElementsByClassName('product-price')[0].innerText
    let imgSrc=productItem.getElementsByClassName('product-img')[0].src  
    console.log(productName,productPrice,imgSrc)
   addItemToCart(productName,productPrice,imgSrc) 
   updateCartTotal()
}

let addItemToCart=(productName,productPrice,imgSrc) =>{
    let cartAddItem=document.createElement('tr')
    let cartContain=document.getElementsByClassName("cart-item-container")[0]
    cartAddItem.classList.add("cart-item")
    let cartItemName=cartContain.getElementsByClassName('cart-img')
    for(let i=0; i<cartItemName.length; i++){
        if (cartItemName[i].innerText==productName){
            alert(`This ${productName} already Added`)
            return
        }
    }
    let cartAddItemContent=`
    <td class="cart-img"><img src="${imgSrc}" alt="">${productName}</td>
    <td class="price">${productPrice}</td>
    <td>
      <div class="input-group cart-Qty-inpt">
        <input type="number" class="form-control quantity" placeholder="Qty" value="1">
      </div>
      <button type="button" class="btn btn-danger">Remove</button>
    </td>`
    cartAddItem.innerHTML=cartAddItemContent
    cartContain.append(cartAddItem)
    alert(`${productName} Added to the Cart`)

    cartAddItem.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartAddItem.getElementsByClassName('quantity')[0].addEventListener('change', quantityChange)
}

// Update Cart if click btn cart modal
let cartBtn=document.querySelector(".cart-btn")
cartBtn.addEventListener('click', ()=> {
    updateCartTotal()
})


// Update cart total
function updateCartTotal() {
    let cartContain=document.getElementsByClassName("cart-item-container")[0]
    let cartItem=cartContain.getElementsByClassName("cart-item")
    let total=0
    for(let i = 0; i < cartItem.length; i++){
         let cartItems=cartItem[i]
        let priceElement=cartItems.getElementsByClassName("price")[0]
        let quantity = cartItems.getElementsByClassName('quantity')[0]  

       let price = parseFloat(priceElement.innerText.replace('₱',''))
       quantity=quantity.value
       total=total+(price*quantity)
    }
    document.getElementsByClassName('item-total')[0].innerText='₱'+ total
}  


