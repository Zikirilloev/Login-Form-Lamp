/* =========================================
   ELEMENTS
========================================= */

const body =
    document.body;

const pullCord =
    document.querySelector(".pull-cord");

const cordHit =
    document.querySelector(".cord-hit");

const loginForm =
    document.getElementById("loginForm");

const usernameInput =
    document.getElementById("username");

const passwordInput =
    document.getElementById("password");

const passwordToggle =
    document.getElementById("passwordToggle");

const message =
    document.getElementById("message");

const forgotPassword =
    document.getElementById("forgotPassword");

const registerLink =
    document.getElementById("registerLink");


/* =========================================
   LAMP STATE
========================================= */

let lampOn = false;


/* =========================================
   TOGGLE LAMP
========================================= */

function toggleLamp() {

    lampOn = !lampOn;


    /*
        data-on qiymatini o'zgartiramiz.

        false = login yashirin
        true  = login ko'rinadi
    */

    body.dataset.on =
        lampOn ? "true" : "false";


    animateCord();


    /* =========================
       LAMP ON
    ========================== */

    if (lampOn) {

        setTimeout(() => {

            usernameInput.focus();

        }, 750);

    }


    /* =========================
       LAMP OFF
    ========================== */

    else {

        usernameInput.blur();

        passwordInput.blur();

        /*
            Formadagi ma'lumotlarni
            o'chirib yubormaymiz.
        */

        message.textContent = "";
    }
}


/* =========================================
   CORD ANIMATION
========================================= */

function animateCord() {

    pullCord.classList.remove(
        "pulling"
    );


    /*
        CSS animationni qayta
        ishga tushirish
    */

    void pullCord.offsetWidth;


    pullCord.classList.add(
        "pulling"
    );


    setTimeout(() => {

        pullCord.classList.remove(
            "pulling"
        );

    }, 400);
}


/* =========================================
   CORD CLICK
========================================= */

cordHit.addEventListener(
    "click",
    function () {

        toggleLamp();

    }
);


/* =========================================
   KEYBOARD
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        /*
            Input ichida yozayotgan paytda
            Space lampani yoqmasin.
        */

        const active =
            document.activeElement;

        const typing =
            active &&
            (
                active.tagName === "INPUT" ||
                active.tagName === "TEXTAREA"
            );


        if (
            event.code === "Space" &&
            !typing
        ) {

            event.preventDefault();

            toggleLamp();

        }


        /*
            L tugmasi
        */

        if (
            event.key.toLowerCase() === "l" &&
            !typing
        ) {

            toggleLamp();

        }

    }
);


/* =========================================
   PASSWORD SHOW / HIDE
========================================= */

passwordToggle.addEventListener(
    "click",
    function () {

        if (
            passwordInput.type ===
            "password"
        ) {

            passwordInput.type =
                "text";

            passwordToggle.textContent =
                "🙈";

        } else {

            passwordInput.type =
                "password";

            passwordToggle.textContent =
                "👁️";

        }

    }
);


/* =========================================
   LOGIN FORM
========================================= */

loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* Lamp o'chgan bo'lsa */

        if (!lampOn) {

            message.textContent =
                "Please turn on the lamp first.";

            return;
        }


        const username =
            usernameInput.value.trim();

        const password =
            passwordInput.value.trim();


        /* Empty fields */

        if (
            username === "" ||
            password === ""
        ) {

            message.textContent =
                "Please fill in all fields.";

            return;
        }


        /*
            Demo login.

            Haqiqiy backend yo'q.
        */

        message.textContent =
            "Login successful! Welcome, " +
            username +
            " 🎉";


        loginForm.classList.add(
            "success"
        );


        setTimeout(() => {

            loginForm.classList.remove(
                "success"
            );

        }, 1000);
    }
);


/* =========================================
   FORGOT PASSWORD
========================================= */

forgotPassword.addEventListener(
    "click",
    function (event) {

        event.preventDefault();


        if (!lampOn) {

            return;
        }


        message.textContent =
            "Password recovery is not connected yet.";
    }
);


/* =========================================
   REGISTER
========================================= */

registerLink.addEventListener(
    "click",
    function (event) {

        event.preventDefault();


        if (!lampOn) {

            return;
        }


        message.textContent =
            "Registration page is not connected yet.";
    }
);


/* =========================================
   CLEAR MESSAGE
========================================= */

usernameInput.addEventListener(
    "input",
    function () {

        message.textContent = "";

    }
);


passwordInput.addEventListener(
    "input",
    function () {

        message.textContent = "";

    }
);