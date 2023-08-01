import { filterContent } from "./GlobeSection";
import { CarsArr } from "./state";
import { productArr1 } from "./house";
import { productArr } from "./state";
import { productContent } from "./GlobeSection";
import { HeartIcon } from "./state";
import { CartIcon } from "./state";

let roomsClick =[]

function Room1() {
  productContent.innerHTML =``

  productArr1 = productArr.filter(item => item.filter == "Toyota")

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

function Room2() {
  productContent.innerHTML =``
  productArr1 = productArr.filter(item => item.filter == "BMW")

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

function Room3() {
  productContent.innerHTML =``
  productArr1 = productArr.filter(item => item.filter == "Mersedes-Bens")

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

export function FilterCars() {
  filterContent.innerHTML = ``

  let roomsBox = document.createElement("div")
  roomsBox.classList.add("roomsBox")
  filterContent.appendChild(roomsBox)

  CarsArr.forEach(item => {
    let roomsItem = document.createElement("button")
    roomsItem.classList.add("roomsItem")
    roomsItem.innerHTML = item

    roomsBox.appendChild(roomsItem)

    roomsClick.push(roomsItem)
  })

  let  [room1,room2,room3] = roomsClick

  room1.onclick = () =>{
    Room1()
  }

  room2.onclick = () =>{
    Room2()
  }

  room3.onclick = () =>{
    Room3()
  }
}