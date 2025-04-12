const numberOfReviewsKey = "numberOfReviews";

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
        reviewsElement.textContent = "Thank-you for your feedback!";
    else
        reviewsElement.textContent = `Thank-you for updating your feedback!`;
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

/*
const currentPage = window.location.pathname.split("/").pop();

if (currentPage == "thankyou.html") {
    let numberOfReviews = getNumberOfReviews();
    numberOfReviews++;

    showNumberOfReviews(numberOfReviews);

    setNumberOfReviews(numberOfReviews);
}
*/