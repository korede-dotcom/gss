const menuBtn = document.querySelector(".menu");
const nav = document.querySelector(".sidenav");
const one = document.querySelector(".one");

const readmore = document.querySelectorAll(".read_more");
const threeText = document.querySelector(".three_text p");
const cBtn = document.querySelector(".cancel i");
const serviceBtn = document.querySelector(".service_box");
const serviceItems = document.querySelector(".services .p");


// const readmoreFuc = ()=>{
//   readmore.forEach((read)=>{
//     read.addEventListener("click",()=>{
//       threeText.forEach((p)=>{
//         const textC = document.createTextNode = "send us a mail info@globalstorageservice.com";
//         p.innerHTML += textC;

//       })
//     })
//   })
// }
// readmoreFuc();

const serviceBtnFuction = ()=>{
  serviceBtn.addEventListener("click",(e)=>{
  serviceItems.classList.toggle("slideback")
  // serviceBtn.parentElement.style.transform = "translatex(-200px)";
    
  })
}
serviceBtnFuction();

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("slide");
  one.style.transform = "translatex(200px)";
  
});

// const cardContainer = document.querySelectorAll(".card_container .card");
// const dot = document.querySelectorAll(".dot i");
// const carousel = dot.forEach((dots)=>{
//   dots.addEventListener("click",(e)=>{
//     if(e.target.className = "circle2"){
//       console.log("work")
//     }
    
//   })
// })
// carousel();


 const cancelFunction = function (){
   cBtn.addEventListener("click",()=>{
    nav.classList.toggle("slide");
     one.style.transform = "translatex(0px)";
   })
 }
 cancelFunction();

 