const feedback = {
    visited: false,
    lastVisitDate: "",
    interestLevel: "",
    additionalInformation: "",
    name: "",
    email: ""
};

const formKeys = {
    visited: 'input[name="visited-previously"]',
    lastVisitDate: 'input[name="last-visit-date"]',
    interestLevel: 'select[name="interest-level"]',
    additionalInformation: 'textarea[name="additional-information"]',
    name: 'input[name="name"]',
    email: 'input[name="email"]',
}

function updateFeedbackField(key, value) {
    const field = document.querySelector(key);
    if (field) {
        if (field.type === "radio") {
            const radioButton = document.querySelector(`${key}[value="${value}"]`);
            if (radioButton) {
                radioButton.checked = true;
            }
        } else {
            field.value = value;
        }
    }
}

function retrieveFeedbackInformation() {
    const feedbackKeys = Object.keys(feedback);

    feedbackKeys.forEach (key => {
        if (key !== "previouslySubmitted") {
            const value = localStorage.getItem(key);
            if (value) {
                feedback[key] = value;
                updateFeedbackField(formKeys[key], value);
            }
        }
    });
}

function saveFeedbackInformation() {
    const feedbackKeys = Object.keys(feedback);

    feedbackKeys.forEach (key => {
        try {
            const field = document.querySelector(formKeys[key]);
            if (field) {
                let value = field.value;
                if (field.type === "radio") {
                    const radioButton = document.querySelector(`${formKeys[key]}:checked`);
                    value = radioButton ? radioButton.value : "";
                }

                if (value)
                localStorage.setItem(key, value.toString());
            }
        } catch (error) {
        }
    });

    // const emailInput = document.querySelector('input[name="email"]');

    // // Get the value of the input field
    // const emailValue = emailInput.value;

    // console.log(emailValue); // Outputs the current value of the email input field
    // localStorage.setItem("email", emailValue.toString());
}


const postFeedbackButton = document.querySelector(".post-feedback");
const currentPageContact = window.location.pathname.split("/").pop();

if (currentPageContact == "contact.html") {
    retrieveFeedbackInformation();
}

postFeedbackButton.addEventListener("click", () => {
    saveFeedbackInformation();
});

const paddingClick = document.querySelector(".padding");
paddingClick.addEventListener("click", () => {
    saveFeedbackInformation();
});