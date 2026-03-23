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


const articles = document.querySelectorAll(".information article");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const prevLabel = document.getElementById("prev-label");
const nextLabel = document.getElementById("next-label");

let currentIndex = 0;

function getTopicName(index) {
    if (index < 0 || index >= articles.length) return "";
    return articles[index].querySelector("h2").textContent;
}

function updateNavLabels() {
    if (currentIndex > 0) {
        prevLabel.textContent = getTopicName(currentIndex - 1);
        prevBtn.style.opacity = "1";
        prevBtn.style.pointerEvents = "auto";
    } else {
        prevLabel.textContent = "";
        prevBtn.style.opacity = "0.3";
        prevBtn.style.pointerEvents = "none";
    }

    if (currentIndex < articles.length - 1) {
        nextLabel.textContent = getTopicName(currentIndex + 1);
        nextBtn.style.opacity = "1";
        nextBtn.style.pointerEvents = "auto";
    } else {
        nextLabel.textContent = "";
        nextBtn.style.opacity = "0.3";
        nextBtn.style.pointerEvents = "none";
    }
}

function scrollToArticle(index) {
    const navHeight = document.querySelector("nav").offsetHeight;
    const articleTop = articles[index].getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: articleTop - navHeight - 20,
        behavior: "smooth"
    });
    currentIndex = index;
    updateNavLabels();
}

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) scrollToArticle(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < articles.length - 1) scrollToArticle(currentIndex + 1);
});

window.addEventListener("scroll", () => {
    let closest = 0;
    let closestDist = Infinity;
    const navHeight = document.querySelector("nav").offsetHeight;

    articles.forEach((article, i) => {
        const rect = article.getBoundingClientRect();
        const dist = Math.abs(rect.top - navHeight - 20);
        if (dist < closestDist) {
            closestDist = dist;
            closest = i;
        }
    });

    if (closest !== currentIndex) {
        currentIndex = closest;
        updateNavLabels();
    }
});

updateNavLabels();