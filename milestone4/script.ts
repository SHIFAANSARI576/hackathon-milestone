// Get refrences to the form and display area
const form = document.getElementById(`resume-form`) as HTMLFormElement;
const resumeDisplayElement = document.getElementById(`resume-form`) as HTMLFormElement;

// Handle Form submission
form.addEventListener(`submit`, (event: Event) => {
 event.preventDefault(); 
 const name = (document.getElementById(`name`) as  HTMLFormElement).value
 const email = (document.getElementById(`email`) as  HTMLFormElement).value
 const phone = (document.getElementById(`phone`) as  HTMLFormElement).value
 const education = (document.getElementById(`education`) as  HTMLFormElement).value
 const experience = (document.getElementById(`experience`) as  HTMLFormElement).value
 const skills = (document.getElementById(`skills`) as  HTMLFormElement).value

 const resumeHTML =`
 <h2><b>Editable Resume</b></h2>
 <h3>Personal Information</h3>
 <p><b>Name:</b><span contenteditable="true">${name}</span></p>
 <p><b>Email:</b><span contenteditable="true">${email}</span></p>
 <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

 <h3>Education</h3>
 <p contenteditable="true">${education}</p>
 
 <h3>Experience</h3>
 <p contenteditable="true">${experience}</p>

 <h3>Skills</h3>
 <p contenteditable="true">${skills}</p>
 ; `

 if(resumeDisplayElement ){
    resumeDisplayElement.innerHTML = resumeHTML
 }else {
    console.log(`The resume display element is missing`);
 }
 
})