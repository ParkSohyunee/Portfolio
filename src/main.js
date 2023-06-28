// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height; // border-box인 경우 scrollHeight(단, 반올림)와 높이가 같음 cf) offsetHeight

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// Home 컨텐츠에 아래로 스크롤시 점진적으로 투명하게 처리
const homeContainer = document.querySelector(".home__container");
const containerHeight = homeContainer.offsetHeight;

document.addEventListener("scroll", () => {
  homeContainer.style.opacity = 1 - window.scrollY / containerHeight;
});

// Arrow-UP 버튼을 아래로 스크롤시 나타나게 처리
const home = document.getElementById("home");
const arrowUp = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (window.scrollY < home.offsetHeight / 2) {
    arrowUp.style.opacity = 0;
  } else {
    arrowUp.style.opacity = 1;
  }
});
