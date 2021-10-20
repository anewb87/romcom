// Create variables targetting the relevant DOM elements here 👇
//Iteration 0
var coverImg = document.querySelector(".cover-image");
coverImg.src = covers[getRandomIndex(covers)];

var coverTitle = document.querySelector(".cover-title");
coverTitle.innerText = titles[getRandomIndex(titles)];

var tagline1 = document.querySelector(".tagline-1");
tagline1.innerText = descriptors[getRandomIndex(descriptors)];

var tagline2 = document.querySelector(".tagline-2");
tagline2.innerText = descriptors[getRandomIndex(descriptors)];

//var formButton = document.querySelector(".make-new-button");
//var form = document.querySelector("form");
//

// We've provided a few variables below
//Didn't use for Iteration 1
var savedCovers = [
  new Cover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  )
];
var currentCover;

//Iteration 1
var newCoverButton = document.querySelector(".random-cover-button");

newCoverButton.onclick = function getNewCover() {
  coverImg.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
};

// formButton.onclick = function swapToForm() {
//   form.toggle();

//Iteration 2
var clickOwnButton = document.querySelector(".make-new-button")

var homePage = document.querySelector(".view home-view")

var formPage = document.querySelector(".view form-view hidden")

clickOwnButton.onclick = function switchToForm() {
  formPage.classList.remove("hidden");
  homePage.classList.add("hidden")

}


// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
