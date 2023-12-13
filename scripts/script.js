const body = document.querySelector("body"),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }
});


/*hierboven code amber*/
function books() {
    let button = document.querySelector(".button-boeken");
    button.addEventListener('click', () => {
        window.location.href = "boete.index.html";/*https://developer.mozilla.org/en-US/docs/web/api/window/location*/
    });
}

books();

function showdivresults(results,grid,buttonpress) {/*carousel laten zien*/

    let divresults = document.querySelector(results);
    let divresultsGrid = document.querySelector(grid);
    let button = document.querySelector(buttonpress);
    button.addEventListener('click', function () {
        let displaydivresults = window.getComputedStyle(divresults,divresultsGrid).display;/*https://developer.mozilla.org/en-US/docs/web/api/window*/
        /*https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle*/
        if (displaydivresults === "none") {
            divresults.style.display = "grid";
            divresultsGrid.style.display='grid'
        }
    });

}

showdivresults('.showresults','.grid-container-filter','.i--search');
// showdivresults('.showresults','.grid-container-filter','.i--search');



function showforms(buttonSelect, formSelect) {/*paramters meegeven vanwege duplicate code */
    // selecteer elementen
    let form = document.querySelector(formSelect);/*form is de naam met darin 3 verschillende forms */
    let button = document.querySelector(buttonSelect);
    form.style.transition = "opacity 0.1s ease-out";/*transitie toevoegen*/
    button.addEventListener('click', () => {/*bij het klikken van 1 van de buttons*/
        if (form.style.display === "none") {
            form.style.display = "block";
        } else {
            form.style.display = "none";/*https://www.w3schools.com/js/js_function_parameters.asp*//*https://www.w3schools.com/js/js_function_definition.asp*/
        }
    });
}
showforms(".filter__collapsible-books", ".filter__collaps-open-function-books");
showforms(".filter__collapsible-books-second", ".filter__collaps-open-funtion-books-second");
showforms(".filter__collapsible-books-third", ".filter__collaps-open-funtion-books-third");


// filtershow();

const filterloop = () => {/*openen van alle filters in 1 keer*/
    let formresults = document.querySelectorAll(".filter-button");
    let button = document.querySelector('.open-filters')
    formresults.forEach(form => {
        button.addEventListener('click', () => {
            if (form.style.display === 'none') {
                form.style.display = 'block';
            } else {
                form.style.display = "none";
            }
        })
    })

}
filterloop();

const searfucntion2 = () => {
    let button = document.querySelector('.i--search');
    let listbooks = document.querySelectorAll('.hide-li-sign');
    let shownorestult = document.querySelector('.no-result');

    button.addEventListener('click', () => {
        let inputUser = document.getElementById('form__input-searchfunciton').value.toUpperCase();/*zoekopdracht opslaan*/
        listbooks.forEach(li => {/*forloop li moet er zijn omdat je geen forloop kan doen op bookclasses of aanpassen hide li naar fuge image title book kan ook niet */
            let bookclasses = li.querySelector('.figure-image-title-book__title-book-link');/*variable bookclasses met daarin de li itemens met de class figure image title book*/
            if (bookclasses) {/*checken of variabe daadwerkelijk bestaat*/
                let titleBook = bookclasses.textContent || bookclasses.innerText;/*content bookclasses aan variable titlebook meegeven en innertext is resserve
                de class figure image daar staat de titel van het boek en dat is ook de textcontetn*/
                // https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string/touppercase

                if (titleBook.toUpperCase().indexOf(inputUser) > -1) {/*hier word gecontroleerd of de zoekopdracht overeenkomt met de titel van het booek en uppercase is hoofdletterschecken*/
                    // https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string/indexof
                    shownorestult.style.display = 'none';/*hier moet nog naar gekenen worden*/
                    li.style.display = "";/*word het gevonden dan word het hier getoond het boek*/
                    // console.log(`boook: ${li.innerText} is gevonden met zoekopdracht: ${inputUser}`)
                }



                else {
                    li.style.display = "none";/*en anders word er niks getoon*/
                    // console.log(`boook: ${li.textContent} is niet gevonden met zoekopdracht: ${inputUser}`)

                    shownorestult.style.display = 'block';/*hier moet nog naar gekenen worden todo waarom dit niet werkt helaas er is geen resultaat*/
                }
            }
        })
    });
    let rest = document.querySelector('.reset');

    rest.addEventListener('click', () => {
        for (let i = 0; i < listbooks.length; i++) {
            listbooks[i].style.display = "block"; //laat de resultaten weer zien
        }
    });
}
searfucntion2();



const addList = (button, message) => {
    let buttons = document.querySelectorAll(button); // Select all buttons

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(`Button clicked: ${button}`);
            button.disabled = true;
            button.innerHTML = message;
            button.classList.add('afterclick');
        })
    })
}

addList('.add-reading-list', "uw boek is toegevegd aan de leeslijst lijst\n");
addList('.add-reading-dvd', "uw dvd is toegevegd aan de dvd lijst\n");
