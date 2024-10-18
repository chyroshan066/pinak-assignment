const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    //Handles event when mouse cursor moves towards card
    card.addEventListener("mouseover", () => {
        card.classList.add("rotate-360", "transition-all", "duration-500", "ease-linear");
    });

    //Handles event when mouse cursor moves away from the card
    card.addEventListener("mouseout", () => {
        card.classList.remove("rotate-360");
    });
});