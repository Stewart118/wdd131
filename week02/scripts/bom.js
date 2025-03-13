const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

let li = document.createElement("li");
let deleteButton = document.createElement("button");

function addFavoriteScripture() {
    if (input.value.trim() === "") {
        return;
    }
    li.textContent = input.value;
    deleteButton.textContent = "❌";
    li.appendChild(deleteButton);
    list.appendChild(li);
    input.value = "";
    li = document.createElement("li");
    deleteButton = document.createElement("button");
    input.focus();
}

button.addEventListener("click", addFavoriteScripture);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addFavoriteScripture();
    }
});
list.addEventListener("click", (e) => {
    // this line removes the HTML element from the DOM
    console.log(e.target);
    console.log(list);

    e.target.parentElement.remove();
    input.focus();
});
