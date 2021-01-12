var diallerBtn = document.querySelector(".dialler_keys");
var display = document.querySelector(".dialler_display");

diallerBtn.addEventListener("click", (e) => {
    // console.log(e.target);
    if (!e.target.closest("button")) return;
    const key = e.target;
    // console.log(key.id);
    const keyValue = key.id;
    // display.textContent = keyValue;

    if (display.textContent === "") {
        display.textContent = keyValue;
    } else {
        display.textContent = display.textContent + keyValue;
    }
}) 