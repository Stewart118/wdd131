const placesId = document.querySelector(".places");

const placeCards = [
    {
        placeName: "Savannah",
        category: "Historical City",
        caption: "The Pink House in Savannah, Georgia.",
        description: "Settled on February 12, 1733, Savannah is the oldest city in Georgia.  Georgia was founded as a buffer colony between the Carolinas and Spanish Florida.  Today it is the 5th largest city in Georgia, a major tourist attraction, and the home of four colleges and universities!",
        imageUrl:
        "images/pink_house_savannah_card.webp"
    },
    {
        placeName: "Truist Stadium",
        category: "Baseball Stadium",
        caption: "Home of the Atlanta Braves!",
        description: "Enjoy one of the best major league baseball teams, and the 2021 World Series Champions!  Established in 1871, the Braves have a rich history with 4 world series titles, 18 National League Pennants, and 18 National League East Division titles.",
        imageUrl:
        "images/atlanta_braves_card.webp"
    },
    {
        placeName: "Helen",
        category: "City",
        caption: "German Town in North Georgia",
        description: "Step out of Georgia and into the Bavarian Alps!  Helen is a small town in the North Georgia mountains, and is a popular tourist destination.  It is known for its German-style buildings, shops, and restaurants.  It is also known for its sightings of the elusive Bigfoot!",
        imageUrl:
        "images/helen_card.webp"
    },
    {
        placeName: "MacGuires Irish Pub",
        category: "Restaurant",
        caption: "Irish Pub in Senoia",
        description: "Many Americans are familiar with Senoia, even though they may not know it!  It is the filming location for the popular TV show, \"The Walking Dead\".  MacGuires has such a great Irish atmosphere and sometimes has live music!",
        imageUrl:
        "images/macguires_irish_pub_card.webp"
    },
    {
        placeName: "Meat 'N Greet",
        category: "Restaurant",
        caption: "Amazing Restaurant in Newnan",
        description: "Wow!  Just Wow!  When visiting Meat 'N Greet, definitely try the BCR Dip Appetizer -- a house made Bacon, Cheddar, and Ranch dip with house fried potato chips!  Everything on the menu is amazing, but my personal favorite is the \"Pupper-Cini\" -- a 100% all natural angus beef dog topped with BCR dip.",
        imageUrl:
        "images/meat-n-greet-card.webp"
    },
    {
        placeName: "Grumpy Pig",
        category: "Restaurant",
        caption: "Moreland's Best BBQ",
        description: "Moreland's newest BBQ restaurant, it really has become our local favorite!  My personal favorite is their loaded  Mac & Cheese; my wife loves their loaded baked potato with brisket.  Try what you will, I doubt you will be disappointed!",
        imageUrl:
        "images/grumpy_pig_card.webp"
    },
    {
        placeName: "Buc-ee's",
        category: "Country Store / Gas Station",
        caption: "The Disney World of Country Stores",
        description: "True Buc-ee's was originally founded in Texas, but it now has 2 locations in Georgia!  It is a gas station and convenience store, but it is so much more!  It has a huge selection of food (including brisket, fudge, burritos, banana pudding), drinks, and souvenirs.  It is a must stop for anyone traveling through Georgia!",
        imageUrl:
        "images/bucees_card.webp"
    },
    {
        placeName: "Starr's Mill Waterfall",
        category: "Park and Movie Site",
        caption: "Sweet Home Alabama was filmed here!",
        description: "Sweet Home Alabama was filmed in Georgia!  This location has, debatably, the most famous scene in the movie.  It is a beautiful park with a waterfall, and a great place to go on a walk with your family or even participate in geocaching.",
        imageUrl:
        "images/starrs_mill_park_card.webp"
    },
    {
        placeName: "Little White House",
        category: "Historical Site",
        caption: "Georgia Home for Franklin D. Roosevelt",
        description: "This was a home away from home for Franklin D. Roosevelt and eventually became known as the Little White House.  He was diagnosed with polio in 1921, and the hot springs nearby helped him with his rehabilitation.  It is now a museum and a great place to visit!",
        imageUrl:
        "images/little_white_house_card.webp"
    }
];

function createPlaceCard(place) {
    const card = document.createElement("section");
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const caption = document.createElement("figcaption");
    const placeName = document.createElement("h2");
    const location = document.createElement("p");
    const dedicated = document.createElement("p");

    /* First, create then append the figure */

    image.setAttribute("src", place.imageUrl);
    image.setAttribute("alt", `${place.placeName}`);
    image.setAttribute("loading", "lazy");
    caption.textContent = place.caption;
    figure.appendChild(image);
    figure.appendChild(caption);
    card.appendChild(figure);

    /* Next, append the name */

    card.classList.add("place-card");
    placeName.textContent = place.placeName;
    card.appendChild(placeName);

    /* Now the category */

    // location.innerHTML = `<span class="label">Category:</span> ${place.category}`;
    location.innerHTML = `<strong>Category:</strong> ${place.category}`;
    card.appendChild(location);

    /* And last the description */

    dedicated.innerHTML = `<strong>Description:</strong> ${place.description}`;
    card.appendChild(dedicated);

    placesId.appendChild(card);
}

function fisherYatesShuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createPlacesCards(placesCards) {
    placesCards = fisherYatesShuffleArray(placesCards);
    placesId.innerHTML = ""; // Clear existing cards
    placesCards.forEach((place) => {
        createPlaceCard(place);
    });
}

createPlacesCards(placeCards);
