function onReady() { // Handler when the DOM is fully loaded
  var navHamburger = document.querySelector(".nav__hamburger");
  var navMenu = document.querySelector(".nav-menu");
  var navMenuCross = document.querySelector(".nav-menu__cross");
  var navMenuListItems = document.querySelectorAll(".nav-menu__list-item");
  var navMenuSeparator = document.querySelector(".nav-menu__separator");
  var navMenuText = document.querySelector(".nav-menu__text");
  var navMenuEmail = document.querySelector(".nav-menu__email");
  var navMenuSocialBtn = document.querySelector(".nav-menu__social-btn");
  navMenu.inert = true;

  function animateElements() {
    // Creating array from NodeList:
    var menuItemsArray = [].slice.call(navMenuListItems);
    // Concat all elements for animation together:
    var elementsForAnimation = [navMenuSeparator, navMenuText, navMenuEmail, navMenuSocialBtn].concat(menuItemsArray);
    // Loop through elements
    elementsForAnimation.forEach(function(element) {
      element.classList.toggle("nav-menu__items__animation");
    });

    navMenuCross.classList.toggle("nav-menu__cross__animation");
  }

  /* show menu */
  function showMenu(e){
    e.stopPropagation();
    navHamburger.style.visibility = "hidden";
    navMenu.style.width = "250px";
    navMenuCross.style.display = "block";
    animateElements();
    navMenu.inert = false;
  }

  /* hide menu */
  function hideMenu(){
    navMenuCross.style.display = "none";
    navMenu.style.width = "0px";
    navHamburger.style.visibility = "visible";
    animateElements();
    navMenu.inert = true;
  }

  /* Scroll to a section */
  function addScrollEffects() {
    $(".nav-menu__link").click(function(){
      hideMenu();
      $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
      }, 800);
      return false;
    });

    $(".nav__logo__link, .header__btn").click(function(){
      $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
      }, 800);
      return false;
    });
  }

  // Make all initial processes in one place
  function init() {
    addScrollEffects();
    navHamburger.addEventListener("click", showMenu);
    navMenuCross.addEventListener("click", hideMenu);
  }

  init();

}

// Vanilla JS analogue $(document).ready
(function() {
  if (
      document.readyState === "complete" ||
      (document.readyState !== "loading" && !document.documentElement.doScroll)
  ) {
    onReady();
  } else {
    document.addEventListener("DOMContentLoaded", onReady);
  }
})();
