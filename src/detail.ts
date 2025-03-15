import { products } from "../public/db";
import { main } from "./elements";

window.addEventListener("load", () => {
    console.log(products.length);
    
  main.innerHTML = ` 
        <div>
        <img class="w-[250px]" src="${products[0].images[0]}" alt="">
    </div>
        <div>
                <div class="text-2xl ">model: ${products[0].title}</div>
                <div class="text-2xl font-bold">made by : ${products[0].brand}</div>
                <div class="text-3xl text-cyan-950">Price: £${products[0].price}</div>
                <div class="text-xl font-bold">some info about product:</div>
                <div class="max-w-[400px] text-[20px]">${products[0].description}</div>
             <div>
                 <button class="w-[200px] h-[40px] border-2 rounded-2xl border-b-blue-900">BACK TO PRODUCTS</button>
                 <button class="w-[200px] h-[40px] border rounded-xl border-amber-500">ADD TO CARD</button>
             </div>
            </div>
        `;
});
