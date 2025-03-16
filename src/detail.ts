import { cart, products } from "../public/db";
import { addToCart, main, productTitle } from "./elements";

const searchParams = new URLSearchParams(location.search);
const id = searchParams.get("id")!;

console.log();

let product = products.find((product) => product.id === +id);

// console.log(cart);

function addCart() {
    cart.push(product);
    console.log(cart);
    addToCart.innerText = "ADDED TO CART";
}

window.addEventListener("load", () => {
  productTitle.innerText = product?.title ?? "";
  main.innerHTML = ` 
  <div>
  <img class="w-[250px]" src="${product?.images[0]}" alt="" />
</div>
<div class="flex flex-col gap-4">
  <div class="text-2xl">model: ${product?.title}</div>
  <div class="text-2xl font-bold">made by : ${product?.brand}</div>
  <div class="text-3xl text-cyan-950">Price: £${product?.price}</div>
  <div class="text-xl font-bold">some info about product:</div>
  <div class="max-w-[400px] text-[20px]">${product?.description}</div>
  <div>
    <button
      class="w-[200px] h-[40px] border-2 rounded-2xl border-b-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer"
    >
      BACK TO PRODUCTS
    </button>
    <button id="addCart" onclick="addCart()" class="w-[200px] h-[40px] border rounded-xl cursor-pointer border-amber-500 hover:bg-amber-500 hover:text-white">
      ADD TO CARD
    </button>
  </div>
</div>
        `;
});
