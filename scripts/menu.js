const toggleMobileMenuButton = document.getElementById("toggle-mobile-menu");
const menuElement = document.getElementById("menu");
const toggleMobileMenuButtonIcon = toggleMobileMenuButton.children[0];

toggleMobileMenuButton.addEventListener("click", () => {
    // cand meniu e inchis sa apara fa-bars
    //cand meniu e deschis sa apara fa-xmark

    menuElement.classList.toggle("mobile-open");

    if (menuElement.classList.contains("mobile-open")) {
        toggleMobileMenuButtonIcon.classList.remove("fa-bars");
        toggleMobileMenuButtonIcon.classList.add("fa-xmark");
    } else {
        toggleMobileMenuButtonIcon.classList.remove("fa-xmark");
        toggleMobileMenuButtonIcon.classList.add("fa-bars");
    }
});
