let favicon16x16 = document.getElementById("favicon");

const darkModeListener = (e) => {
  if (e.matches) {
    // console.log("dark");
    favicon16x16.setAttribute("href", "assets/favicon/f1_car_16_fff.png");
  } else {
    // console.log("light");
    favicon16x16.setAttribute("href", "assets/favicon/f1_car_dotted_16.png");
  }
}

// update favicon on mode change
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", darkModeListener);

// check mode on load
if (window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
  favicon16x16.setAttribute("href", "assets/favicon/f1_car_16_fff.png");
} else {
  favicon16x16.setAttribute("href", "assets/favicon/f1_car_dotted_16.png");
}