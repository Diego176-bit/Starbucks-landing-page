

const thumb1 = document.querySelector(".thumb-img1");
const thumb2 = document.querySelector(".thumb-img2");
const thumb3 = document.querySelector(".thumb-img3");
const starbucksJuice = document.querySelector(".starbucks-juice");
const divImg = document.querySelector(".main__div-img");
const circle = document.querySelector(".circle");
const menu = document.querySelector(".menu");

thumb1.addEventListener("click", (e)=>{
    
    starbucksJuice.src = "../img/img1.png";
    circle.style.backgroundColor = "#017143";
   

});

thumb2.addEventListener("click", (e)=>{
    
    starbucksJuice.src = "../img/img2.png";
    circle.style.backgroundColor = "#efbbc8";
    divImg.style.padding = "0px 0px 0px 170px"
    
    
});

thumb3.addEventListener("click", (e)=>{
    
    starbucksJuice.src = "../img/img3.png";
    circle.style.backgroundColor = "#b8288e";
    
});

menu.addEventListener("click",(e)=>{
    
    const ulResponsive = document.querySelector(".header__nav-ul");
    ulResponsive.classList.toggle("menu-ul-responsive");
    menu.classList.toggle('active');
});