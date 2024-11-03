const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", updateUserName);

function updateUserName() {
    const trimedName = inputName.value.trim();
 
        if (trimedName === "") {
            outputName.textContent = "Anonymous";
        } else {
            outputName.textContent = trimedName;
        }
    
}