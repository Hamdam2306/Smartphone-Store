import { cart } from "../public/db";
import { myCart } from "./detail";
import { main } from './elements';
export const footer  =  document.querySelector('footer')

export function renderCart() {

  footer?.classList.remove('hidden')
  console.log("hdabnk");
  const cartSection = document.querySelector("#cartSection");

  cart.forEach((cartProduct) => {
    console.log(cartProduct);

    const fragment = document.createElement("div");
    fragment.innerHTML = `
        <div class="grid grid-cols-6 gap-30 mt-10 text-center">
        <div class="flex flex-col items-center">
        <h2 class="text-lg font-semibold">products</h2>
        <img src="${cartProduct?.images[0]}" alt="Product" class="w-24 h-24" />
        </div>
        <div class="flex flex-col items-center">
        <h2 class="text-lg font-semibold">name of product</h2>
        <p>${cartProduct?.title}</p>
        </div>
        <div class="flex flex-col items-center">
      <h2 class="text-lg font-semibold">price</h2>
      <p>£${cartProduct.price}</p>
    </div>
    <div class="flex flex-col items-center">
    <h2 class="text-lg font-semibold">quantity</h2>
    <div class="flex gap-3 mt-3">
    <button
    class="border-2 border-black px-3 py-1 transition duration-500 hover:bg-black hover:text-white"
    >
    -
    </button>
    <button
    class="border-2 border-black px-3 py-1 transition duration-500 hover:bg-black hover:text-white"
    >
    1
    </button>
    <button
    class="border-2 border-black px-3 py-1 transition duration-500 hover:bg-black hover:text-white"
    >
    +
    </button>
    </div>
    </div>
    <div class="flex flex-col items-center">
    <h2 class="text-lg font-semibold">remove</h2>
    <p></p>
    </div>
    <div class="flex flex-col items-center">
    <h2 class="text-lg font-semibold">total</h2>
    <p>item total: £${cartProduct.price}</p>
    </div>
    </div> `;

    console.log(fragment);

    cartSection?.appendChild(fragment);
  });
}
