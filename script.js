function option1Clicked() {
    var slideContainer = document.getElementById("slideContainer");
    slideContainer.classList.remove("hidden");
    slideContainer.scrollIntoView({ behavior: 'smooth' });
}

function option2Clicked() {
    var slideContainer1 = document.getElementById("slideContainer1");
    slideContainer1.classList.remove("hidden");
    slideContainer1.scrollIntoView({ behavior: 'smooth' });
}

function showOptions() {
    var optionsDiv = document.getElementById("options");
    optionsDiv.classList.remove("hidden");
}

window.onload = function() {
    var slideContainer = document.getElementById("slideContainer");
    slideContainer.classList.add("hidden");

    var slideContainer1 = document.getElementById("slideContainer1");
    slideContainer1.classList.add("hidden");
};
