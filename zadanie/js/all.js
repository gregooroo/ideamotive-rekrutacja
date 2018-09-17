document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector("button");

  submitButton.addEventListener("click", e => {
    const form = document.querySelector("form");
    const checkboxValues = new FormData(form).getAll("character");

    // Array not empty and contains only "dark side" characters
    if (checkboxValues.length > 0 && !checkboxValues.includes("light_side")) {
      // Block submit button and play "Imperial march"
      e.preventDefault();
      submitButton.setAttribute("disabled", "disabled");
      const audio = new Audio("imperial_march.mp3");
      audio.play();
    }
  });
});
