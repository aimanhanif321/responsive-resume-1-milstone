"use strict";
const resumeCon = document.getElementById("resume-container");
const resumeDisplay = document.getElementById("formm");
let heading = document.getElementById("h1");
let pdfLinkCon = document.getElementById("generated-link-con");
let pdfLink = document.getElementById("generated-link");
const pdfbtn = document.getElementById("link-btn");
//add ecent to submit form
resumeCon.addEventListener("submit", (event) => {
    event.preventDefault();
    //collect data from input
    const username = document.getElementById("username").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("edu").value;
    const experience = document.getElementById("exp").value;
    const skills = document.getElementById("skillinput").value;
    //generate username
    const usersData = {
        name,
        email,
        phone,
        education,
        experience,
        skills
    };
    localStorage.setItem(username, JSON.stringify(usersData));
    //title case function for first letter of each word in string  - used for formatting resume data
    function titlecase(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    // generated resume  
    const resumeControl = `
    
    <fieldset style="border: 1px solid #ccc; padding: 10px; margin-bottom: 15px;">
        <legend style="font-size: 1.5em; font-weight: bold;font-size:36px">Personal Information</legend>
        <label for="name">Name:</label>
        <b style="color: #333;"> <span contenteditable="true">${titlecase(name)}</span></b>
        <label for="email">Email:</label>
        <b style="color: #333;" <span contenteditable="true">${email}</span></b>
        <label for="phone">Phone:</label>
        <b style="color: #333;" <span contenteditable="true">${phone}</span></b>
        
    </fieldset>

    <fieldset style="border: 1px solid #ccc; padding: 10px; margin-bottom: 15px;">
        <legend style="font-size: 1.5em; font-weight: bold;">Education</legend>
        <label for="education">Education:</label>
        <b style="color: #333;" <span contenteditable="true">${titlecase(education)} </span></b><br>
    </fieldset>

    <fieldset style="border: 1px solid #ccc; padding: 10px; margin-bottom: 15px;">
        <legend style="font-size: 1.5em; font-weight: bold;">Experience</legend>
        <label for="experience">Experience:</label>
        <b style="color: #333;" <span contenteditable="true">${titlecase(experience)}</span></b><br>
    </fieldset>

    <fieldset style="border: 1px solid #ccc; padding: 10px;">
        <legend style="font-size: 1.5em; font-weight: bold;">Skills</legend>
        <label for="skills">Skills:</label>
        <b style="color: #333;" <span contenteditable="true">${titlecase(skills)} </span></b><br>
    </fieldset>
`;
    resumeDisplay.innerHTML = resumeControl;
    // generate link with username
    const urlLink = `${window.location.origin}?username=${encodeURIComponent(username)}`;
    //link display
    pdfLinkCon.style.display = "block";
    pdfLink.href = urlLink;
    pdfLink.textContent = urlLink;
});
pdfbtn.addEventListener("click", () => {
    window.print();
});
//add even lister to prefil the form based on username 
window.addEventListener("DOMcontentLoaded", () => {
    const urlPara = new URLSearchParams(window.location.search);
    const username = urlPara.get('username');
    if (username) {
        const savedData = localStorage.getItem(username);
        if (savedData) {
            const resumeData = JSON.parse(savedData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('edu').value = resumeData.education;
            document.getElementById('exp').value = resumeData.experience;
            document.getElementById('skillinput').value = resumeData.skills;
        }
    }
});
