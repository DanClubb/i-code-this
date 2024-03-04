const button = document.querySelector("button");
const sendIcon = document.querySelector(".send-icon");

button.addEventListener("click", () => {
    button.classList.remove("notsent");
    sendIcon.classList.add("sent");
    setTimeout(() => {
        button.classList.add("notsent");
        sendIcon.classList.remove("sent");
    }, 1000);
});
