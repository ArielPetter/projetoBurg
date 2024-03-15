/* mostrar todos os produtos com o forEach
   mostrar todos os produtso com 10% off com o map
   mostrar o valor de todos os produtos juntos com o reduce  
   mostrar apenas os burgs veganos com o filter
*/
//parte do forEach:
const list = document.querySelector("ul");
let myLi = " ";
const showAllItems = document.querySelector(".button-show-items");
//parte do map:
const showItensOff = document.querySelector(".button-off");
//parte do reduce:
const sumTotalValue = document.querySelector(".button-sum");
//parte do filter:
const itensFiltred = document.querySelector(".button-filter");

//forEach, para mostrar todos os itens na tela:
function showItem(productsArray) {
  list.innerHTML = "";
  productsArray.forEach((product) => {
    const myLi = document.createElement("li");
    myLi.innerHTML = `
            <img src="${product.src}" alt="${product.name}">
            <p>${product.name}</p>
            <p class="item-price">RS$ ${product.price.toFixed(2)}</p>
            `;
    list.appendChild(myLi);
  });
}

//parte do desconto, .map
function itensOff() {
  const newPrices = menuOptions.map((product) => ({
    ...product, //spread, para não precisar por todos os outros itens do objeto que vão ficar igual
    price: product.price * 0.9,
  }));
  showItem(newPrices);
}

//parte da soma total de preços, .reduce
function totalPrice() {
  const sumPrice = menuOptions.reduce((acc, product) => acc + product.price, 0);
  list.innerHTML = `<li><p>O valor de todos os burgers é de: ${sumPrice}</p></li>`;
}

//filtro de burg veg
function itemFilter() {
  const filterItens = menuOptions.filter((product) => product.vegan); //não precisa por === true, o js já entende como true 
  showItem(filterItens)
}

showAllItems.addEventListener("click", () => showItem(menuOptions)); //.forEach
showItensOff.addEventListener("click", itensOff); //.map
sumTotalValue.addEventListener("click", totalPrice); //.reduce
itensFiltred.addEventListener("click", itemFilter); //.filter
