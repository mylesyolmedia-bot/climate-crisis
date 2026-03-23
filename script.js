const readMoreButtons = document.querySelectorAll(".dropdown-button");
const oddArticles = document.querySelectorAll(".information article:nth-child(odd)");
const evenArticles = document.querySelectorAll(".information article:nth-child(even)");

readMoreButtons.forEach((button) => {
    const extraInformation = button.parentElement;
    const dropdown = extraInformation.querySelector(".dropdown");
    console.log(dropdown);
    let opened = false;

    button.addEventListener("click", (event) => {
        opened = !opened;
        if (!opened) {
            dropdown.setAttribute("class", "dropdown closed");
        } else {
            dropdown.setAttribute("class", "dropdown open");
        }
    });
});

addEventListener("scroll", (event) => {
    oddArticles.forEach((article) => {
        const boundingRectangle = article.getBoundingClientRect();
        article.style.transform = "translate(-" + (Math.max(0, (boundingRectangle.top - window.innerHeight / 2) / 1.75)) + "px)";
        article.style.opacity = Math.max(0, (window.innerHeight * 0.4) - boundingRectangle.top * 0.45) + "%"
    });
});

addEventListener("scroll", (event) => {
    evenArticles.forEach((article) => {
        const boundingRectangle = article.getBoundingClientRect();
        article.style.transform = "translate(" + (Math.max(0, (boundingRectangle.top - window.innerHeight / 2) / 1.75)) + "px)";
        article.style.opacity = Math.max(0, (window.innerHeight * 0.4) - boundingRectangle.top * 0.45) + "%"
    });
});