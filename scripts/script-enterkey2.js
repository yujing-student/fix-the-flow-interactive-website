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

const bookpage = () =>{
    let button = document.querySelector('.button-books');
    if(button){
        button.addEventListener('click', () => {
            window.location.href = "boete.index.html";/*https://developer.mozilla.org/en-US/docs/web/api/window/location*/
        });
    }
}
bookpage();

// books();
document.querySelector('#form__input-searchfunciton').addEventListener('keydown', showdivresults);

function showdivresults(clickdown) {/*carousel laten zien*/
    let divresultsGrid = document.querySelector('.grid-container-filter');
    let button = document.querySelector('.i--search');

    if (clickdown.key === "Enter") {
        clickdown.preventDefault();
        divresultsGrid.style.display = 'grid';
        divresultsGrid.scrollIntoView({
            behavior: "smooth"
        });
        // divresultsGrid.style.gridArea=''
    }
    button.addEventListener('click', function () {
        /*https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle*/
        divresultsGrid.style.display = 'grid';
        divresultsGrid.scrollIntoView({/*sroll to the queryselector*/
            behavior: "smooth"/*https://developer.mozilla.org/en-US/docs/web/api/element/scrollintoview*/
        });
    })

}

showdivresults('#form__input-searchfunciton');

// showdivresults('.showresults','.grid-container-filter','.i--search');
function showFormsCheckboxes(buttonSelect, formSelect) {/*use parameter*/
    // selecteer elementen
    let formCheckbox = document.querySelector(formSelect);/*formCheckbox is the ame with 3 forms */
    let button = document.querySelector(buttonSelect);
    formCheckbox.style.transition = "opacity " + "0.1s ease-out";/*css transition add*/
    button.addEventListener('click', () => {/*when click 1 button do :*/
        if (formCheckbox.style.display === "none") {/*if proporty is set to none*/
            formCheckbox.style.display = "block";/*set it to blick*/
        } else {
            formCheckbox.style.display = "none";/*https://www.w3schools.com/js/js_function_parameters.asp*//*https://www.w3schools.com/js/js_function_definition.asp*/
        }/*keep it to block*/
    });
}

showFormsCheckboxes(".filter__collapsible-books", ".filter__collaps-open-function-books");
showFormsCheckboxes(".filter__collapsible-books-second", ".filter__collaps-open-funtion-books-second");
showFormsCheckboxes(".filter__collapsible-books-third", ".filter__collaps-open-funtion-books-third");




function searfucntion(clickdown2) {
    let button = document.querySelector('.i--search');
    let listbooks = document.querySelectorAll('.hide-li-sign');

    if (clickdown2.key === "Enter") {
        clickdown2.preventDefault();
        let inputUser = document.getElementById('form__input-searchfunciton').value.toUpperCase();/*save search and keep in mind capital letters*/
        listbooks.forEach(li => {/*for loop throug all li items with a specific class */
            let bookclasses = li.querySelector('.figure-image-title-book__title-book-link');/*variable bookclasses with a specific class on the li*/
            if (bookclasses) {/*checken of variabe exist*/
                let titleBook = bookclasses.textContent || bookclasses.innerText;/*content of book or innertext save in variable titlebook*/
                // https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string/touppercase

                if (titleBook.toUpperCase().indexOf(inputUser) > -1) {/*check on capitalletters and of search equal is to the title of book*/
                    // https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string/indexof

                    li.style.display = "";/*empyt li because the name of book is going in the string*/
                    li.scrollIntoView({
                        behavior: "smooth"
                    });
                } else {
                    li.style.display = "none";/*if not found display none*/

                }
            }
        })

        // divresultsGrid.style.gridArea=''
    }

    button.addEventListener('click', () => {
        let inputUser = document.getElementById('form__input-searchfunciton').value.toUpperCase();/*save search and keep in mind capital letters*/
        listbooks.forEach(li => {/*for loop throug all li items with a specific class */
            let bookclasses = li.querySelector('.figure-image-title-book__title-book-link');/*variable bookclasses with a specific class on the li*/
            if (bookclasses) {/*checken of variabe exist*/
                let titleBook = bookclasses.textContent || bookclasses.innerText;/*content of book or innertext save in variable titlebook*/
                // https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string/touppercase

                if (titleBook.toUpperCase().indexOf(inputUser) > -1) {/*check on capitalletters and of search equal is to the title of book*/
                    // https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string/indexof

                    li.style.display = "";/*empyt li because the name of book is going in the string*/

                } else {
                    li.style.display = "none";/*if not found display none*/

                }
            }
        })
    });
}

