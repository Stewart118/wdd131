const productSelect = document.querySelector("#product");

const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
const dateLastModified = new Date(document.lastModified);

currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${dateLastModified.toLocaleDateString(
    "en-US"
)} ${dateLastModified.toLocaleTimeString("en-US")}`;

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

function convertToTitleCase(str) {
    if (typeof str !== "string") {
        return "";
    }
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

function populateProductOptions(product) {
    const productOption = document.createElement("option"); // Create a new option element

    productOption.textContent = convertToTitleCase(product.name);
    productOption.name = product.name;
    productOption.value = product.id;

    productSelect.appendChild(productOption); // Append the option to the select element
}

products.forEach(product => {
    populateProductOptions(product);
});