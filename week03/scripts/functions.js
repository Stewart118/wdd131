let firstName = "Antonia";
let lastName = "Francesca";

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// const fullName = function (firstName, lastName) {
//     return `${firstName} ${lastName}`;
// };

// const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

const theFullName = fullName(firstName, lastName);

const footer = document.querySelector("footer");
footer.innerHTML = theFullName;
