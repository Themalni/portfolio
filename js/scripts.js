function onReady() { // Handler when the DOM is fully loaded
  var header = document.querySelector(".header");
  var navHamburger = document.querySelector(".nav__hamburger");
  var navMenu = document.querySelector(".nav-menu");
  var navMenuCross = document.querySelector(".nav-menu__cross");
  var navMenuListItem = document.querySelectorAll(".nav-menu__list-item");
  var navMenuSeparator = document.querySelector(".nav-menu__separator");
  var navMenuText = document.querySelector(".nav-menu__text");
  var navMenuEmail = document.querySelector(".nav-menu__email");
  var navMenuSocialBtn = document.querySelector(".nav-menu__social-btn");

  /* show menu items */
  function animateItems(){
    var listItem = "";
    var itemsLength = navMenuListItem.length;
    for(var i = 0; i < itemsLength; i++){
      listItem = navMenuListItem[i];
      if(listItem.classList.contains("nav-menu__items__animation")){
        listItem.classList.remove("nav-menu__items__animation");
      }else{
        listItem.classList.add("nav-menu__items__animation");
      }
    }
  }

  function animateCross(item){
    if(item.classList.contains("nav-menu__cross__animation")){
      item.classList.remove("nav-menu__cross__animation");
    }else{
      item.classList.add("nav-menu__cross__animation");
    }
  }

  function animateElement(item){
    if(item.classList.contains("nav-menu__items__animation")){
      item.classList.remove("nav-menu__items__animation");
    }else{
      item.classList.add("nav-menu__items__animation");
    }
  }

  function toggleAnimation(){
    animateItems();
    animateElement(navMenuSeparator);
    animateElement(navMenuText);
    animateElement(navMenuEmail);
    animateElement(navMenuSocialBtn);
    animateCross(navMenuCross);
  }

  window.onload = fadeInHeader;
  navHamburger.addEventListener("click", showMenu);
  navMenuCross.addEventListener("click", hideMenu);

  /* show header */
  function fadeInHeader(){
    header.style.opacity = 1;
  }

  /* show menu */
  function showMenu(){
    navHamburger.style.visibility = "hidden";
    navMenu.style.width = "250px";
    navMenuCross.style.display = "block";
    toggleAnimation();
  }

  /* hide menu */
  function hideMenu(){
    navMenuCross.style.display = "none";
    navMenu.style.width = "0px";
    navHamburger.style.visibility = "visible";
    toggleAnimation();
  }

  /* Scroll to a section */
  $(".nav-menu__link").click(function(){
    hideMenu();
    $("html, body").animate({
      scrollTop: $($.attr(this, "href")).offset().top
    }, 800);
    return false;
  });

  $(".nav__logo__link").click(function(){
    $("html, body").animate({
      scrollTop: $($.attr(this, "href")).offset().top
    }, 800);
    return false;
  });

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
