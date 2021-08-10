function openModal() { // Declares the function that, when called, displays the myModal parent element and its children.
    document.getElementById("myModal").style.display = "block";
}

function closeModal() { // Declares the function that, when called, hides the myModal parent element and its children.
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1; // Declares the variable and sets its initial value to 1.
showSlides(slideIndex); // Sets the parameter for showSlides() to slideIndex

function plusSlides(n) { // Declares the function plusSlides to take the value given to it via the onclick attribute on the arrow anchor elements to either add or subtract 1 from the value of slideIndex to show the next or previous slide
    showSlides(slideIndex += n); // Calls the showSlides function and set's the recieved value to either plus or minus 1 from slideIndex's current value
}

function currentSlide(n) { // Declares the function currentSlide to display the slide related to the slideIndex number for the thumbnail image at the bottom of the lightbox.
    showSlides(slideIndex = n); // Calls the showSlides function and set's the recieved value to the slideIndex number recieved through the link element
}

function showSlides(n) { // Declares the function and gives it the parameter of n
    var i; // Declares the variable but leaves it uninitialized
    var slides = document.getElementsByClassName("mySlides"); // Declares the variable for the slides array
    var thumbs = document.getElementsByClassName("click"); // Declares the variable for the thumbs array
    var captionText = document.getElementById("caption"); // Declares the variable that holds the value of the string related to the image being shown
    if (n > slides.length) {slideIndex = 1}// Conditional checks if the value of n is greater than the length of the slides array. If it is, it set's the value of the slideIndex back to 1 (to go from the last slide back to the first slide)
    if (n < 1) {slideIndex = slides.length} // Conditional checks if n is less than 1 and, if it is, sets the slideIndex to the value of slides.length (to go from the first slide to the last slide if moving backwards through them)
    for (i = 0; i < slides.length; i++) { // Begins a loop that iterates through the slides array
        slides[i].style.display = "none"; // for each iteration through the slides array, the slides display is set to none so it is not shown
    }
    for (i = 0; i < thumbs.length; i++) { // Begins a loop that iterates through the thumbs array
        thumbs[i].className = thumbs[i].className.replace(" active", ""); // for each iteration through the thumbs array, it removes the class name "active" for each element
    }
    slides[slideIndex-1].style.display = "block"; // Displays the current slide selected
    thumbs[slideIndex-1].className += " active"; // Sets the current thumbnail for the selected image to active via the class name for the CSS styling
    captionText.innerHTML = thumbs[slideIndex-1].alt; // Sets the caption text to the current alt value for the active thumb element.
}