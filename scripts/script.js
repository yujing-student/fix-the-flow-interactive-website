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
function tablessort(){
    const allTables = document.querySelectorAll("table");

    for (const table of allTables) {
        const tBody = table.tBodies[0];
        const rows = Array.from(tBody.rows);
        const headerCells = table.tHead.rows[0].cells;

        for (const th of headerCells) {
            const cellIndex = th.cellIndex;

            th.addEventListener("click", () => {
                rows.sort((tr1, tr2) => {
                    const tr1Text = tr1.cells[cellIndex].textContent;
                    const tr2Text = tr2.cells[cellIndex].textContent;
                    return tr1Text.localeCompare(tr2Text);
                });

                tBody.append(...rows);
            });
        }
    }
}


/*hierboven moet straks weer uitcommented zijn*/
function boeken() {
    let button = document.querySelector(".button-boeken");
    button.addEventListener('click', () => {
        window.location.href = "boete.index.html";
    });


}

boeken();

function gridcontainer() {
    let divresults = document.querySelector(".grid-container-filter");
    let button = document.querySelector(".i--search");

    button.addEventListener('click', () => {
        let displaydivresults = window.getComputedStyle(divresults).display;

        if (displaydivresults === "none") {
            divresults.style.display = "grid";
        } else {
            divresults.style.display = "none";
        }
    });




}


gridcontainer();

function showdivresults() {/*carousel laten zien*/

    let divresults = document.querySelector(".showresults");
    // seleteer de .showresylts div
    let button = document.querySelector(".i--search");
    button.addEventListener('click', function () {
        let displaydivresults = window.getComputedStyle(divresults).display;
        //     https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
        //     https://www.w3schools.com/jsref/jsrefgetcomputedstyle.asp
        //met deze code wordt alle css proporties of een element en de inhoud ervan weergegeven
        if (displaydivresults === "none") {
            divresults.style.display = "grid";
        }
    });
    // //     https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
    // //     https://www.w3schools.com/jsref/jsrefgetcomputedstyle.asp
    // //met deze code wordt alle css proporties of een element en de inhoud ervan weergegeven

}

showdivresults();


showdivresults();


function filtershow() {
    let formresults = document.querySelector(".filter__collaps-open-function-boeken");
    formresults.style.transition = "opacity 0.1s ease-out";
    let button = document.querySelector(".filter__collapsible-boeken"); // select the button

    let formresults_seconds = document.querySelector(".filter__collaps-open-funtion-boeken-second");
    formresults_seconds.style.transition = "opacity 0.1s ease-out";
    let button_seconds = document.querySelector(".filter__collapsible-boeken-second"); // selecteer de button


    let formresults_third = document.querySelector(".filter__collaps-open-funtion-boeken-third");
    formresults_third.style.transition = "opacity 0.1s ease-out";
    let button_third = document.querySelector(".filter__collapsible-boeken-third"); // selecteer de button


    button.addEventListener('click', () => {
        if (formresults.style.display === "none") {
            formresults.style.display = "block"; // show the form
        } else {
            formresults.style.display = "none"; // hide the form
        }
    });
    button_seconds.addEventListener('click', () => {
        if (formresults_seconds.style.display === "none") {
            formresults_seconds.style.display = "block"; // show the form
        } else {
            formresults_seconds.style.display = "none"; // hide the form
        }
    });
    button_third.addEventListener('click', () => {
        if (formresults_third.style.display === "none") {
            formresults_third.style.display = "block"; // show the form
        } else {
            formresults_third.style.display = "none"; // hide the form
        }
    });

}

filtershow();





