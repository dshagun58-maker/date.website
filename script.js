const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const nextButton = document.getElementById("nextButton");

const firstSlide = document.getElementById("firstSlide");
const secondSlide = document.getElementById("secondSlide");
const thirdSlide = document.getElementById("thirdSlide");
const dateSlide = document.getElementById("dateSlide");
const fourthSlide = document.getElementById("fourthSlide");

const datePicker = document.getElementById("datePicker");
const dateNextButton = document.getElementById("dateNextButton");

const finalMessage = document.getElementById("finalMessage");
const choiceMessage = document.getElementById("choiceMessage");


// YES BUTTON
yesButton.addEventListener("click", function() {

    firstSlide.style.display = "none";
    secondSlide.style.display = "block";

});


// NEXT BUTTON - SLIDE 2
nextButton.addEventListener("click", function() {

    secondSlide.style.display = "none";
    thirdSlide.style.display = "block";

});


// NO BUTTON
noButton.addEventListener("mouseover", function() {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    noButton.style.position = "fixed";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";

});


// MOVIE
document.getElementById("movieButton").addEventListener("click", function() {

    showDateSlide("Movie 🎬🍿💕");

});


// CAFE
document.getElementById("cafeButton").addEventListener("click", function() {

    showDateSlide("Cafe ☕💕");

});


// WALK
document.getElementById("walkButton").addEventListener("click", function() {

    showDateSlide("Walk 🌳💕");

});


// SLEEPOVER
document.getElementById("sleepoverButton").addEventListener("click", function() {

    showDateSlide("Sleepover 💤💕");

});


// SHOW DATE SLIDE
function showDateSlide(activity) {

    thirdSlide.style.display = "none";
    dateSlide.style.display = "block";

    choiceMessage.innerText = activity;

}


// DATE NEXT BUTTON
dateNextButton.addEventListener("click", function() {

    if (datePicker.value === "") {

        alert("Please choose a date 📅💕");
        return;

    }

    dateSlide.style.display = "none";
    fourthSlide.style.display = "block";

    finalMessage.innerText =
        "Date selected: " + datePicker.value + " 💕";

});