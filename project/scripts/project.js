const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
const dateLastModified = new Date(document.lastModified);

currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${dateLastModified.toLocaleDateString(
    "en-US"
)} ${dateLastModified.toLocaleTimeString("en-US")}`;

const currentPage = window.location.pathname.split("/").pop();

/*
if (currentPage == "index.html") {
    const script = document.createElement("script");
    script.src = "scripts/weather.js";
    script.type = "text/javascript";
    script.defer = true; // Optional: Ensures the script is executed after parsing
    document.head.appendChild(script);
} else if (currentPage == "thankyou.html") {
    const script = document.createElement("script");
    script.src = "scripts/thankyou.js";
    script.type = "text/javascript";
    script.defer = true; // Optional: Ensures the script is executed after parsing
    document.head.appendChild(script);
} else if (currentPage == "contact.html") {
    const script = document.createElement("script");
    script.src = "scripts/contact.js";
    script.type = "text/javascript";
    script.defer = true; // Optional: Ensures the script is executed after parsing
    document.head.appendChild(script);
}
*/