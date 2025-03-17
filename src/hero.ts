import { indexOfLine } from "bun";
import { products } from "../public/db";
import { body, productCrad } from "./elements";

console.log("Hello from hero.ts");

// const title = document.createElement("h1");
// const card = document.createElement('div')
// const  = document.createElement('')

// window.addEventListener('load', () => {
//    const title = document.createElement('h1')
//    title.innerText = 'our products'

//    body?.appendChild(title)
// })


products.forEach((product) => {
  const card = document.createElement("div");
  card.innerHTML = `
<div class="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer">
<img
  src="${product.images[0]}"
  alt="${product.title}"
  class="mx-auto mb-3 h-40 "  
/>
<h2 class="text-lg font-semibold">${product.title}</h2>
<p class="text-indigo-600 text-xl font-semibold">&pound: ${product.price}</p>
</div>
`;
card.addEventListener('click',(e)=>{
    console.log(product.id)
    window.location.href = `./detail.html?id=${product.id}`
    
})
  productCrad?.appendChild(card);
});
