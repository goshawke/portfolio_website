
/* Adds functionality to the profile image. When hovered over, it replaces the B&W image with the Color image.
When the mouse leaves, the image reverts
*/
const profile_img = document.getElementById("profile-img");

if(profile_img)
    {
        profile_img.addEventListener('mouseover', (event) => {
            event.target.src="images/portrait_color.jpg";
        });
        
        profile_img.addEventListener('mouseout', (event) =>  {
            event.target.src="images/portrait.jpg";
        });
        
    }


/* 
Adds functionality to the contact icons. When each is hovered over, its color will change.
When the mouse leaves, the color reverts
*/

const email_icon = document.getElementById("email-icon");
if(email_icon){
    email_icon.addEventListener('mouseover', (event) => {
        event.target.style.color = '#1ABC9C';
    });
    email_icon.addEventListener('mouseout', (event) => {
        event.target.style.color = '#2C3E50';
    });
}

const linkedin_icon = document.getElementById("linkedin-icon");
if(linkedin_icon){

    linkedin_icon.addEventListener('mouseover', (event) => {
        event.target.style.color = '#1ABC9C';
    });
    linkedin_icon.addEventListener('mouseout', (event) => {
        event.target.style.color = '#2C3E50';
    });
    
}

const github_icon = document.getElementById("github-icon");
if(github_icon){
    github_icon.addEventListener('mouseover', (event) => {
        event.target.style.color = '#1ABC9C';
    });
    github_icon.addEventListener('mouseout', (event) => {
        event.target.style.color = '#2C3E50';
    });
}



/*
Adds functionality to the header buttons. When each is hovered over, its color will change.
When the mouse leaves, the color reverts
*/

const home_btn = document.getElementById("home-btn");
if(home_btn){
    home_btn.addEventListener('mouseover', (event) => {
        event.target.style.color = '#1ABC9C';
    });
    home_btn.addEventListener('mouseout', (event) => {
        event.target.style.color = '#BDC3C7';
    });
}


const projects_btn = document.getElementById("projects-btn");
if(projects_btn){
    projects_btn.addEventListener('mouseover', (event) => {
        event.target.style.color = '#1ABC9C';
    });
    projects_btn.addEventListener('mouseout', (event) => {
        event.target.style.color = '#BDC3C7';
    });
}


/*
Adds functionality to the project link. When each is hovered over, its color will change.
When the mouse leaves, the color reverts
*/

const proj_link = document.getElementById("project-link");
if(proj_link){
    proj_link.addEventListener('mouseover', (event) => {
        event.target.style.color = '#1ABC9C';
    });
    proj_link.addEventListener('mouseout', (event) => {
        event.target.style.color = '#BDC3C7';
    });
}

