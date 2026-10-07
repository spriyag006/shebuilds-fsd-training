/* ------------------------------
About Me Button
------------------------------ */

function showMessage() {

```
const message =
    document.getElementById("aboutMessage");

message.innerText =
    "I am continuously learning and building projects in AI, Data Science and Web Development.";
```

}

/* ------------------------------
Project Button
------------------------------ */

function projectMessage(projectName) {

```
alert(
    "You selected the project: " +
    projectName
);
```

}

/* ------------------------------
Contact Form Validation
------------------------------ */

const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener(
"submit",
function(event) {

```
    event.preventDefault();


    const name =
        document.getElementById("name")
        .value.trim();

    const email =
        document.getElementById("email")
        .value.trim();

    const subject =
        document.getElementById("subject")
        .value.trim();

    const message =
        document.getElementById("message")
        .value.trim();

    const formMessage =
        document.getElementById("formMessage");


    /* Check Name */

    if (name === "") {

        formMessage.innerText =
            "Please enter your name.";

        return;
    }


    /* Check Email */

    if (email === "") {

        formMessage.innerText =
            "Please enter your email.";

        return;
    }


    if (!email.includes("@")) {

        formMessage.innerText =
            "Please enter a valid email address.";

        return;
    }


    /* Check Subject */

    if (subject === "") {

        formMessage.innerText =
            "Please enter a subject.";

        return;
    }


    /* Check Message */

    if (message === "") {

        formMessage.innerText =
            "Please enter your message.";

        return;
    }


    /* Successful Submission */

    formMessage.innerText =
        "Thank you, " +
        name +
        "! Your message has been submitted successfully.";


    contactForm.reset();

}
```

);