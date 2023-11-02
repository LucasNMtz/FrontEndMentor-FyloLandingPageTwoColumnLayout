// Social logos
const socialLogosContainer = document.querySelectorAll(".social-logos-a");
const socialLogos = document.querySelectorAll(".social-logos");

socialLogosContainer.forEach(function (div, index) 
{
    div.addEventListener("mouseenter" , function () 
    {
        socialLogos[index].src = socialLogos[index].src.replace(".svg", "-blue.svg");
    })

    div.addEventListener("mouseleave" , function () 
    {
        socialLogos[index].src = socialLogos[index].src.replace("-blue.svg", ".svg");
    })
});
// Social logos
// See How Fylo Works
const divContainer = document.querySelector(".article__div-see-how-fylo-works-container");
const aText = document.querySelector(".article__div-see-how-fylo-works-container a");
const imgArrow = document.querySelector(".article__div-see-how-fylo-works-container img");

divContainer.addEventListener("mouseenter", function () 
{
    divContainer.style.borderColor = "hsl(170, 65%, 71%)";
    aText.style.color = "hsl(170, 65%, 71%)";
    imgArrow.src = imgArrow.src.replace(".svg", "-hover.svg");
});

divContainer.addEventListener("mouseleave", function () 
{
    divContainer.style.borderColor = "hsl(170, 45%, 43%)";
    aText.style.color = "hsl(170, 45%, 43%)";
    imgArrow.src = imgArrow.src.replace("-hover.svg", ".svg");
});
// See How Fylo Works
// Form Input Validation
const emailInputs = document.querySelectorAll(".email-input");
const inputMessageContainers = document.querySelectorAll(".email-input-validation-message-container");
const inputMessages = document.querySelectorAll(".email-input-validation-message-container span");

emailInputs.forEach(function (div, index) 
{
    div.addEventListener("input", function () 
    {
        const email = div.value;

        inputMessageContainers[index].style.display = "block";

        if (isValidEmail(email)) 
        {
            div.style.border = "1px solid #28cd28"; // Set the border color to green.
            inputMessages[index].textContent = "Valid email";
            inputMessages[index].style.color = "#28cd28";
        } else {
            div.style.border = "1px solid hsl(0, 100%, 63%)"; // Set the border color to red.
            inputMessages[index].textContent = "Please check your email";
            inputMessages[index].style.color = "hsl(0, 100%, 63%)";
        }
    });

    div.addEventListener("blur", function () 
    {
        div.style.border = "1px solid hsl(0, 0%, 0%, 60%)"; // Resets the border color when leaving the field.
        inputMessageContainers[index].style.display = "none";
    });
});

function isValidEmail(email) 
{
    // Use a regular expression to validate the email format.
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
// Form Input Validation