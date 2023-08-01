import { productArr } from "./state"
import { productContent, filterContent } from "./GlobeSection"
import { HeartIcon } from "./state"
import { CartIcon } from "./state"
import { cartArr } from "./GlobeSection"
import { likeArr } from "./GlobeSection"

export function GlobeSectionCars(){
  productContent.innerHTML =``
  filterContent.innerHTML =``

  let productArr1 = productArr.filter(item => item.type == "car")

    productArr1.forEach((el, i)  => {
      let product =document.createElement("div")
      product.classList.add("product")
      productContent.appendChild(product)

      if(!("liked") in el){
        el.liked = false
      }
  
      if(!("carted") in el){
        el.carted = false
      }


      product.innerHTML = `
        <div class="productTop">
          <div class="productImg">
            <img src="${el.img}">
          </div>
          <div class="productInfoMini">
            <h1>${el.name}</h1>
            <h2>${el.prise}</h2>
            <h4>${el.date}</h4>
            <div class="iconsBox">
              <img src="${HeartIcon[el.liked ? 1 : 0]}" class="LikeIconButton">
              <img src="${CartIcon[el.carted ? 1 : 0]}" class="CartIconButton">
            </div>
          </div>
        </div>
        <div class="productBottom">
          <div class="productInfoLarge">
            <p>${el.info}</p>
          </div>
        </div>
      `

      let LikeIconButton = document.querySelectorAll(".LikeIconButton")
      LikeIconButton[i].onclick = (e) =>{
        if(el.liked == true){
          el.liked = false
          e.target.src = HeartIcon[0]
          likeArr = likeArr.filter(item => item.id !== el.id)
        }else{
          el.liked = true
          e.target.src = HeartIcon[1]
          likeArr.push(el)
        }
      }
      
      let CartIconButton = document.querySelectorAll(".CartIconButton")
      CartIconButton[i].onclick = (e) =>{
        if(el.carted == true){
          el.carted = false
          e.target.src = CartIcon[0]
          cartArr = cartArr.filter(item => item.id !== el.id)
        }else{
          el.carted = true
          e.target.src = CartIcon[1]
          cartArr.push(el)
        }
      }
    })  
}