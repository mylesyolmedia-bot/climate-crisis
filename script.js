const readMoreButtons = document.querySelectorAll(".dropdown-button")

readMoreButtons.forEach((button) => {
    const article = button.parentElement;
    const dropdown = article.querySelector(".dropdown-closed");
    let opened = false;

    button.addEventListener("click", (event) => {
        opened = !opened;
        if (!opened) {
            dropdown.setAttribute("class", "dropdown-closed");
        } else {
            dropdown.setAttribute("class", "dropdown-open");
        }
    });
});