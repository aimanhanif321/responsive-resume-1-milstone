
let pInfo = document.querySelector("#pinfo") as HTMLElement;
let expriance = document.querySelector("#exp") as HTMLElement;
let education = document.querySelector("#edu") as HTMLElement;
let skills = document.querySelector("#skillsSec") as HTMLElement;
let socialLinks = document.querySelector("#sociallinks") as HTMLElement;

// access btn elements

let fBtn = document.querySelector("#firstBtn") as HTMLElement;

const secBtn = document.querySelector("#secBtn") as HTMLElement;

const thBtn = document.querySelector("#thirdBtn") as HTMLElement;

const forBtn = document.querySelector("#forthBtn") as HTMLElement;

const fifBtn = document.querySelector("#fifBtn") as HTMLElement;



fBtn.addEventListener("click", () =>{
    if(pInfo.style.display == "none"){
        pInfo.style.display = "block"
    }
    else{
        pInfo.style.display = "none";
    }
})

secBtn.addEventListener("click", () =>{
    if(expriance.style.display == "none"){
        expriance.style.display = "block"
    }
    else{
        expriance.style.display = "none";
    }
})
thBtn.addEventListener("click", () =>{
    if(education.style.display == "none"){
        education.style.display = "block"
    }
    else{
        education.style.display = "none";
    }
})
forBtn.addEventListener("click", () =>{
    if(skills.style.display == "none"){
        skills.style.display = "block"
    }
    else{
        skills.style.display = "none";
    }
})
fifBtn.addEventListener("click", () =>{
    if(socialLinks.style.display == "none"){
    socialLinks.style.display = "block"
    }
    else{
        socialLinks.style.display = "none";
    }
})
