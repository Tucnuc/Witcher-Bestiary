const mainImage = document.getElementById('main-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const thumbnails = document.getElementsByClassName('thumbnail');

let currentIndex = 0;

// Add click event listeners to each thumbnail
for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function() {
        // Update the main image to display the selected thumbnail
        mainImage.src = thumbnails[i].src;
        mainImage.alt = thumbnails[i].alt;
        currentIndex = i;
        updateNavButtons();
    });
}

// Add click event listener to the previous button
prevButton.addEventListener('click', function() {
    currentIndex--;
    mainImage.src = thumbnails[currentIndex].src;
    mainImage.alt = thumbnails[currentIndex].alt;
    updateNavButtons();
});

// Add click event listener to the next button
nextButton.addEventListener('click', function() {
    currentIndex++;
    mainImage.src = thumbnails[currentIndex].src;
    mainImage.alt = thumbnails[currentIndex].alt;
    updateNavButtons();
});

// Update the state of the navigation buttons
function updateNavButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === thumbnails.length - 1;
}

// Initialize the navigation buttons state
updateNavButtons();