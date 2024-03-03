const options = document.querySelectorAll(".option");

options.forEach((option) => {
    option.addEventListener("click", () => {
        option.classList.add("option-clicked");
        setTimeout(() => {
            option.classList.remove("option-clicked");
        }, 600);
    });
});
