let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "test-site/images/Hatsune_miku_logo_v3.png") {
    myImage.setAttribute("src", "test-site/images/miku-vector-38.png");
  } else {
    myImage.setAttribute("src", "test-site/images/Hatsune_miku_logo_v3.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Miku is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Miku is cool, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
