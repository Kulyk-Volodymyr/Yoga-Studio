export function switchColorTheme() {
  const useDark = window.matchMedia("(prefers-color-scheme: dark)");
  const body = document.getElementsByTagName("body")[0];
  const button = document.querySelector(".color-theme-switch");
  const burgerImg = document.querySelector(".burger-button__img");
  let themeIsDark;

  function toggleDarkMode(state) {
    themeIsDark = state;
    if (state) {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
      button.src = button.src.replace("icon-moon", "icon-sun");
      burgerImg.src = burgerImg.src.replace("-dark", "-light");
    } else {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
      button.src = button.src.replace("icon-sun", "icon-moon");
      burgerImg.src = burgerImg.src.replace("-light", "-dark");
    }
  }

  // On load
  toggleDarkMode(useDark.matches);

  // Brawser settings changing
  useDark.addEventListener("change", (evt) => {
    toggleDarkMode(evt.matches);
  });

  // Button click
  button.addEventListener("click", () => {
    toggleDarkMode(!themeIsDark);
  });
}
