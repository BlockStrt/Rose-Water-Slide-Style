//Base result🙋
let pageNum = 0; 

//Storing Data into an Object🏖️
const pages = [
  {copy: "brooklyns design", background:"#bceaea", circle: "#3e78ed"},
  {copy: "Kanye West", background:"#a1fffe", circle:"#e34a47"},
  {copy: "October", background:"#d3c7f3", circle:"#f7fe00"},
  {copy: "download pdf", background:" #faffb8", circle:"#b472e6"},
  {copy: "pages", background:"#b472e6", circle:"#f7fe00"}
];

//This here was a test for my script to make sure it's active🌇
const tag = document.querySelector("h2");
tag.innerHTML = "This is a test";

//Actual conetent
const nextTag = document.querySelector("footer span.next");
const prevTag = document.querySelector("footer span.prev");
const outPut = document.querySelector("h2");
const circleTag = document.querySelector("section div.circle");
const bodyTag = document.querySelector("body")
const randomTag  = document.querySelector("footer span.random")

//I Created a function that That take the number of pages & add 1, but making sure
//make sure the number of pages doesn't over ride into the undefined index returning undefined
const next = function () {
    pageNum = pageNum + 1;
    
    if (pageNum > pages.length - 1){    //making sure the undefined index is not returned
       pageNum = 1
    }
    updateSec();
}
const prev = function(){
pageNum = pageNum - 1;

if (pageNum < 1){
    pageNum = pages.length - 1
}
updateSec();
}
const rand = function(){
    pageNum = Math.floor(Math.random() * pages.length -1)

    updateSec();
}

//This update function will be a updater for every other function we use in order
// for the content to respond
const updateSec = function (){
    outPut.innerHTML = pages[pageNum].copy;
    circleTag.style.backgroundColor = pages[pageNum].circle;
    bodyTag.style.backgroundColor = pages[pageNum].background
}

//Simply Addig Click Events
nextTag.addEventListener("click", function(){
    next();
})
prevTag.addEventListener("click", function(){
    prev();
} )
randomTag.addEventListener("click", function(){
  rand();
})


//When user press key check arrow left or right 
// do next or prev correct


document.addEventListener( "keyup", function(){
    next();
})
