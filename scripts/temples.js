const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

const today = new Date();
const dateLastModified = new Date(document.lastModified);

currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${dateLastModified.toLocaleDateString(
    "en-US"
)} ${dateLastModified.toLocaleTimeString("en-US")}`;

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});
