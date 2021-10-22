//Iterations 0 & 1
var coverImg = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");

generateNewBook();

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateNewBook() {
  currentCover = new Cover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)]
  );
  displayNewCover();
}

var newRandomCoverButton = document.querySelector(".random-cover-button");

newRandomCoverButton.addEventListener("click", generateNewBook);

var savedCovers = [
  new Cover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  )
];
var currentCover;

//Iteration 2
var makeOwnButton = document.querySelector(".make-new-button");
var homeButton = document.querySelector(".home-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var homePage = document.querySelector(".home-view");
var formPage = document.querySelector(".form-view");
var viewSavedButton = document.querySelector(".view-saved-button");
var savedPage = document.querySelector(".saved-view");
var showNewButton = document.querySelector(".random-cover-button");

makeOwnButton.addEventListener("click", switchToForm);

function switchToForm() {
  formPage.classList.remove("hidden");
  homePage.classList.add("hidden");
  showNewButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  saveCoverButton.classList.add("hidden");
  savedPage.classList.add("hidden");
}

homeButton.addEventListener("click", goHome);

function goHome() {
  formPage.classList.add("hidden");
  homePage.classList.remove("hidden");
  showNewButton.classList.remove("hidden");
  homeButton.classList.add("hidden");
  saveCoverButton.classList.remove("hidden");
}

viewSavedButton.addEventListener("click", viewSavedCovers);
function viewSavedCovers() {
  homePage.classList.add("hidden");
  savedPage.classList.remove("hidden");
  saveCoverButton.classList.add("hidden");
  showNewButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  formPage.classList.add("hidden");

  var savedCoversHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversHTML += `
    <section class="mini-cover">
    <img class="cover-image" src="${savedCovers[i].cover}">
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    </section>
    `;
  }

  var savedCoversSection = document.querySelector(".saved-covers-section");
  savedCoversSection.innerHTML = savedCoversHTML;
  var miniCovers = document.querySelectorAll(".mini-cover");
  for (var i = 0; i < miniCovers.length; i++) {
    const tmp = i;
    miniCovers[i].addEventListener("dblclick", function() {
      savedCovers.splice(tmp, 1);
      viewSavedCovers();
    });
  }
}

//Iteration 3
var coverInput = document.querySelector(".user-cover");
var titleInput = document.querySelector(".user-title");
var desc1Input = document.querySelector(".user-desc1");
var desc2Input = document.querySelector(".user-desc2");

var makeBookButton = document.querySelector(".create-new-book-button");

makeBookButton.addEventListener("click", function() {
  event.preventDefault();
  makeNewBook(
    coverInput.value,
    titleInput.value,
    desc1Input.value,
    desc2Input.value
  );
  displayNewCover();
  goHome();
});

function displayNewCover() {
  coverImg.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function makeNewBook(
  customCoverInput,
  customTitleInput,
  desc1Input,
  desc2Input
) {
  covers.push(customCoverInput);
  titles.push(customTitleInput);
  descriptors.push(desc1Input);
  descriptors.push(desc2Input);
  currentCover = new Cover(
    customCoverInput,
    customTitleInput,
    desc1Input,
    desc2Input
  );
}

//Iteration 4
saveCoverButton = document.querySelector(".save-cover-button");

saveCoverButton.addEventListener("click", function() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
});
