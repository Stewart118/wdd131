const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const bomChaptersKey = "bomChapters";

let chaptersArray = getChapterList() || [];

function deleteChapter(chapter) {
    chapter = chapter.slice(0, -1); // Remove the delete button character (❌) from the end of the string
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

function displayList(item) {
    if (!item || item.trim() === "") {
        return;
    }
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");

    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.className = "delete";
    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener("click", (e) => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function getChapterList() {
    const chaptersArrayString = localStorage.getItem(bomChaptersKey);

    if (chaptersArrayString) {
        try {
            // Parse the string back to an array
            return JSON.parse(chaptersArrayString);
        } catch (e) {
            console.error("Error parsing chapters from localStorage", e);
        }
    }
}

function setChapterList() {
    const chaptersArrayString = JSON.stringify(chaptersArray);

    localStorage.setItem(bomChaptersKey, chaptersArrayString);
}

button.addEventListener("click", () => {
    input.value = input.value.trim();
    if (input.value) {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

// input.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//         addFavoriteScripture();
//     }
// });

chaptersArray.forEach((chapter) => { displayList(chapter); });
