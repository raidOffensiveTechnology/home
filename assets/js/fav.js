const favicon = document.getElementById("favicon");
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: 
dark)");

function setFavicon(theme) {
  if (theme === "dark") {
    favicon.href = "w.png";
  } else {
    favicon.href = "b.png";
  }
}

// Initial check for the user's theme
setFavicon(darkModeMediaQuery.matches ? "dark" : "light");

// Listen for changes in the user's theme
darkModeMediaQuery.addListener((e) => {
  const theme = e.matches ? "dark" : "light";
  setFavicon(theme);
});

