const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});



//popup
var popupButtons = document.getElementsByClassName("popup-button");

// Add event listeners to each popup button
for (var i = 0; i < popupButtons.length; i++) {
  popupButtons[i].addEventListener("click", function() {
    var popupId = this.getAttribute("data-popup");
    var popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = "block";
    }
  });
}

// Add event listeners to close buttons and popup overlays
var popups = document.getElementsByClassName("popup");
for (var i = 0; i < popups.length; i++) {
  var closeButton = popups[i].querySelector(".close-button");
  closeButton.addEventListener("click", function() {
    var popup = this.closest(".popup");
    if (popup) {
      popup.style.display = "none";
    }
  });
}

