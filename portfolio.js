
/* Adds functionality to the profile image. When hovered over, it replaces the B&W image with the Color image.
When the mouse leaves, the image reverts
*/
const profile_img = document.getElementById("profile-img");

profile_img.addEventListener('mouseover', (event) => {
    event.target.src="images/portrait_color.jpg";
});

profile_img.addEventListener('mouseout', (event) =>  {
    event.target.src="images/portrait.jpg";
});


/* Adds functionality to the contact icons. When each is hovered over, its color will change.
When the mouse leaves, the color reverts
*/

const email_icon = document.getElementById("email-icon");

email_icon.addEventListener('mouseover', (event) => {
    event.target.style.color = '#1ABC9C';
});
email_icon.addEventListener('mouseout', (event) => {
    event.target.style.color = '#2C3E50';
});

const linkedin_icon = document.getElementById("linkedin-icon");

linkedin_icon.addEventListener('mouseover', (event) => {
    event.target.style.color = '#1ABC9C';
});
linkedin_icon.addEventListener('mouseout', (event) => {
    event.target.style.color = '#2C3E50';
});

const github_icon = document.getElementById("github-icon");

github_icon.addEventListener('mouseover', (event) => {
    event.target.style.color = '#1ABC9C';
});
github_icon.addEventListener('mouseout', (event) => {
    event.target.style.color = '#2C3E50';
});