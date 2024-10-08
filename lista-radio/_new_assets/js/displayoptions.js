$(".text-increase").click(function () {
  $(".textOptions").css("font-size", "+=1em");
  var size = $('.textOptions').css('font-size');
  localStorage.setItem('size', size);
});
$(".text-decrease").click(function () {
  $(".textOptions").css("font-size", "-=1em");
  var size = $('.textOptions').css('font-size');
  localStorage.setItem('size', size);
});

$(document).ready(function () {
  var size = localStorage.getItem("size");

  $('.textOptions').css('font-size', size);

});

if (
  localStorage.getItem("color-mode") === "dark" ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localStorage.getItem("color-mode"))
) {
  document.documentElement.setAttribute("color-mode", "dark");
}
if (window.CSS && CSS.supports("color", "var(--primary)")) {
  var toggleColorMode = function toggleColorMode(e) {
    // Switch to Light Mode
    if (e.currentTarget.classList.contains("light--hidden")) {
      // Sets the custom html attribute
      document.documentElement.setAttribute("color-mode", "light"); // Sets the user's preference in local storage

      localStorage.setItem("color-mode", "light");
      return;
    }
    /* Switch to Dark Mode
    Sets the custom html attribute */
    document.documentElement.setAttribute("color-mode", "dark"); // Sets the user's preference in local storage

    localStorage.setItem("color-mode", "dark");
  }; // Get the buttons in the DOM

  var toggleColorButtons = document.querySelectorAll(".color-mode__btn"); // Set up event listeners

  toggleColorButtons.forEach(function (btn) {
    btn.addEventListener("click", toggleColorMode);
  });
} else {
  // If the feature isn't supported, then we hide the toggle buttons
  var btnContainer = document.querySelector(".color-mode__header");
  btnContainer.style.display = "none";
}

