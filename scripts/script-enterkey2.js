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
document.querySelector('#form__input-searchfunciton').addEventListener('keydown', showdivresults);

function showdivresults(clickdown) {/*carousel laten zien*/
    let divresultsGrid = document.querySelector('.grid-container-filter');
    let button = document.querySelector('.i--search');
    let clickform = document.querySelector('#form__input-searchfunciton');

    if (clickdown.key === "Enter") {
        clickdown.preventDefault();
            divresultsGrid.style.display = 'grid';
            divresultsGrid.scrollIntoView({
                behavior:"smooth"
            });
            // divresultsGrid.style.gridArea=''
    }
    button.addEventListener('click', function () {
        /*https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle*/
            divresultsGrid.style.display = 'grid';
        divresultsGrid.scrollIntoView({
            behavior:"smooth"
        });
    })

}

showdivresults('#form__input-searchfunciton');

// showdivresults('.showresults','.grid-container-filter','.i--search');
function showFormsCheckboxes(buttonSelect, formSelect) {/*paramters meegeven vanwege duplicate code */
    // selecteer elementen
    let formCheckbox = document.querySelector(formSelect);/*formCheckbox is de naam met darin 3 verschillende forms */
    let button = document.querySelector(buttonSelect);
    formCheckbox.style.transition = "opacity " + "0.1s ease-out";/*transitie toevoegen*/
    button.addEventListener('click', () => {/*bij het klikken van 1 van de buttons*/
        if (formCheckbox.style.display === "none") {
            formCheckbox.style.display = "block";
        } else {
            formCheckbox.style.display = "none";/*https://www.w3schools.com/js/js_function_parameters.asp*//*https://www.w3schools.com/js/js_function_definition.asp*/
        }
    });
}

showFormsCheckboxes(".filter__collapsible-books", ".filter__collaps-open-function-books");
showFormsCheckboxes(".filter__collapsible-books-second", ".filter__collaps-open-funtion-books-second");
showFormsCheckboxes(".filter__collapsible-books-third", ".filter__collaps-open-funtion-books-third");


document.querySelector('#form__input-searchfunciton').addEventListener('keydown',searfucntion);

 function searfucntion (clickdown2)  {
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
                        behavior:"smooth"
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
    let rest = document.querySelector('.reset');

    rest.addEventListener('click', () => {
        for (let i = 0; i < listbooks.length; i++) {
            listbooks[i].style.display = "block"; //show results
        }
    });
}
searfucntion('#form__input-searchfunciton');
// https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/

const addList = (button, message, books) => {
    let buttons = document.querySelectorAll(button);/*select all buttons with specific class*/
    let bookTitles = document.querySelectorAll(books);/*select booktitles with specific class*/
    let displayListBooks = [];
    let list = document.querySelector(".arrayreadlist");
    buttons.forEach((button, book) => {/*forloop through all buttons of the nodelist and use 2 calbackfunctions*/
        /*book is each book and total are there 18 books*/
        button.addEventListener('click', () => {/*click event if 1 button is pressed from all buttons*/
            console.log(`Button clicked: ${button.textContent}`);/*show button and the content*/
            button.disabled = true;/*make button not clicalble*/
            button.textContent = message;/*show the message*/
            button.classList.add('afterclick');/*give this css proporties to the */
            console.log(`${book}:booknummer`)/*log the number of the nodelist*/

            let bookTitle = bookTitles[book].textContent;/*store the content of the book in a booktitle the booktitles are 18 books and book is 1 every time*/
            displayListBooks.push(bookTitle); // Push the title of book to the array
            console.log(`array: ${displayListBooks}`);/*show the array*/
            list.scrollIntoView({
                behavior:"smooth"
            });

            list.innerHTML = '';/*exmpty list*/
            // https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/#method-1-using-the-for-loop
            displayListBooks.forEach(book => {/*loop throug array*/
                let li = document.createElement('li');/*make a li element*/
                li.textContent = book;/*put title of book in li*/
                list.appendChild(li);/*add li to list which is a ul */
            })
        });
    });
}
addList('.add-reading-list', "uw boek is toegevegd aan de leeslijst lijst\n", '.figure-image-title-book__title-book-link');
addList('.add-reading-dvd', "uw dvd is toegevegd aan de dvd lijst\n", '.figure-image-title-book__title-book-link');
/*todo de lijsten moeten nog apaart kijken naar books dat moet apart en let list*/