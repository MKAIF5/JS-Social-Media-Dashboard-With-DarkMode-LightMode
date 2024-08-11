const btn = document.getElementById("toggle");
const theme = document.querySelector("#theme-link");

btn.addEventListener("click", () => {

  if (theme.getAttribute("href") == "style.css") {
    theme.href = "dark-theme.css";
  }
  else {
    theme.href = "style.css";
  }
});