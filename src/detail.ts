import { cart, products } from "../public/db";
import { footer, renderCart } from "./cart";
import { addCartButton, main, productTitle } from "./elements";
export const myCart = document.querySelector(".myCart") as HTMLButtonElement;

const searchParams = new URLSearchParams(location.search);
const id = searchParams.get("id")!;

let product = products.find((product) => product.id === +id);

function addCart() {
  if (product) {
    cart.push(product);
    console.log(cart);
    addCartButton.textContent = "Added";
    addCartButton.disabled = true;
  }
}

window.addEventListener("load", () => {
  footer?.classList.add("hidden");
  productTitle.innerText = product?.title ?? "";
  main.innerHTML = ` 
  <div>
    <img class="w-[250px]" src="${product?.images[2]}" alt="" />
  </div>
  <div class="flex flex-col gap-4">
    <div class="text-2xl">model: ${product?.title}</div>
    <div class="text-2xl font-bold">made by : ${product?.brand}</div>
    <div class="text-3xl text-cyan-950">Price: £${product?.price}</div>
    <div class="text-xl font-bold">some info about product:</div>
    <div class="max-w-[400px] text-[20px]">${product?.description}</div>
    <div>
      <button class="backToProduct w-[200px] h-[40px] border-2 rounded-2xl border-b-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer">
        BACK TO PRODUCTS
      </button>
      <button class="addCart w-[200px] h-[40px] border rounded-xl cursor-pointer border-amber-500 hover:bg-amber-500 hover:text-white">
        ADD TO CART
      </button>
    </div>
  </div>`;

  // Now select the button after it's added to the DOM
  const addCartButton = document.querySelector(".addCart");

  if (addCartButton) {
    addCartButton.addEventListener("click", addCart);
  } else {
    console.error("addCart button not found!");
  }

  const backToProduct = document.querySelector(
    ".backToProduct"
  ) as HTMLButtonElement;

  backToProduct?.addEventListener("click", () => {
    window.location.href = "./index.html";
  });

  myCart?.addEventListener("click", () => {
    main.innerHTML = "";
    renderCart();
  });
});
