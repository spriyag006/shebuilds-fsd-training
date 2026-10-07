// Scroll to Events

function scrollToEvents() {

    document.getElementById("events").scrollIntoView({
        behavior: "smooth"
    });

}


// Announcement DOM Manipulation

function changeAnnouncement() {

    const announcement =
        document.getElementById("announcementText");

    announcement.innerText =
        "New events have been added! Registration closes on 12 October 2026.";

}


// Register button

function registerEvent(eventName) {

    const eventDropdown =
        document.getElementById("event");

    eventDropdown.value = eventName;

    document.getElementById("registration")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// Form Validation

const registrationForm =
    document.getElementById("registrationForm");


registrationForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const college =
            document.getElementById("college").value.trim();

        const selectedEvent =
            document.getElementById("event").value;

        const message =
            document.getElementById("formMessage");


        // Validation

        if (name === "") {

            message.innerText =
                "Please enter your name.";

            return;
        }


        if (email === "") {

            message.innerText =
                "Please enter your email.";

            return;
        }


        if (!email.includes("@")) {

            message.innerText =
                "Please enter a valid email.";

            return;
        }


        if (college === "") {

            message.innerText =
                "Please enter your college name.";

            return;
        }


        if (selectedEvent === "") {

            message.innerText =
                "Please select an event.";

            return;
        }


        // Success message

        message.innerText =
            "Registration successful for " +
            selectedEvent +
            "!";


        registrationForm.reset();

    }
);