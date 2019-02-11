function scrollBanner() {
    var scrollPos;
    var headerText = document.querySelector('header');
    scrollPos = window.scrollY;

    if (scrollPos <= 7000) {
        headerText.style.transform = "translateY(" + (-scrollPos / 4) + "px" + ")";
        headerText.style.opacity = 1 - (scrollPos / 7000);
    }
}