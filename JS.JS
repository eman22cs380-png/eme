// Dark Mode Toggle Functionality
const darkModeButton = document.getElementById("dark-mode-toggle");

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  
  // Toggle button icon
  if (document.body.classList.contains("dark-mode")) {
    darkModeButton.textContent = "🌞";
  } else {
    darkModeButton.textContent = "🌙";
  }
});
