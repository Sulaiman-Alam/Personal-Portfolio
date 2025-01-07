// JS Code for light/dark mode
const toggle = document.querySelector("#toggleButton");
const toggleLabel = document.querySelector("#toggleButtonLabel");

toggle.addEventListener("change", (event) => {
    if (event.target.checked) {
        document.body.classList.add("darkmode");
        toggleLabel.innerText = "Dark Mode";
    } else {
        document.body.classList.remove("darkmode");
        toggleLabel.innerText = "Light Mode";
    }
    console.log(event);
    console.log(document.querySelector("#toggleButtonLabel"));
});

// JS Code for pop up text
let buttonState = [false, false, false, false];
for (let i = 1; i <= 4; i++) {
    const button = document.querySelector(`#button${i}`);
    console.log(button);
    button.addEventListener("click", () => {
        buttonState[i - 1] = !buttonState[i - 1];
        const experienceText = document.querySelector(`#experience${i}`);
        console.log(experienceText);
        if (buttonState[i - 1]) {
            experienceText.classList.remove("hidden");
        } else {
            experienceText.classList.add("hidden");
        }
        console.log(buttonState);
    });
}
