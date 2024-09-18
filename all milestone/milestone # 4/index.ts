const resumeCon = document.getElementById("resume-container") as HTMLElement;
const resumeDisplay = document.getElementById("formm") as HTMLElement;
let heading = document.getElementById("h1") as HTMLElement;
let pdfLinkCon = document.getElementById("generated-link-con") as HTMLElement;
let pdfLink = document.getElementById("generated-link") as HTMLAnchorElement;
const pdfbtn = document.getElementById("link-btn") as HTMLButtonElement;
//add ecent to submit form
resumeCon.addEventListener("submit" , (event :Event) => {
    event.preventDefault();
    //collect data from input
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("edu") as HTMLInputElement).value;
    const experience = (document.getElementById("exp") as HTMLInputElement).value;
    const skills = (document.getElementById("skillinput") as HTMLInputElement).value; 

    //generate username
    const usersData = {
        name,
        email,
        phone,
        education,
        experience, 
        skills
    };
    localStorage.setItem(username,JSON.stringify(usersData));

    //title case function for first letter of each word in string  - used for formatting resume data
    function titlecase(str: string){
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
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
`

resumeDisplay.innerHTML = resumeControl
// generate link with username


const urlLink =`${window.location.origin}?username=${encodeURIComponent(username)}`;

//link display
     pdfLinkCon.style.display = "block";
     pdfLink.href = urlLink;
     pdfLink.textContent = urlLink;

})
pdfbtn.addEventListener("click",()=>{
   window.print();
});

//add even lister to prefil the form based on username 

window.addEventListener("DOMcontentLoaded",()=>{
    const urlPara = new URLSearchParams(window.location.search);
 const username = urlPara.get('username');

 if(username){
    const savedData =  localStorage.getItem(username);
    if (savedData) {
        const resumeData = JSON.parse(savedData);
        (document.getElementById('username') as HTMLInputElement).value = username;
        (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
        (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
        (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
        (document.getElementById('edu') as HTMLTextAreaElement).value = resumeData.education;
        (document.getElementById('exp') as HTMLTextAreaElement).value = resumeData.experience;
        (document.getElementById('skillinput') as HTMLTextAreaElement).value = resumeData.skills;
    }
}
});


