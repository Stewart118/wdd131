const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const numberOfReviewsKey = "numberOfReviews";

const today = new Date();
const dateLastModified = new Date(document.lastModified);

currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${dateLastModified.toLocaleDateString(
    "en-US"
)} ${dateLastModified.toLocaleTimeString("en-US")}`;

function getNumberOfReviews() {
    const numberOfReviewsString = localStorage.getItem(numberOfReviewsKey);

    if (numberOfReviewsString) {
        try {
            // Parse the string back to a number
            return parseInt(numberOfReviewsString, 10);
        } catch (e) {
            console.error("Error parsing number of reviews from localStorage", e);
        }
    }
    return 0; // Return 0 if no value found
}

function showNumberOfReviews(number) {
    if (typeof number !== "number" || Number.isNaN(number)) {
        console.error("Invalid number of reviews to display");
        return;
    }

    const reviewsElement = document.querySelector("#number-of-reviews");
    if (!reviewsElement) {
        console.error("Element to display number of reviews not found");
        return;
    }

    // Update the content of the element
    if (number === 1)
        reviewsElement.textContent = "Thank-you for your first review!";
    else
        reviewsElement.textContent = `Number of Reviews: ${number}`;
}

function setNumberOfReviews(number) {
    if (typeof number !== "number" || Number.isNaN(number)) {
        console.error("Invalid number of reviews");
        return;
    }
    localStorage.setItem(numberOfReviewsKey, number.toString());
}

let numberOfReviews = getNumberOfReviews();
numberOfReviews++;

showNumberOfReviews(numberOfReviews);

setNumberOfReviews(numberOfReviews);