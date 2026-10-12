// HOME PAGE: change the main heading
function changeHeading() {
    document.getElementById("mainHeading").textContent =
        "Welcome to Campus Connect!";
}

// HOME PAGE: change the colour of the card whose button was clicked
function changeCardColor(button) {
    var card = button.parentElement.parentElement;

    if (card.style.backgroundColor === "lightyellow") {
        card.style.backgroundColor = "white";
    } else {
        card.style.backgroundColor = "lightyellow";
    }
}

// HOME PAGE: show or hide the highlights box
function toggleHighlights() {
    document.getElementById("highlights").classList.toggle("hidden");
}


// EVENTS PAGE: add the event name typed by the user
function addEvent() {
    var eventName = document.getElementById("eventName").value;
    var message = document.getElementById("eventMessage");
    var addedEvents = document.getElementById("addedEvents");

    // trim() removes extra spaces from the start and end
    eventName = eventName.trim();

    if (eventName === "") {
        message.textContent = "Please type an event name first.";
        message.className = "error";
    } else {
        var newEvent = document.createElement("p");
        newEvent.textContent = "🎉 " + eventName;
        addedEvents.appendChild(newEvent);

        message.textContent = "Your event was added successfully!";
        message.className = "success";

        document.getElementById("eventName").value = "";
    }
}

// EVENTS PAGE: change the first event card
function changeEventAppearance() {
    var card = document.getElementById("event1");

    card.style.backgroundColor = "#ffe4f0";
    card.style.border = "3px solid #dc5b94";

    card.querySelector("h3").textContent = "Hackathon - Updated!";
}


// REGISTRATION PAGE: check the form and show a confirmation
function registerStudent(event) {
    // Stop the form from refreshing the page
    event.preventDefault();

    var name = document.getElementById("studentName").value.trim();
    var roll = document.getElementById("rollNumber").value.trim();
    var email = document.getElementById("email").value.trim();
    var selectedEvent = document.getElementById("selectedEvent").value;
    var message = document.getElementById("registrationMessage");

    if (name === "" || roll === "" || email === "" || selectedEvent === "") {
        message.textContent = "Please fill in every field.";
        message.className = "error";
    } else {
        message.textContent =
            "Thank you, " + name + "! You have registered for " +
            selectedEvent + ".";
        message.className = "success";
    }
}

// REGISTRATION PAGE: make the heading bigger or smaller
function changeRegistrationFont() {
    var heading = document.getElementById("registrationHeading");

    if (heading.style.fontSize === "42px") {
        heading.style.fontSize = "30px";
    } else {
        heading.style.fontSize = "42px";
    }
}

// REGISTRATION PAGE: show or hide the registration form
function toggleRegistrationForm() {
    document.getElementById("registrationFormBox").classList.toggle("hidden");
}
