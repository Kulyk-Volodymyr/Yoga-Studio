export function scrollAnimation() {
  const bottomToShow = window.innerHeight - 120;
  const bottomToHide = window.innerHeight - 60;

  const listImageText = document.querySelector(".list-image__text");
  const listImageImage = document.querySelector(".list-image__image");
  const listInfoDecor = document.querySelector(".list-info__decor");
  const listInfoText = document.querySelector(".list-info__text");
  const listInfoLink = document.querySelector(".list-info__link");

  const healthImageHeart = document.querySelector(".health-image__heart");
  const healthImageFree = document.querySelector(".health-image__free");
  const healthInfoLink = document.querySelector(".health-info__link");
  const heartRate = document.getElementById("heart-rate");
  let heartCounter = 0;
  const freeCourses = document.getElementById("free-courses");
  let coursesCounter = 0;

  const routineInfoLink = document.querySelector(".routine-info__link");
  const routineImageTop = document.querySelector(".routine-images__image_top");
  const routineInfoTop = document.querySelector(".routine-images__info_top");
  const routineImageBottom = document.querySelector(
    ".routine-images__image_bottom"
  );
  const routineInfoBottom = document.querySelector(
    ".routine-images__info_bottom"
  );

  const followInfoLink = document.querySelector(".follow-info__link");
  const followImgTopLeft = document.querySelector(".follow-images__top-left");
  const followImgTopRight = document.querySelector(".follow-images__top-right");

  const joinTitle = document.querySelector(".join__title");
  const joinText = document.querySelector(".join__text");
  const joinForm = document.querySelector(".join__form");

  function animations() {
    if (listImageText.getBoundingClientRect().top < bottomToShow) {
      listImageText.classList.remove("translateY_down");
      listImageImage.classList.remove("translateY_down");
      listImageImage.style.transitionDelay = "0.2s";
      listInfoDecor.classList.remove("translateY_down");
      listInfoDecor.style.transitionDelay = "0.4s";
      listInfoText.classList.remove("translateY_down");
      listInfoText.style.transitionDelay = "0.4s";
      listInfoLink.classList.remove("translateY_down");
      listInfoLink.style.transitionDelay = "0.6s";
    }
    if (listImageText.getBoundingClientRect().top > bottomToHide) {
      [
        listImageText,
        listImageImage,
        listInfoDecor,
        listInfoText,
        listInfoLink,
      ].forEach((i) => i.classList.add("translateY_down"));
    }

    if (healthImageHeart.getBoundingClientRect().top < bottomToShow) {
      healthImageHeart.classList.remove("scale");
      if (heartCounter === 0) {
        let countHeart = setInterval(() => {
          heartCounter += 2;
          heartRate.innerHTML = heartCounter;
          if (heartCounter === 168) {
            clearInterval(countHeart);
          }
        });
      }
    }
    if (healthImageHeart.getBoundingClientRect().top > bottomToHide) {
      healthImageHeart.classList.add("scale");
      heartCounter = 0;
      heartRate.innerHTML = 0;
    }
    if (healthImageFree.getBoundingClientRect().top < bottomToShow) {
      healthImageFree.classList.remove("scale");
      if (coursesCounter === 0) {
        let countCourses = setInterval(() => {
          coursesCounter += 4;
          freeCourses.innerHTML = coursesCounter;
          if (coursesCounter === 500) {
            clearInterval(countCourses);
          }
        });
      }
    }
    if (healthImageFree.getBoundingClientRect().top > bottomToHide) {
      healthImageFree.classList.add("scale");
      coursesCounter = 0;
      freeCourses.innerHTML = 0;
    }
    if (healthInfoLink.getBoundingClientRect().top < bottomToShow) {
      healthInfoLink.classList.remove("translateX_left");
    }
    if (healthInfoLink.getBoundingClientRect().top > bottomToHide) {
      healthInfoLink.classList.add("translateX_left");
    }

    if (healthInfoLink.getBoundingClientRect().top < bottomToShow) {
      healthInfoLink.classList.remove("translateX_left");
    }
    if (healthInfoLink.getBoundingClientRect().top > bottomToHide) {
      healthInfoLink.classList.add("translateX_left");
    }

    if (routineInfoLink.getBoundingClientRect().top < bottomToShow) {
      routineInfoLink.classList.remove("translateX_left");
    }
    if (routineInfoLink.getBoundingClientRect().top > bottomToHide) {
      routineInfoLink.classList.add("translateX_left");
    }
    if (routineImageTop.getBoundingClientRect().top < bottomToShow * 4) {
      routineImageTop.classList.remove("translateY_up");
      routineInfoTop.style.transitionDelay = "0.2s";
      routineInfoTop.classList.remove("scale");
    }
    if (routineImageTop.getBoundingClientRect().top > bottomToHide) {
      routineImageTop.classList.add("translateY_up");
      routineInfoTop.classList.add("scale");
    }
    if (routineImageBottom.getBoundingClientRect().top < bottomToShow) {
      routineImageBottom.classList.remove("translateY_down");
      routineInfoBottom.style.transitionDelay = "0.2s";
      routineInfoBottom.classList.remove("scale");
    }
    if (routineImageBottom.getBoundingClientRect().top > bottomToHide) {
      routineImageBottom.classList.add("translateY_down");
      routineInfoBottom.classList.add("scale");
    }

    if (followInfoLink.getBoundingClientRect().top < bottomToShow) {
      followInfoLink.classList.remove("translateX_left");
    }
    if (followInfoLink.getBoundingClientRect().top > bottomToHide) {
      followInfoLink.classList.add("translateX_left");
    }
    if (followImgTopLeft.getBoundingClientRect().top < bottomToShow * 3) {
      followImgTopLeft.classList.remove("translateY_down");
      followImgTopRight.style.transitionDelay = "0.2s";
      followImgTopRight.classList.remove("translateY_down");
    }
    if (followImgTopLeft.getBoundingClientRect().top > bottomToHide) {
      followImgTopLeft.classList.add("translateY_down");
      followImgTopRight.classList.add("translateY_down");
    }

    if (joinTitle.getBoundingClientRect().top < bottomToShow) {
      joinTitle.classList.remove("scale");
      joinText.style.transitionDelay = "0.2s";
      joinText.classList.remove("scale");
      joinForm.style.transitionDelay = "0.4s";
      joinForm.classList.remove("scale");
    }
    if (joinTitle.getBoundingClientRect().top > bottomToHide) {
      joinTitle.classList.add("scale");
      joinText.classList.add("scale");
      joinForm.classList.add("scale");
    }
  }

  window.addEventListener("scroll", animations);
}
