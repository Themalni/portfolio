var header = document.querySelector(".header");
var navHamburger = document.querySelector(".nav__hamburger");
var navMenu = document.querySelector(".nav-menu");
var navMenuCross = document.querySelector(".nav-menu__cross");
var navMenuListItem = document.querySelectorAll(".nav-menu__list-item");
var navMenuSeparator = document.querySelector(".nav-menu__separator");
var navMenuText = document.querySelector(".nav-menu__text");
var navMenuEmail = document.querySelector(".nav-menu__email");
var navMenuSocialBtn = document.querySelector(".nav-menu__social-btn");
var contactForm = document.querySelector("#contact__form");
var name = document.querySelector("#name");
var email = document.querySelector("#email");
var message = document.querySelector("#message");
var submitBtn = document.querySelector("#form-submit");
var formStatus = document.querySelector(".form__status");
var i;
var itemsLength = navMenuListItem.length;
var listItem = "";

/* show menu items */
function animateItems(){
  for(i = 0; i < itemsLength; i++){
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

/* Contact form */

contactForm.addEventListener("submit", submitForm, false);

function submitForm(){
  submitBtn.disabled = true;
  formStatus.style.display = "block";
  var formdata = new FormData();
  formdata.append("name", name.value);
  formdata.append("email", email.value);
  formdata.append("message", message.value);
  var ajax = new XMLHttpRequest();
  ajax.open("POST", "contact.php");
  ajax.onreadystatechange = function(){
    if(ajax.readyState == 4 && ajax.status == 200){
      if(ajax.responseText == "success"){
        contactForm.innerHTML = "<h2>Thanks " + name.value + ", your message has been sent.</h2>";
      }else{
        formStatus.innerHTML = ajax.responseText;
        submitBtn.disabled = false;
      }
    }
  };
  ajax.send(formdata);
}




/*========= jQuery ==========*/

/* Scroll to a section */
$(document).ready(function($){
  $("a").click(function(){
    $("html, body").animate({
      scrollTop: $($.attr(this, "href")).offset().top
    }, 800);
    return false;
  });
});
