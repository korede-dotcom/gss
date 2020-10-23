const menuBtn = document.querySelector(".menu");
const nav = document.querySelector(".sidenav");
const one = document.querySelector(".one");

const readmore = document.querySelectorAll(".read_more");
const threeText = document.querySelector(".three_text p");
const cBtn = document.querySelector(".cancel i");


// const readmoreFuc = ()=>{
//   readmore.forEach((read)=>{
//     read.addEventListener("click",()=>{
//       threeText.forEach((p)=>{
//         const textC = document.createTextNode = "i love";
//         p.innerHTML += textC;

//       })
//     })
//   })
// }
// readmoreFuc();

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

 const slider = ()=>{
  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true
  });
  
  // element argument can be a selector string
  //   for an individual element
  var flkty = new Flickity( '.main-carousel', {
    // options
  });
 }
 slider();