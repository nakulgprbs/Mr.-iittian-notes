document.getElementById('checkbtn').addEventListener('click', function() {
    const ul = document.querySelector('nav ul');
    if (ul.style.left === '0px') {
      ul.style.left = '-100%';
    } else {
      ul.style.left = '0px';
    }
  });

  // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName("gallery-img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}


<script>
// Add event listeners to "View Playlist" buttons
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".inline-btn");

  buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "#0056b3"; // Highlight on hover
    });

    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "#007BFF"; // Reset color
    });

    button.addEventListener("click", () => {
      alert("Redirecting to playlist..."); // Log click action
    });
  });
});

