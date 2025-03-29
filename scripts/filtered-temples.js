const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

const figures = document.querySelector(".figures");

const homeTemples = document.querySelector("#home");
const oldTemples = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const largeTemples = document.querySelector("#large");
const smallTemples = document.querySelector("#small");

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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Atlanta Georgia Temple",
      location: "Sandy Springs, Georgia",
      dedicated: "1983, June, 4",
      area: 34500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/400x250/atlanta-temple-lds-811746-wallpaper.jpg",
    },
    {
      templeName: "Kyiv Ukraine Temple",
      location: "Kyevo-Sviatoshyns'ky Rayon, Kyivs'ka Oblast, Ukraine",
      dedicated: "2010, August, 29",
      area: 22184,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/400x250/kyiv-ukraine-temple-lds-736359-wallpaper.jpg",
    },
    {
      templeName: "Nauvoo Temple (Original)",
      location: "Nauvoo, Illinois",
      dedicated: "1846, May, 1",
      area: 50000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-temple/nauvoo-temple-3064.jpg",
    },
    {
      templeName: "Nauvoo Illinois Temple (Modern)",
      location: "Nauvoo, Illinois",
      dedicated: "2002, June, 27",
      area: 54000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-temple-756499-wallpaper.jpg",
    },
  ];

function createTempleCard(temple) {
    const card = document.createElement("section");
    const templeName = document.createElement("h2");
    const location = document.createElement("p");
    const dedicated = document.createElement("p");
    const area = document.createElement("p");
    const image = document.createElement("img");

    card.classList.add("temple-card");
    templeName.textContent = temple.templeName;
    card.appendChild(templeName);

    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    card.appendChild(location);

    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    card.appendChild(dedicated);

    area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
    card.appendChild(area);

    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName} Temple`);
    image.setAttribute("loading", "lazy");
    card.appendChild(image);

    figures.appendChild(card);
}

function createTempleCards(templeCards) {
    figures.innerHTML = ""; // Clear existing cards
    templeCards.forEach((temple) => {
        createTempleCard(temple);
    });
}

createTempleCards(temples);

homeTemples.addEventListener("click", () => {
    createTempleCards(temples);
});

oldTemples.addEventListener("click", () => {
    const templeCards = temples.filter((temple) => {
        const dedicationDate = new Date(temple.dedicated)
        const year = dedicationDate.getFullYear();
        return year < 1900;
    });
    createTempleCards(templeCards);
});

newTemples.addEventListener("click", () => {
    const templeCards = temples.filter((temple) => {
        const dedicationDate = new Date(temple.dedicated)
        const year = dedicationDate.getFullYear();
        return year > 2000;
    });
    createTempleCards(templeCards);
});

largeTemples.addEventListener("click", () => {
    const templeCards = temples.filter((temple) => {
        return temple.area > 90000;
    });
    createTempleCards(templeCards);
});

smallTemples.addEventListener("click", () => {
    const templeCards = temples.filter((temple) => {
        return temple.area < 10000;
    });
    createTempleCards(templeCards);
});