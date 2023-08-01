import { logo  } from "./state"
import { menu } from "./state"
import { GlobeSectionCars } from "./cars"
import { GlobeSectionHouse } from "./house";
import { GlobeSection } from "./GlobeSection";
import { GlobeSectionElectronics } from "./electronics";
import { GlobeSectionMen } from "./men";
import { GlobeSectionWomen } from "./women";
import { FilterHouse } from "./FilterHouse";
import { FilterCars } from "./FilterCars";



let menuArr = []

export function header() {
  let header = document.querySelector("header")

  header.innerHTML = `
    <div class="logoBox">
      <img src="${logo}"> 
    </div>
    <div class="menuBox">
      <nav>
        <ul class="menuUl">
        
        </ul>
      </nav>
    </div>
  `

  let menuUl = document.querySelector(".menuUl")
  menu.forEach(element => {
    let menuItem = document.createElement("li")
    menuItem.classList.add("menuItem")
    menuUl.appendChild(menuItem)
    menuItem.innerHTML = element
    menuArr.push(menuItem)
  })

  let [home, house, car, electronics, men, women] = menuArr

  home.onclick = () =>{
    GlobeSection()
  }

  house.onclick = () =>{
    GlobeSectionHouse()
    FilterHouse()
  }

  car.onclick = () =>{
    GlobeSectionCars()
    FilterCars()
  }

  electronics.onclick = () =>{
    GlobeSectionElectronics()
  }

  men.onclick = () =>{
    GlobeSectionMen()

  }

  women.onclick = () =>{
    GlobeSectionWomen()
  }
}