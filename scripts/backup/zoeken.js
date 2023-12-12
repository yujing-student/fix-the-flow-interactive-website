
function gridcontainer() {
    let divresults = document.querySelectorAll(".grid-container-filter");
    let button = document.querySelector(".i--search");

    button.addEventListener('click', function () {
        divresults.forEach(function(showdiv) {
            let displaydivresults = window.getComputedStyle(showdiv).display;/*https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle*/

            if (displaydivresults === "none") {/*hier staat die standaard op*/
                showdiv.style.display = "grid";
            }
        });
    });


}


gridcontainer();

function showdivresults() {/*dit staat vermoedelijk dubbel */
    let divresults = document.querySelectorAll(".showresults");
    let button = document.querySelector(".i--search");
    button.addEventListener('click', function () {
        divresults.forEach(function(div) {
            let displaydivresults = window.getComputedStyle(div).display;
            if (displaydivresults === "none") {
                div.style.display = "grid";
            }
        });
    });


}


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


    button.onclick = () =>{
        if (formresults.style.display === "none") {
            formresults.style.display = "block"; // show the form
        } else {
            formresults.style.display = "none"; // hide the form
        }
    }
    button_seconds.onclick = () =>{
        if (formresults_seconds.style.display === "none") {
            formresults_seconds.style.display = "block"; // show the form
        } else {
            formresults_seconds.style.display = "none"; // hide the form
        }
    }
    button_third.onclick = () =>{
        if (formresults_third.style.display === "none") {
            formresults_third.style.display = "block"; // show the form
        } else {
            formresults_third.style.display = "none"; // hide the form
        }
    }

}

filtershow();


function searchfunction() {
    // https://www.w3schools.com/howto/howto_js_filter_lists.asp bron waar ik code gekopieerd heb
    let input, InputUser, listbooks, searchClassNameBook, i, titleBook, ulList, button ;
    input = document.getElementById('form__input-searchfunciton');
    button = document.querySelector('.i--search');

    ulList =document.querySelectorAll('.myUL')
    listbooks = document.querySelectorAll('.hide-li-sign')

    // forloop waar i het boeknummer is en alle boeken nagelopen worden
    button.onclick = () =>{
        InputUser = input.value.toUpperCase();//controleren hoofdletters en hier word gekeken naar de zoekopdracht
        for (i = 0; i < ulList.length; i++) {/*dit is nodig omdat je met 2 lijsten werkt en de loop anders op 1 li werkt*/
            for (let list = 0; list < listbooks.length; list++) {/*hier word door de list gelopen met daarin de elementen*/

                searchClassNameBook = listbooks[list].getElementsByClassName("figure-image-title-book__title-book-link")[0];/*dit moet 19 boeken zijn en alle classes zijn gekoppeld aan de li*/
                titleBook = searchClassNameBook.textContent || searchClassNameBook.innerText;/*hier komen alle 19 boeken langs*/
                if (titleBook.toUpperCase().indexOf(InputUser) > -1) {/*hier word gecontroleerd of de zoekopdracht overeenkomt met de titel van het booek*/
                    listbooks[list].style.display = "";/*word het gevonden dan word het hier getoond het boek*/
                } else {
                    listbooks[list].style.display = "none";
                }
            }
        }
        // if(notfound){
        //     document.querySelector('.geen-resultaat').style.display='block';
        // }
        // else {
        //     document.querySelector('.geen-resultaat').style.display='none';
        // }
        // let notfound = true;

    }
    let rest = document.querySelector('.reset');

    rest.onclick =()  =>{
        for (let i = 0; i < listbooks.length; i++) {
            listbooks[i].style.display = "block"; //laat de resultaten weer zien
        }
    }
}

searchfunction();





function allAddButtons (){
    let buttons = document.getElementsByClassName('add-reading-list');//19 knoppen
    /*https://www.geeksforgeeks.org/how-to-count-the-number-of-times-a-button-is-clicked-using-javascript/*/
    let display = document.getElementsByClassName('count-clicks')[0];/*laten zien hoeveel keer geliktop*/
    let namebook = document.getElementsByClassName('figure-image-title-book__title-book-link');
    let arraybooks = [];

    for (let buttonNumber=0; buttonNumber<buttons.length; buttonNumber++) {/*loop door deze 19 buttons*/
        buttons[buttonNumber].onclick = () => {/*iedere keer als er op een button met een specifiek nummer is geklikt*/
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


        }
    }


}

allAddButtons();


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

const addList = (button,text) => {
    let buttons = document.querySelectorAll(button);//19 knoppen
    // let buttondvd = document.querySelectorAll(button);
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
            button.innerHTML =text;/*dit moet werkend*/
        })
    })

    // buttons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         console.log(`er is geklikt op button:${button}`);
    //         button.disabled = true;
    //         // button.style.backgroundColor = "#CECFD4";
    //         // button.style.pointerEvents = 'none';/*dit moet werkend*/
    //         // button.style.boxShadow = 'none';/*dit moet werkend*/
    //         button.innerHTML = "uw dvd is toegevegd aan de dvd lijst\n";/*dit moet werkend*/
    //     })
    // })
}
addList('.add-reading-list','uw boekd is toegevoegd aan de dvd lijst');
addList('.add-reading-dvd','uw dvd is toegevoegd aan de dvd lijst');