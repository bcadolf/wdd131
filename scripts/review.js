const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = "&copy" + today.getFullYear();
lastModified.innerHTML = "Last Modified: " + document.lastModified;



const reviewCount = document.getElementById("reviewCount");

let numReviews = Number(window.localStorage.getItem("numReview-ls")) || 0;

if (numReviews !== 0) {
    reviewCount.textContent = numReviews;
} else {
    reviewCount.textContent = 0
}

numReviews++;

localStorage.setItem("numReviews-ls", numReviews)