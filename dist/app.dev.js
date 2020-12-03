"use strict";

var signInButton = document.querySelector("#sign-in-btn");
var signUpButton = document.querySelector("#sign-up-btn");
var container = document.querySelector(".container");
signUpButton.addEventListener("click", function () {
  container.classList.add("sign-up-mode");
});
signInButton.addEventListener("click", function () {
  container.classList.remove("sign-up-mode");
});