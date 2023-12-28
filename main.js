import './style.css'
import './menu_hamburger.css'
import './showcase.css';
import './slide.css';
import './footer.css';
import menuIcon from './src/images/icons/menu_icon';



function moveShowcase2(){
  const leftButton = document.querySelector(".left-button-showcase");
  const rightButton = document.querySelector(".right-button-showcase");
  const showcase = document.querySelector(".showcase");
  const hiddenShowcase = document.querySelector(".hidden-showcase");
  const showcaseElement = document.querySelector(".showcase-element");
  const showcaseElementLength = document.querySelectorAll(".showcase-element").length;
  const widthShowcaseElement = showcaseElement.clientWidth;
  let activeShowcaseIndex = 0;
  leftButton.addEventListener('click',() => scrollShowcase("left"));
  rightButton.addEventListener('click',() => scrollShowcase("right"));
  const scrollShowcaseConst = window.innerWidth > 768? 2 : 0;
  setInterval(() => {
    activeShowcaseIndex++;
      if(activeShowcaseIndex > showcaseElementLength - Math.floor(showcase.clientWidth/widthShowcaseElement - scrollShowcaseConst)){
        activeShowcaseIndex = 0;
      }
      window.innerWidth > 768?
      showcase.style.transform = `translateX(${-activeShowcaseIndex * widthShowcaseElement}px)`:
      hiddenShowcase.scrollTo({
        behavior:'smooth',
        left:activeShowcaseIndex * widthShowcaseElement
      });
  }, 5000);
  const scrollShowcase = (direction) => {
    if(direction === "left"){
      activeShowcaseIndex--;
      if(activeShowcaseIndex < 0){
        activeShowcaseIndex = showcaseElementLength - Math.floor(showcase.clientWidth/widthShowcaseElement - scrollShowcaseConst) ;
      }
    } else {
      activeShowcaseIndex++;
      if(activeShowcaseIndex > showcaseElementLength - Math.floor(showcase.clientWidth/widthShowcaseElement - scrollShowcaseConst)){
        activeShowcaseIndex = 0;
      }
    }
    showcase.style.transform = `translateX(${-activeShowcaseIndex * widthShowcaseElement}px)`;
  }
}

function moveSlide(){
  const sliderContainer = document.querySelector('.slider-container')
  const slideRight = document.querySelector('.right-slide');
  const slideLeft = document.querySelector('.left-slide');
  const upButton = document.querySelector('.up-button');
  const downButton = document.querySelector('.down-button');
  const slidesLength = slideRight.querySelectorAll('div').length;

  let activeSlideIndex = 0;
  slideLeft.style.top = `-${(slidesLength - 1) * 60}vh`
  
  upButton.addEventListener('click', () => changeSlide('up'))
  downButton.addEventListener('click', () => changeSlide('down'))
  
  const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
      activeSlideIndex++
      if(activeSlideIndex > slidesLength - 1) {
        activeSlideIndex = 0
      }
    } else if(direction === 'down') {
      activeSlideIndex--
      if(activeSlideIndex < 0) {
        activeSlideIndex = slidesLength - 1
      }
    }
    
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
  }
}

function openBikesMenu() {
  const buttonBike = document.querySelector(".menu-option:nth-of-type(3)");
  const submenuBike = document.querySelector(".submenu:nth-of-type(1)");
  const submenuBack = document.querySelector(".submenu-button:nth-of-type(1)");
  const overlay = document.querySelector(".overlay");

  submenuBack.addEventListener("click", () => {
    submenuBike.style.left = "50vw"
  });
  overlay.addEventListener("click", () => {
    submenuBike.style.left = "50vw";
  });
  buttonBike.addEventListener("click", () => {
    submenuBike.style.left = "0vw";
  });

}

function hoverGridOption() {
  const gridBike = document.querySelector(".grid-dropdown");
  const gridDropdown = document.querySelector(".dropdown-base");
  gridBike.addEventListener("mouseenter", () => {
    gridDropdown.style.display = "flex";
    setTimeout(() => { gridDropdown.style.opacity = "1"; }, 1)
  });

  gridBike.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!gridDropdown.matches(":hover") || !gridBike.matches(":hover")) {
        gridDropdown.style.opacity = "0";
        setTimeout(() => {
          gridDropdown.style.display = "none";
        }, 200);
      }
    }, 50)
  });
}

function openMenu() {
  const menuButton = document.querySelector(".menu-button");
  const menuBase = document.querySelector(".menu-base");
  const overlay = document.querySelector(".overlay");
  menuButton.addEventListener('click', () => {
    if (menuBase.style.width === "50vw") {
      menuBase.style.width = "0vw";
      overlay.style.width = "0vw";
    } else {
      menuBase.style.width = "50vw";
      overlay.style.width = "50vw";


    }
  });
  overlay.addEventListener('click', () => {
    if (menuBase.style.width === "50vw") {
      menuBase.style.width = "0vw";
      overlay.style.width = "0vw";

    } else {
      menuBase.style.width = "50vw";
      overlay.style.width = "50vw";
    }
  });
}

function addMenuIcon() {
  const menuButton = document.querySelector('.menu-button');
  menuButton.innerHTML = menuIcon;
}





function main() {
  addMenuIcon();
  openMenu();
  openBikesMenu();
  hoverGridOption();
  moveSlide();
  moveShowcase2();
}
main();

