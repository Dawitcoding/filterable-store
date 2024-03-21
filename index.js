var filterButtons = document.querySelectorAll(".filter-buttons button");
var filterableCards = document.querySelectorAll(".filterable_cards .card");
console.log(filterButtons);
console.log(filterableCards);

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        card.classList.add("hide");

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name == "all"){
            card.classList.remove("hide"); 
        }
    } )
}

filterButtons.forEach(button =>  
    button.addEventListener("click",filterCards)
);

