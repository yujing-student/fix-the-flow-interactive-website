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
function boeken() {
    let button = document.querySelector(".button-boeken");
    button.addEventListener('click', () => {
        window.location.href = "boete.index.html";
    });
}
boeken();

function showdivresults() {/*carousel laten zien*/

    let divresults = document.querySelector(".showresults");
    let divresultsGrid = document.querySelector(".grid-container-filter");
    let button = document.querySelector(".i--search");
    button.addEventListener('click', function () {
        let displaydivresults = window.getComputedStyle(divresults).display;

        let displaydivresultsgrid = window.getComputedStyle(divresultsGrid).display;

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

const filterloop = () =>{
    let formresults = document.querySelectorAll(".filter-button");
    let button = document.querySelector('.open-filters')
    formresults.forEach(form =>{
        button.addEventListener('click',()=>{
            if(form.style.display === 'none'){
                form.style.display = 'block';
            }
            else {
                form.style.display = "none";
            }
        })
    })

}
filterloop();

const searfucntion2 = () => {
    let listbooks, button;
    button = document.querySelector('.i--search');
    listbooks = document.querySelectorAll('.hide-li-sign');
    let shownorestult = document.querySelector('.geen-resultaat')

    button.addEventListener('click', () => {
        let  inputUser = document.getElementById('form__input-searchfunciton').value.toUpperCase();/*zoekopdracht opslaan*/
        listbooks.forEach (li=>{/*forloop li moet er zijn omdat je geen forloop kan doen op bookclasses of aanpassen hide li naar fuge image title book kan ook niet */

            let bookclasses = li.querySelector('.figure-image-title-book__title-book-link');/*deze class aan bookclasss geven*/
            if (bookclasses) {/*checken of class daadwerkelijk bestaat*/
                let titleBook = bookclasses.textContent || bookclasses.innerText;/*concent bookclasses aan titlebook meegeven en innertext is resserve declass figure image daar staat de titel van het boek en dat is ok de textcontetn*/
                if (titleBook.toUpperCase().indexOf(inputUser) > -1) {/*hier word gecontroleerd of de zoekopdracht overeenkomt met de titel van het booek en uppercase is hoofdletterschecken*/
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

const addList = () =>{
    let buttons = document.querySelectorAll('.add-reading-list');//19 knoppen
    let buttondvd = document.querySelectorAll('.add-reading-dvd');
    /*https://www.geeksforgeeks.org/how-to-count-the-number-of-times-a-button-is-clicked-using-javascript/*/
    let namebook = document.querySelectorAll('.figure-image-title-book__title-book-link');
    let arraybooks = [];

    buttons.forEach( button =>{
        button.addEventListener('click', () =>{
            console.log(`er is geklikt op button:${button}`);
            button.disabled=true;
            button.style.backgroundColor = "#CECFD4";
            button.style.pointerEvents = 'none';/*dit moet werkend*/
            button.style.boxShadow = 'none';/*dit moet werkend*/
            button.innerHTML = "uw boek is toegevegd aan de leeslijst lijst\n";/*dit moet werkend*/
        })
    })

    buttondvd.forEach( button =>{
        button.addEventListener('click', () =>{
            console.log(`er is geklikt op button:${button}`);
            button.disabled=true;
            button.style.backgroundColor = "#CECFD4";
            button.style.pointerEvents = 'none';/*dit moet werkend*/
            button.style.boxShadow = 'none';/*dit moet werkend*/
            button.innerHTML = "uw dvd is toegevegd aan de dvd lijst\n";/*dit moet werkend*/
        })
    })
}
addList();
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