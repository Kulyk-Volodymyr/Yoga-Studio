export function burgerClick() {
  const burgerBtn = document.getElementById("burger-button");
  const burgerBtnImg = document.querySelector(".burger-button__img");
  const burgerMenu = document.querySelector(".header__nav");
  let burgerMenuHidden = true;
  burgerBtn.addEventListener("click", handleClick);

  const headerLinks = document.querySelectorAll(".header__list-link");
  headerLinks.forEach((i) => i.addEventListener("click", handleClick));

  function handleClick() {
    burgerMenu.classList.toggle("header__nav_visible");

    burgerBtnImg.classList.add("burger-img-animation");
    setTimeout(() => {
      burgerBtnImg.classList.remove("burger-img-animation");
    }, 400);

    setTimeout(() => {
      burgerMenuHidden
        ? (burgerBtnImg.src = burgerBtnImg.src.replace(
            "burger-close",
            "burger-open"
          ))
        : (burgerBtnImg.src = burgerBtnImg.src.replace(
            "burger-open",
            "burger-close"
          ));
    }, 200);

    burgerMenuHidden = !burgerMenuHidden;
  }
}
