const visitButton = document.querySelector(".header__logo");
visitButton.addEventListener("click", function () {
  // Define the URL to visit
  const url = "index.html"; // Replace 'https://example.com' with the desired URL

  // Navigate to the URL
  window.location.href = url;
});
