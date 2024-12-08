// Open Modal when a movie/show is clicked
function openModal(movieId) {
    document.getElementById("movie-modal").style.display = "block";
    // Here you could load dynamic content based on the movieId if needed
    console.log("Opening modal for:", movieId);
}

// Close the modal
function closeModal() {
    document.getElementById("movie-modal").style.display = "none";
}

// Close modal when clicked outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById("movie-modal");
    if (event.target == modal) {
        closeModal();
    }
}
