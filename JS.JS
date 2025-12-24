document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("dark-mode-toggle");

  if (!button) {
    console.log("Button not found");
    return;
  }

  button.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      button.textContent = "🌞";
    } else {
      button.textContent = "🌙";
    }
  });
});
