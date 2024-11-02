const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", userName);

function userName(event) {
    const trimedName = event.target.value.trim();

    if (trimedName) {
        return output.textContent = trimedName;
    } else {
        return output.textContent;
    }
    

}