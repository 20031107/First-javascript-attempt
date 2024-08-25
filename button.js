
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("#share-btn");
    const socialIcons = document.querySelector(".socials");
    const mobileIcons = document.querySelector(".mobile")

    button.addEventListener('click', function() {
       socialIcons.style.display = 'flex';
    });
    button.addEventListener('click', function() {
        button.style.backgroundColor = "rgb(58, 60, 70)";
      });
      button.addEventListener('click', function() {
        mobileIcons.style.display = "none";
      });
})



