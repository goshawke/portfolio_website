const profile_img = document.getElementById("profile-img");

profile_img.addEventListener('mouseover', (event) => {
    event.target.src="images/portrait_color.jpg";
});

profile_img.addEventListener('mouseout', (event) =>  {
    event.target.src="images/portrait.jpg";
});