// searfucntion('#form__input-searchfunciton');
const eventsClick = (button,clickdown2) =>{
    document.querySelector('#form__input-searchfunciton').addEventListener('keydown',eventsClick);
    if (clickdown2.key === "Enter") {
        clickdown2.preventDefault();
        searchBooks();
    }
    let buttonicon = document.querySelector(button)
    buttonicon.addEventListener('click', () => {
        searchBooks();
    })

}
eventsClick('.i--search','#form__input-searchfunciton')

const searchBooks = () =>{
    let listbooks = document.querySelectorAll('.hide-li-sign');

    let inputUser = document.getElementById('form__input-searchfunciton').value.toUpperCase();/*save search and keep in mind capital letters*/
    listbooks.forEach(li => {/*for loop throug all li items with a specific class */
        let bookclasses = li.querySelector('.figure-image-title-book__title-book-link');/*variable bookclasses with a specific class on the li*/
        if (bookclasses) {/*checken of variabe exist*/
            let titleBook = bookclasses.textContent || bookclasses.innerText;/*content of book or innertext save in variable titlebook*/
            // https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string/touppercase

            if (titleBook.toUpperCase().indexOf(inputUser) > -1) {/*check on capitalletters and of search equal is to the title of book*/
                // https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string/indexof

                li.style.display = "";/*empyt li because the name of book is going in the string*/
                li.scrollIntoView({
                    behavior: "smooth"
                });
            } else {
                li.style.display = "none";/*if not found display none*/

            }
        }
    })

}
searchBooks();
// document.querySelector('#form__input-searchfunciton').addEventListener('keydown',search2);




// document.querySelector('#form__input-searchfunciton').addEventListener('keydown',searfucntion);
// https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/

const addList = (button, message, books) => {
    let buttons = document.querySelectorAll(button);/*select all buttons with specific class*/
    let bookTitles = document.querySelectorAll(books);/*select booktitles with specific class*/
    let displayListBooks = [];
    let list = document.querySelector(".arrayreadlist");
    let showreadinglist = document.querySelector("h3");
    buttons.forEach((button, book) => {/*forloop through all buttons of the nodelist and use 2 calbackfunctions*/
        /*book is 1 book every time from the 18 loops total because there are 18 books*/
        button.addEventListener('click', () => {/*click event if 1 button is pressed from all buttons*/
            console.log(`Button clicked: ${button.textContent}`);/*show button and the content*/
            button.disabled = true;/*make button not clicalble*/
            button.textContent = message;/*show the message*/
            button.classList.add('afterclick');/*give this css proporties to the */
            console.log(`${book}:booknummer`);/*log the number of the nodelist*/

            let bookTitle = bookTitles[book].textContent;/*store the content of the book in a booktitle the booktitles are 18 books and book is 1 book every time*/
            displayListBooks.push(bookTitle); // Push the title of book to the array
            console.log(`array: ${displayListBooks}`);/*show the array*/
            showreadinglist.scrollIntoView({
                behavior: "smooth"
            });

            list.innerHTML = '';/*exmpty list*/
            // https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/#method-1-using-the-for-loop
            displayListBooks.forEach(book => {/*loop throug array*/
                let li = document.createElement('li');/*make a li element*/
                li.textContent = book;/*put title of book in variable of li*/
                list.appendChild(li);/*add li to list which is a ul */
            })
        });
    });
}

addList('.add-reading-list', "uw boek is toegevegd aan de leeslijst lijst\n", '.figure-image-title-book__title-book-link');
addList('.add-reading-dvd', "uw dvd is toegevegd aan de dvd lijst\n", '.figure-image-title-book__title-book-link');
/*todo de lijsten moeten nog apaart kijken naar books dat moet apart en let list*/