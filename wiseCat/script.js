"use strict";

const adviceUrl = "https://api.adviceslip.com/advice";
const imageUrl = "https://api.thecatapi.com/v1/images/search";
const adviceContainer = document.querySelector("#advice-container");
const imageContainer = document.querySelector("#image-container");

const buildAdvice = adviceData => {
  const Adviceobj = adviceData.slip;
  const body = document.createElement("p");
  body.innerText = `"${Adviceobj.advice}"`;
  adviceContainer.appendChild(body);
}

const buildImage = imgData => {
  const Imgobj = imgData[0];
  const image = document.createElement("img");
  image.src = Imgobj.url;
  imageContainer.appendChild(image);
}

function apiRequest(url, builType) {
  fetch(url).then(response => {
    return response.json();
  }).then(builType).catch(error => {
    console.error(error);
  });
}
apiRequest(adviceUrl, buildAdvice);
apiRequest(imageUrl, buildImage);

