const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  // pokaz light ikone
  themeToggleLightIcon.classList.remove("hidden");
} else {
  // pokaz ciemna ikone
  themeToggleDarkIcon.classList.remove("hidden");
}

//nacisk klik
themeToggleBtn.addEventListener("click", toggleMode);

function toggleMode() {
  //toggle icon
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  //local storage
  if (localStorage.getItem("color-theme")) {
    //sprawdz czy light to robimy ciemny mode i zapisujemy
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    //jesli nime w local storage
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
    }
  }
}
