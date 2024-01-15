//The products that is only available to add in the shopping cart
let shoe1 = "<img class='prod1' src='bilder/low-triple-red.png'> NIKE, Low Triple Red, Price: kr 2 375";
let shoe2 = "<img class='prod2' src='bilder/mca-university.png'> NIKE, MCA University Blue, Price: kr 4 375";

//Without this the products will be shows ad "undefined"
//This is a extra for the "" so it can be defined as a string
let cartVar = "";

//The functions will be activated when you press the button
function buyShoe1() {
  //Adds on product shoe1
  cartVar = localStorage.getItem("savedCart")
  cartVar += shoe1;

  //This uses localStorage.setItem to save the local file ("savedCart")
  localStorage.setItem("savedCart", cartVar);
}

function buyShoe2() {
  cartVar = localStorage.getItem("savedCart")
  cartVar += shoe2;
  localStorage.setItem("savedCart", cartVar);
}


//When you press this button, it will show your added products
function showCart() {
  document.getElementById("cart").innerHTML = localStorage.savedCart;
}

//When you press this button, everything will be removed from the cart
function emptyCart() {
  cartVar = "";
  localStorage.setItem("savedCart", cartVar);
  showCart();
}

