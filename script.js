/* =====================================================
   BLOOM LOOP
   JAVASCRIPT
===================================================== */


/* =====================================================
   VARIABLEN
===================================================== */

const selectedCategories = [];

const buttons = document.querySelectorAll(
    ".add-category"
);

const cards = document.querySelectorAll(
    ".category-card"
);

const cartCounter = document.getElementById(
    "cartCounter"
);

const selectionText = document.getElementById(
    "selectionText"
);

const boxButton = document.getElementById(
    "boxButton"
);


/* =====================================================
   KATEGORIE AUSWÄHLEN
===================================================== */

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.category;

        const card =
            button.closest(".category-card");


        /* ---------------------------------------------
           Wenn bereits ausgewählt
        --------------------------------------------- */

        if (
            selectedCategories.includes(category)
        ) {

            const index =
                selectedCategories.indexOf(category);

            selectedCategories.splice(index, 1);

            card.classList.remove("selected");

            button.querySelector("span:first-child")
                .textContent = "Hinzufügen";

            button.querySelector(".plus")
                .textContent = "+";

        }


        /* ---------------------------------------------
           Wenn noch nicht ausgewählt
        --------------------------------------------- */

        else {

            selectedCategories.push(category);

            card.classList.add("selected");

            button.querySelector("span:first-child")
                .textContent = "Ausgewählt";

            button.querySelector(".plus")
                .textContent = "✓";

        }


        updateSelection();

    });

});


/* =====================================================
   AUSWAHL AKTUALISIEREN
===================================================== */

function updateSelection() {


    /* Anzahl im Warenkorb */

    cartCounter.textContent =
        selectedCategories.length;


    /* Noch nichts ausgewählt */

    if (
        selectedCategories.length === 0
    ) {

        selectionText.textContent =
            "Wähle deine Kategorien aus.";

        return;

    }


    /* Kategorien anzeigen */

    selectionText.textContent =
        selectedCategories.join(" · ");


}


/* =====================================================
   BOX ERSTELLEN
===================================================== */

boxButton.addEventListener(
    "click",
    () => {


        if (
            selectedCategories.length === 0
        ) {

            selectionText.textContent =
                "Wähle zuerst mindestens eine Kategorie aus.";

            return;

        }


        /*
            Hier könntest du später zu einer
            richtigen Box-Konfiguration weiterleiten.
        */

        alert(
            "Deine Box enthält: " +
            selectedCategories.join(", ")
        );

    }
);


/* =====================================================
   NAVIGATION
===================================================== */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navLinks.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });

            link.classList.add("active");

        }
    );

});


/* =====================================================
   HEADER SHADOW BEIM SCROLLEN
===================================================== */

const header =
    document.querySelector(".site-header");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 20) {

            header.style.boxShadow =
                "0 5px 25px rgba(25, 2, 17, 0.08)";

        }

        else {

            header.style.boxShadow =
                "none";

        }

    }
);