const searfucntion2 = () => {
    let listbooks, ulList, button;
    button = document.querySelector('.i--search');
    listbooks = document.querySelectorAll('.hide-li-sign');


    button.addEventListener('click', () => {
        let  inputUser = document.getElementById('form__input-searchfunciton').value.toUpperCase();
        listbooks.forEach (li=>{

            let bookclasses = li.querySelector('.figure-image-title-book__title-book-link');
            if (bookclasses) {
                let titleBook = bookclasses.textContent || bookclasses.innerText;
                if (titleBook.toUpperCase().indexOf(inputUser) > -1) {/*hier word gecontroleerd of de zoekopdracht overeenkomt met de titel van het booek*/
                    li.style.display = "";/*word het gevonden dan word het hier getoond het boek*/
                }
                else {
                    li.style.display = "none";
                    li.style.innerHTML="helaas uw boek is niet gevonden"
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




function allAddButtons (){
    let buttons = document.getElementsByClassName('add-reading-list');//19 knoppen
    /*https://www.geeksforgeeks.org/how-to-count-the-number-of-times-a-button-is-clicked-using-javascript/*/
    let display = document.getElementsByClassName('count-clicks')[0];/*laten zien hoeveel keer geliktop*/
    let namebook = document.getElementsByClassName('figure-image-title-book__title-book-link');
    let arraybooks = [];

        for (let buttonNumber=0; buttonNumber<buttons.length; buttonNumber++) {/*loop door deze 19 buttons*/
            buttons[buttonNumber].addEventListener('click', () => {/*iedere keer als er op een button met een specifiek nummer is geklikt*/
                console.log(`er is geklikt op button:${buttonNumber}`);/*log dan de button met het specifieke nummer*/
                display.innerHTML = (`aantal boeken aan leeslijst:${buttonNumber}`);/*dit werkt niet omdat button 0 blijft button 0 bij ajax jaarboek */

                console.log(`naam book:${namebook}`);

                buttons[buttonNumber].disabled = true;
                buttons[buttonNumber].style.backgroundColor = "#CECFD4";
                buttons[buttonNumber].style.pointerEvents = 'none';/*dit moet werkend*/
                buttons[buttonNumber].style.boxShadow = 'none';/*dit moet werkend*/
                buttons[buttonNumber].innerHTML = "uw boek is toegevegd aan de leeslijst\n";/*dit moet werkend*/

                arraybooks.push(buttons[buttonNumber]);/**/
                console.log(`dit boek is toegevoegd${arraybooks}`);


            });
        }


}

allAddButtons();
//  alles hieronder is gestrand en mislukt


let filterbuttons = () =>{

    listbooks = document.querySelectorAll('.hide-li-sign')

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
                if (checkBoxElement.classList.contains("sport")){
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


    rest.onclick =()  =>{
        for (let i = 0; i < listbooks.length; i++) {
            listbooks[i].style.display = "grid"; //laat de resultaten weer zien
        }
    }
}
// todo debuggen javascirpt code https://www.jetbrains.com/help/webstorm/debugging-javascript-in-chrome.html#debugging_js_on_built_in_server_example
// je debug de html en zet daarvoor de breakpoints in de js file


// oude functie te lang en onnodig
//function  voegtoe (){/*dit is de lange versie */
//     // toeveogen boeken aan lijst
//     let booksNumber = 0
//     let button1 = document.getElementsByClassName('add-reading-list')[0];//1 knop met voeg toe
//     let button2 = document.getElementsByClassName('add-reading-list')[1];//1 knop met voeg toe
//     let button3 = document.getElementsByClassName('add-reading-list')[2];//1 knop met voeg toe
//     /*https://www.geeksforgeeks.org/how-to-count-the-number-of-times-a-button-is-clicked-using-javascript/*/
//     let display = document.getElementsByClassName('count-clicks')[0];/*dit werkt niet omdat je de 1ste selecteert en de rest niet*/
//
//     let arraybooks = []
//
//
//     button1.onclick =() =>{/*klik op boek voeg toe*/
//         // buttonReadinglist.disable();  /*als er op de knop is geklickt kan je niet nog een keer clickken*/
//         console.log('button 1 aangeklikt');
//
//         booksNumber++
//         display.innerHTML = booksNumber;
//
//         arraybooks.push(button1);
//         button1.disabled = true;
//         button1.style.backgroundColor="#CECFD4";
//         document.querySelector(".text-add-buttn").innerHTML = "uw boek is toegevegd";/*dit moet werkend*/
//         button1.style.pointerEvents='none';/*dit moet werkend*/
//         button1.style.boxShadow='none';/*dit moet werkend*/
//         // document.querySelector(".text-add-buttn").classList.remove(button:hover)/*dit moet werkend*/
//
//         /*https://www.javatpoint.com/oprweb/test.jsp?filename=javascript-dblclick-event1*/
//
//         const button = document.querySelector('.add-reading-list');
//
//         // const disableButton = () => {
//         //     console.log("er is geklikt");
//         //
//         //     //     nog toevoegen dat je niet meer kan hoveren op het element
//         //
//         // };
//         // button.addEventListener('click', disableButton);
//
//
//
//     }
//     button2.onclick =() =>{/*klik op boek voeg toe*/
//         console.log('button 2 aaangekopt');
//         // buttonReadinglist.disable();  /*als er op de knop is geklickt kan je niet nog een keer clickken*/
//         booksNumber++
//         display.innerHTML = booksNumber;
//         button2.disabled = true;
//         button2.style.backgroundColor="#CECFD4";
//         button2.style.pointerEvents='none';/*dit moet werkend*/
//         button2.style.boxShadow='none';/*dit moet werkend*/
//         document.getElementsByClassName('text-add-buttn')[1].innerHTML = "uw boek is toegevegd";/*dit moet werkend*/
//
//         /*https://www.javatpoint.com/oprweb/test.jsp?filename=javascript-dblclick-event1*/
//
//
//
//     }
//     button3.onclick =() =>{/*klik op boek voeg toe*/
//         console.log('button3 aangeklikt');
//         // buttonReadinglist.disable();  /*als er op de knop is geklickt kan je niet nog een keer clickken*/
//         booksNumber++
//         display.innerHTML = booksNumber;
//         button3.disabled = true;
//         button3.style.backgroundColor="#CECFD4";
//         button3.style.pointerEvents='none';/*dit moet werkend*/
//         button3.style.boxShadow='none';/*dit moet werkend*/
//         document.getElementsByClassName('text-add-buttn')[2].innerHTML = "uw boek is toegevegd";/*dit moet werkend*/
//         button3.style.pointerEvents='none';
//         /*https://www.javatpoint.com/oprweb/test.jsp?filename=javascript-dblclick-event1*/
//
//
//
//     }
//
//     document.querySelector(".output").innerHTML = JSON.stringify(arraybooks);/*dit werkt niet*/
// }
// // voegtoe();
//
// //     https://alvarotrigo.com/blog/disable-button-javascript/





// w3schools version
//function searchfunction() {
//     // https://www.w3schools.com/howto/howto_js_filter_lists.asp bron waar ik code gekopieerd heb
//     let input, InputUser, listbooks, searchClassNameBook, i, titleBook, ulList, button ;
//     input = document.getElementById('form__input-searchfunciton');
//     button = document.querySelector('.i--search');
//
//     ulList =document.querySelectorAll('.myUL')
//     listbooks = document.querySelectorAll('.hide-li-sign')
//
//     // forloop waar i het boeknummer is en alle boeken nagelopen worden
//     button.onclick = () =>{
//         InputUser = input.value.toUpperCase();//controleren hoofdletters en hier word gekeken naar de zoekopdracht
//         for (i = 0; i < ulList.length; i++) {/*dit is nodig omdat je met 2 lijsten werkt en de loop anders op 1 li werkt*/
//             for (let list = 0; list < listbooks.length; list++) {/*hier word door de list gelopen met daarin de elementen*/
//
//                 searchClassNameBook = listbooks[list].getElementsByClassName("figure-image-title-book__title-book-link")[0];/*dit moet 19 boeken zijn en alle classes zijn gekoppeld aan de li*/
//                 titleBook = searchClassNameBook.textContent || searchClassNameBook.innerText;/*hier komen alle 19 boeken langs*/
//                 if (titleBook.toUpperCase().indexOf(InputUser) > -1) {/*hier word gecontroleerd of de zoekopdracht overeenkomt met de titel van het booek*/
//                     listbooks[list].style.display = "";/*word het gevonden dan word het hier getoond het boek*/
//                 } else {
//                     listbooks[list].style.display = "none";
//                 }
//             }
//         }
//         // if(notfound){
//         //     document.querySelector('.geen-resultaat').style.display='block';
//         // }
//         // else {
//         //     document.querySelector('.geen-resultaat').style.display='none';
//         // }
//         // let notfound = true;
//
//     }
//     let rest = document.querySelector('.reset');
//
//     rest.onclick =()  =>{
//         for (let i = 0; i < listbooks.length; i++) {
//             listbooks[i].style.display = "block"; //laat de resultaten weer zien
//         }
//     }
// }
//
// // searchfunction();