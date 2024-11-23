// Add hover effects and interactions for buttons
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".inline-btn");

  buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "#0056b3"; // Darker shade on hover
    });

    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "#007BFF"; // Reset to original
    });

    button.addEventListener("click", () => {
      console.log("Button clicked: " + button.textContent); // Log the button action
    });
  });
});
