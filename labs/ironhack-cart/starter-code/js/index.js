function deleteItem(e){
  let section = document.querySelector("section");
  section.removeChild(e.target.parentElement.parentElement);
  getTotalPrice();
  console.log(e);
}

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

function getTotalPrice() {
  let priceTags = document.querySelectorAll('.total');
  let prices = document.querySelectorAll(".price-of-one");
  let qtys = document.getElementsByName("qty");
  let sum = 0;

  console.log(prices)

  for (let i = 0; i < priceTags.length; i++) {
    let price = parseFloat(prices[i].innerText);
    let qty = qtys[i].value;
    sum += price * qty;
    priceTags[i].innerText = price * qty;
  }

  document.querySelector('.grand-total h1').innerText = sum;
}


let addDomElement = (parent, name, text, className) => {
  let element = document.createElement(name);
  if (className) {
    element.classList.add(className);
  }
  if (text) {
    element.innerText = text;
  }
  if (name == "input") {
    element.setAttribute("name", "qty");
    element.setAttribute("type", "number");
  }
  parent.appendChild(element);
  return element;
}

function createNewItem(){
  let name = document.querySelector(".name-input").value
  let price = document.querySelector(".price-input").value

  let section = document.querySelector("section");
  let container = addDomElement(section, "div", "", "container");

  let product = addDomElement(container, "div", "", "product");
  let priceOfOneDiv = addDomElement(container, "div", "$ ", "price-of-one-div");
  let quantity = addDomElement(container, "div", "", "quantity");
  let totalPrice = addDomElement(container, "div", "$ ", "total-price");
  let deleteDiv = addDomElement(container, "div", "", "delete");

  addDomElement(product, "span", `${name}`, "");
  addDomElement(priceOfOneDiv, "span", `${price}`, "price-of-one");

  let form = addDomElement(quantity, "form", "", "");
  addDomElement(form, "label", "QTY ", "");
  addDomElement(form, "input", "", "");

  addDomElement(totalPrice, "span", "0", "total");

  addDomElement(deleteDiv, "button", "Delete", "btn-delete")

  // console.log(document.getElementsByClassName('btn-delete'))

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.querySelector('.new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
