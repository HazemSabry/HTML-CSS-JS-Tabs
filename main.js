const root = document.getElementById("root");
const homePage = document.getElementById("home-page");
const pricePage = document.getElementById("price-page");
const aboutPage = document.getElementById("about-page");

homePage.addEventListener("click", () => {
  homePage.classList.add("active");
  pricePage.classList.remove("active");
  aboutPage.classList.remove("active");
  root.innerHTML = homePageContent();
});

pricePage.addEventListener("click", () => {
  homePage.classList.remove("active");
  pricePage.classList.add("active");
  aboutPage.classList.remove("active");
  root.innerHTML = pricePageContent();
});

aboutPage.addEventListener("click", () => {
  homePage.classList.remove("active");
  pricePage.classList.remove("active");
  aboutPage.classList.add("active");
  root.innerHTML = aboutPageContent();
});

const homePageContent = () => {
  return "<h1>Home</h1><p>Home content</p>";
};

const pricePageContent = () => {
  return "<h1>Price</h1><p>Price content</p>";
};

const aboutPageContent = () => {
  return "<h1>About</h1><p>About content</p>";
};
