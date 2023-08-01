import { typeArr } from "./state"
import { productArr } from "./state"
import { GlobeSection } from "./GlobeSection"



let fullModal = document.createElement("div")
export function AddProductsModal() {
  let body = document.querySelector("body")

  fullModal.classList.add("fullModal")
  body.appendChild(fullModal)

  fullModal.innerHTML =`
    <div class="ModalContent">
      <div class="cancleBox">
        <button class="cancleButton">X</button>
      </div>
      <div class="tittleBox">
        <h2>Add your Product</h2>
      </div>
      <div class="typesBox">
        
      </div>
      <div class="inputsBox">
        <input type="text" class="productName" id="productNameId" placeholder="Product Name">
        <input type="text" class="productPrice" id="productPriceId" placeholder="Product Price">
        <input type="text" class="productImg1" id="productImg1Id" placeholder="Product Img">
        <textarea class="productInfo" id="productInfoId" placeholder="Product Information"></textarea>
      </div>
      <div class="buttonsBox">
        <button class="addButton">Add</button>
        <button class="cancleButtonTwo">Cancle</button>

      </div>
    </div>
  `

  let cancleButton = document.querySelector(".cancleButton")
  cancleButton.onclick = () =>{
    fullModal.remove()
  }

  let cancleButtonTwo = document.querySelector(".cancleButtonTwo")
  cancleButtonTwo.onclick = () =>{
    fullModal.remove()
  }

  let typesBox = document.querySelector(".typesBox")

  let productTypeArr = []

  typeArr.forEach((item, i) =>{
    let typeItem = document.createElement("button")
    typeItem.classList.add("typeItem")
    typeItem.innerHTML =item

    typesBox.appendChild(typeItem)
    productTypeArr.push(typeItem)
    
    productTypeArr[i].onclick = (e) =>{
      ProductObj.type = item.toLowerCase()
      for(let x of productTypeArr){
        x.style.backgroundColor = "orange"
      }
      e.target.style.backgroundColor = "green"
    }

  })

  let ProductObj = {
    id: (Math.max(...productArr.map(item => + item.id)) + 1).toString() ,
    date: new Date().toLocaleDateString(),
  }

  let productNameId = document.querySelector("#productNameId")
  productNameId.oninput = (e) =>{
    ProductObj.name = e.target.value
  }

  let productPriceId = document.querySelector("#productPriceId")
  productPriceId.oninput = (e) =>{
    ProductObj.prise = e.target.value
  }

  let productImg1Id = document.querySelector("#productImg1Id")
  productImg1Id.oninput = (e) =>{
    ProductObj.img = e.target.value
  }

  let productInfoId = document.querySelector("#productInfoId")
  productInfoId.oninput = (e) =>{
    ProductObj.info = e.target.value
  }



  let addButton  = document.querySelector(".addButton")
  addButton.onclick = () =>{
    productArr.push(ProductObj)
    GlobeSection()
    fullModal.remove()
    console.log( ProductObj);
  }
}
