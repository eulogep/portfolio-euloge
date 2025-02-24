// Effet de zoom au survol sur les éléments orbitaux
document.querySelectorAll(".orbit-item").forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.transform = "scale(1.3)";
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1)";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const bubbleContainer = document.createElement("div");
    bubbleContainer.classList.add("bubbles-container");
    
    for (let i = 0; i < 10; i++) {
        let bubble = document.createElement("span");
        bubble.classList.add("bubble");
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${10 + Math.random() * 5}s`;
        bubble.style.width = `${20 + Math.random() * 40}px`;
        bubble.style.height = bubble.style.width;
        bubbleContainer.appendChild(bubble);
    }
    
    document.body.appendChild(bubbleContainer);
});

// Fonction pour remonter en haut de la page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Ajout de l'événement sur le bouton retour en haut
const scrollButton = document.querySelector(".scroll-to-top");
if (scrollButton) {
    scrollButton.addEventListener("click", scrollToTop);
}

// Fonction pour activer/désactiver le mode sombre
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        document.body.style.background = "#121212";
        document.body.style.color = "#fff";
    } else {
        document.body.style.background = "#1e3c72";
        document.body.style.color = "#fff";
    }
}

// Ajout de l'événement sur le bouton mode sombre
const darkModeButton = document.querySelector(".dark-mode-toggle");
if (darkModeButton) {
    darkModeButton.addEventListener("click", toggleDarkMode);
}

// Vérification du chargement des images et remplacement par une image de secours en cas d'erreur
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("img").forEach(img => {
        img.onerror = function() {
            console.warn("L'image n'a pas pu être chargée :", img.src);
            img.src = "logos/placeholder.png"; // Image par défaut si une image ne charge pas
        };
    });
});
