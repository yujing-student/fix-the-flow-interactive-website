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

function showdivresults() {/*carousel laten zien*/

    let divresults = document.querySelector(".showresults");
    let divresultsGrid = document.querySelector(".grid-container-filter");
    let button = document.querySelector(".i--search");
    button.addEventListener('click', function () {
        let displaydivresults = window.getComputedStyle(divresults).display;/*https://developer.mozilla.org/en-US/docs/web/api/window*/

        let displaydivresultsgrid = window.getComputedStyle(divresultsGrid).display;/*https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle*/

        if (displaydivresults === "none") {
            divresults.style.display = "grid";
        }
        if (displaydivresultsgrid === "none") {
            divresultsGrid.style.display = "grid";
        }
    });


}

showdivresults();


function filtershow() {
    /*deze filters zijn apart omdat de gebruiker moet kunnen kiezen welke die wil openen*/
    let formresults = document.querySelector(".filter__collaps-open-function-books");
    formresults.style.transition = "opacity 0.1s ease-out";


    let button = document.querySelector(".filter__collapsible-books"); // select the button
    button.addEventListener('click', (button2) => {
        if (formresults.style.display === "none") {
            formresults.style.display = "block"; // show the form
        } else {
            formresults.style.display = "none"; // hide the form
        }
    });

    let formresults_seconds = document.querySelector(".filter__collaps-open-funtion-boeken-second");
    formresults_seconds.style.transition = "opacity 0.1s ease-out";
    let button_seconds = document.querySelector(".filter__collapsible-boeken-second"); // selecteer de button
    button_seconds.addEventListener('click', () => {
        if (formresults_seconds.style.display === "none") {
            formresults_seconds.style.display = "block"; // show the form
        } else {
            formresults_seconds.style.display = "none"; // hide the form
        }
    });

    let formresults_third = document.querySelector(".filter__collaps-open-funtion-books-third");
    formresults_third.style.transition = "opacity 0.1s ease-out";
    let button_third = document.querySelector(".filter__collapsible-books-third"); // selecteer de button

    button_third.addEventListener('click', () => {
        if (formresults_third.style.display === "none") {
            formresults_third.style.display = "block"; // show the form
        } else {
            formresults_third.style.display = "none"; // hide the form
        }
    });

}
const  showfitler = button =>{


    const show = buttonselecot =>{

        let mutliplebutton = document.querySelector(selectedbuttonbuttonselecot)
       button2.addEventListener('click',element =>{
           if(element.style.display==='none'){
               element.style.display = "block";
           }
           else {
               element.style.display = "none"; // hide the form
           }

       })
    }
}
filtershow();

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
                    console.log(`boook: ${li.innerText} is gevonden met zoekopdracht: ${inputUser}`)
                }



                else {
                    li.style.display = "none";/*en anders word er niks getoon*/
                    console.log(`boook: ${li.textContent} is niet gevonden met zoekopdracht: ${inputUser}`)

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

const addList = () => {
    let buttons = document.querySelectorAll('.add-reading-list');//19 knoppen
    let buttondvd = document.querySelectorAll('.add-reading-dvd');
    /*https://www.geeksforgeeks.org/how-to-count-the-number-of-times-a-button-is-clicked-using-javascript/*/
    let namebook = document.querySelectorAll('.figure-image-title-book__title-book-link');
    let arraybooks = [];

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(`er is geklikt op button:${button}`);
            button.disabled = true;
            button.style.backgroundColor = "#CECFD4";
            // button.style.remove();/*todo uitozkenen remove button*/
            button.style.pointerEvents = 'none';/*dit moet werkend*/
            button.style.boxShadow = 'none';/*dit moet werkend*/
            button.innerHTML = "uw boek is toegevegd aan de leeslijst lijst\n";/*dit moet werkend*/
        })
    })

    buttondvd.forEach(button => {
        button.addEventListener('click', () => {
            console.log(`er is geklikt op button:${button}`);
            button.disabled = true;
            button.style.backgroundColor = "#CECFD4";
            button.style.pointerEvents = 'none';/*dit moet werkend*/
            button.style.boxShadow = 'none';/*dit moet werkend*/
            button.innerHTML = "uw dvd is toegevegd aan de dvd lijst\n";/*dit moet werkend*/
        })
    })
}
addList();
let filterbuttons = () => {

    let listbooks = document.querySelectorAll('.hide-li-sign')

    let buttonfilter = document.querySelector('.filter__filterbutton');
    let checkbox_array = [];/*https://www.w3schools.com/jsref/jsref_push.asp*/
    let books_array = [];/*https://www.w3schools.com/jsref/jsref_push.asp*/
    let books = document.querySelectorAll('.figure-image-title-book');/*hier staat ook de data-filter in*/
    let checkbox = document.querySelectorAll('.filter__input-checkboxes');/*https://www.w3schools.com/jsref/prop_checkbox_checked.asp*/
    let datafiltersport = document.querySelectorAll('[data-filter="sport"]');/*https://stackoverflow.com/questions/22699072/using-data-attribute-as-a-selector-to-filter-elements*/
    let dataid = document.querySelector('#onderwerp-sport,#onderwerp-cultuur,#onderwerp-kunst,#onderwerp-mode')
    buttonfilter.addEventListener('click', () => {

        // books.forEach();

        checkbox.forEach(checkBoxElement => {


            if (checkBoxElement.checked) {
                if (checkBoxElement.classList.contains("sport")) {
                    checkBoxElement.style.display = "block";
                }


                //     als de checkbox gechekt is controleer of checkbox overeenkomst met een class
                //     dus class sport gelijk aan checkbox sport met claslist.conatins
            }
        });


        books.forEach((book) => {

        });


    });


    let rest = document.querySelector('.reset');


    rest.onclick = () => {
        for (let i = 0; i < listbooks.length; i++) {
            listbooks[i].style.display = "grid"; //laat de resultaten weer zien
        }
    }
}
// todo debuggen javascirpt code https://www.jetbrains.com/help/webstorm/debugging-javascript-in-chrome.html#debugging_js_on_built_in_server_example
