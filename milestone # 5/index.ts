const resumeCon = document.getElementById("resume-container") as HTMLElement;
const resumeDisplay = document.getElementById("formm") as HTMLElement;
let heading = document.getElementById("h1") as HTMLElement;
//add ecent to submit form
resumeCon.addEventListener("submit" , (event :Event) => {
    event.preventDefault();
    //collect data from input
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("edu") as HTMLInputElement).value;
    const experience = (document.getElementById("exp") as HTMLInputElement).value;
    const skills = (document.getElementById("skillinput") as HTMLInputElement).value; 

    //title case function for first letter of each word in string  - used for formatting resume data
    function titlecase(str: string){
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
          }
   
    // generated resume  
    const resumeControl = `
    
    <fieldset style="border: 1px solid #ccc; padding: 10px; margin-bottom: 15px;">
        <legend style="font-size: 1.5em; font-weight: bold;font-size:36px">Personal Information</legend>
        <label for="name">Name:</label>
        <b style="color: #333;">${titlecase(name)}</b>
        <label for="email">Email:</label>
        <b style="color: #333;">${email}</b>
        <label for="phone">Phone:</label>
        <b style="color: #333;">${phone}</b>
        
    </fieldset>

    <fieldset style="border: 1px solid #ccc; padding: 10px; margin-bottom: 15px;">
        <legend style="font-size: 1.5em; font-weight: bold;">Education</legend>
        <label for="education">Education:</label>
        <b style="color: #333;">${titlecase(education)}</b><br>
    </fieldset>

    <fieldset style="border: 1px solid #ccc; padding: 10px; margin-bottom: 15px;">
        <legend style="font-size: 1.5em; font-weight: bold;">Experience</legend>
        <label for="experience">Experience:</label>
        <b style="color: #333;">${titlecase(experience)}</b><br>
    </fieldset>

    <fieldset style="border: 1px solid #ccc; padding: 10px;">
        <legend style="font-size: 1.5em; font-weight: bold;">Skills</legend>
        <label for="skills">Skills:</label>
        <b style="color: #333;">${titlecase(skills)}</b><br>
    </fieldset>
`

    if(resumeDisplay){
        resumeDisplay.innerHTML = resumeControl;
        heading.textContent = "Your Resume is Successfully generated";
    }

    else{
        console.error(`somthing s missing`);
    }
})