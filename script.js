document.addEventListener("DOMContentLoaded", function () {
    // Typing animation for loading screen
    let text = "Ramiruu Web Portfolio...";
    let i = 0;
    function typeEffect() {
        if (i < text.length) {
            document.getElementById("loading-text").innerText += text[i];
            i++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(() => {
                document.getElementById("loading-screen").style.display = "none";
                document.getElementById("selection-screen").classList.remove("hidden");
            }, 1000);
        }
    }
    typeEffect();
});

// Sidebar Toggle
document.getElementById("toggleSidebar").addEventListener("click", function () {
    document.getElementById("navMenu").classList.toggle("hidden");
});

// Enter Portfolio
function enterPortfolio() {
    document.getElementById("selection-screen").style.display = "none";
    document.getElementById("portfolio").classList.remove("hidden");
}