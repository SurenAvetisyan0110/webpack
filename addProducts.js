import { addContent } from "./GlobeSection";
import { addIcons } from "./state";
import { likeContainer } from "./likeContainer";
import { cartContainer } from "./cartContainer";
import { likeArr } from "./GlobeSection";
import { cartArr } from "./GlobeSection";
import { AddProductsModal } from "./AddProductsModal";

export let addItemsArr = []

export function addProducts() {
  addContent.innerHTML =``
  
  addContent.innerHTML =`
    <div class="addContainer">

    </div>
  `

  let addContainer = document.querySelector(".addContainer")

  addIcons.forEach(el =>{
    let imgItemsBox = document.createElement("div")
    imgItemsBox.classList.add("imgItemsBox")
    imgItemsBox.innerHTML = `
      <img src="${el}">
    `

    addContainer.appendChild(imgItemsBox)
    addItemsArr.push(imgItemsBox)
  })

  let [LikeItem, CartItem, AddItem] = addItemsArr

  LikeItem.innerHTML += `
    <span>${likeArr.length}</span>
  `

  CartItem.innerHTML += `
    <span>${cartArr.length}</span>
  `

  LikeItem.onclick = () =>{
    likeContainer()
  }

  CartItem.onclick = () =>{
    cartContainer()
  }
  
  AddItem.onclick = () =>{
    AddProductsModal()
  }
}