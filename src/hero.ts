import { body } from "./elements";

console.log("Hello from hero.ts");

// const title = document.createElement("h1");
// const card = document.createElement('div')
// const  = document.createElement('')

window.addEventListener('load', () => {
   const title = document.createElement('h1')
   title.innerText = 'our products'
   title.classList.add('bg-red-500', 'text-black', 'p-3')
   body?.appendChild(title)
})



