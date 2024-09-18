"use strict";
let pInfo = document.querySelector("#pinfo");
let expriance = document.querySelector("#exp");
let education = document.querySelector("#edu");
let skills = document.querySelector("#skillsSec");
let socialLinks = document.querySelector("#sociallinks");
// access btn elements
let fBtn = document.querySelector("#firstBtn");
const secBtn = document.querySelector("#secBtn");
const thBtn = document.querySelector("#thirdBtn");
const forBtn = document.querySelector("#forthBtn");
const fifBtn = document.querySelector("#fifBtn");
fBtn.addEventListener("click", () => {
    if (pInfo.style.display == "none") {
        pInfo.style.display = "block";
    }
    else {
        pInfo.style.display = "none";
    }
});
secBtn.addEventListener("click", () => {
    if (expriance.style.display == "none") {
        expriance.style.display = "block";
    }
    else {
        expriance.style.display = "none";
    }
});
thBtn.addEventListener("click", () => {
    if (education.style.display == "none") {
        education.style.display = "block";
    }
    else {
        education.style.display = "none";
    }
});
forBtn.addEventListener("click", () => {
    if (skills.style.display == "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
fifBtn.addEventListener("click", () => {
    if (socialLinks.style.display == "none") {
        socialLinks.style.display = "block";
    }
    else {
        socialLinks.style.display = "none";
    }
});
