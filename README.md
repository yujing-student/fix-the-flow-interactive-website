> _Fork_ deze leertaak en ga aan de slag. 
Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. 
De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# welkompagina voor de oba
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Ik heb voor de oba een welkompagina gemaakt zodat de gebruiker direct ziet wat diegene kan doen op de oba mijn omgeving
![image](https://github.com/yujing-student/fix-the-flow-interactive-website/assets/100352887/a3cb2ec2-bafe-4926-9ab2-3c28e65fb10d)




## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
voor de oba maak ik een welkompagina gemaakt op basis van een bestaande huisstijl de user story die ik heb uitgekozen is :<a href="https://github.com/fdnd-agency/oba/issues/222">Als OBA lid wil ik tijdens het zoeken boeken kunnen bewaren in een lijst, zodat ik deze later kan bekijken.</a>

de foto's zijn niet zo goed gelukt daarom kunt u het beste naar de pagina zelf gaan klik hier: <a href="https://yujing-student.github.io/fix-the-flow-interactive-website/">https://yujing-student.github.io/fix-the-flow-interactive-website</a>

<br>
wilt u het proces zien hoe ik tot deze pagina gekomen bent kunt u naar deze link: <a href='https://github.com/yujing-student/fix-the-flow-interactive-website/wiki'>wiki</a>
<br>
<h2>foto's van de pagina per apperaat</h2>
<details><summary>
   mobiel
</summary>

</details>

<details>
    <summary>
        tablet
    </summary>


</details>
<details>
    <summary>
        Desktop
    </summary>
    <img width="951" alt="image" src="https://github.com/yujing-student/look-and-feel-corporate-identity/assets/100352887/dd2ebb09-f444-41dc-b00c-e83f3047e3bb">
   

</details>
<h2>uitleg over code</h2>
<ul>
   <li>
    html en css: ik heb als indeling grid gebruikt waarin ik 2 grid containers heb gebruikt de 1ste foto met de inleiding is de eerste container en de 2de container 
    is voor het filteren en zoeken verder heb ik ook de media query gebruikt zodat de pagina responsive is
   </li>
    <li>
        Javascript: ik heb voor het klikken op de buttons javascript gebruik zodat de form met de checkboxes verborgen zijn en getoond worden 
        verder is de zoekfunctie ook met javascript gemaakt
    </li>
</ul>
<details>
    <summary>
        uitleg over de html code deels zie programmeertalen voor de volledige code
    </summary>

    ```
    <div class="grid-container" tabindex="0">
        <section class="grid-item" tabindex="0">
            <!--                <h1 tabindex="0">Homepagina</h1>-->
            <h2 tabindex="0">Welkom Amber</h2>
            <p>Welkom op uw persoonlijke pagina van de website van de OBA.</p>
            <p> Op deze pagina kunt u: uw materialen verlengen,
                zoals een boek of dvd. Verder kunt u uw reserveringen bekijken en uw uitleengeschiedenis zien.</p>
        </section>
        <section class="grid-item">
            <h3>Meer info</h3>
            <p>Klik op het icoontje om de tekst uit te klappen.</p>
            <details>
                <summary>Waar vind ik openstaande bedragen?</summary>
                <p> Openstaande bedragen zijn via ideal te zien.</p>

            </details>


            <details>
                <summary>Wat kan ik op de deposito's pagina?</summary>
                <p>Een tegoed op uw pas zetten via ideal waarmee u toekomstige boetes, leengeld, etc. kunt
                    afrekenen.</p>

            </details>


            <details>
                <summary>Waar kan ik mijn persoonlijke gegevens wijzigen</summary>
                <p>Dat kunt u bij mijn profiel kunt u dat zien.</p>

            </details>


            <details>
                <summary>Waar vind ik een overzicht met mijn geleende boeken</summary>
                <p> Dat kunt u op de knop overzicht geleende boeken.</p>

            </details>

        </section>

        <div class="grid-item" tabindex="0">

            <p class="inleiding-text-boeken-overzicht" tabindex="0">Ga naar boeken overzicht voor een overzicht met
                de
                geleende boeken, zodat u ziet <strong>welke boeken u moet inleveren.</strong></p>
            <button aria-pressed="false" class="button-boeken"
                    tabindex="0"
                    type="button"><strong>Overzicht geleende boeken</strong>
            </button>
        </div>


    </div>
    ```

</details>

<details>
    <summary>
        uitleg over de css code voor ipad formaat
    </summary>
    ```css

    @media (min-width: 48em)  and (max-width: 60em) {
    /*mini ipad*/
    .grid-container {
        display: grid;
        grid-template-areas:var(--gridcontainer-template-areas-indeling);
        grid-column-gap: var(--grid-template-columns-layoout-contianer);
        row-gap: 2em;
        column-gap: 3em;
    }


    .grid-item:nth-child(1) {
        grid-area: item1;

    }

    .grid-item:nth-child(2) {
        grid-area: item2;

    }

    .grid-item:nth-child(3) {
        grid-area: item4;

    }

    .grid-item:nth-child(4) {
        grid-area: item3;

    }

    .grid-container-filter {

        display: none;
        grid-template-areas: var(--gridfilter-template-areas-indeling);
        grid-template-columns:var(--grid-template-columns-layout-filters);
        column-gap: var(--grid-gap-column);

        margin-top: var(--margin-top-5em);
    }

    .grid-item-filter:nth-child(1) {
        grid-area: item1;

    }

    .grid-item-filter:nth-child(2) {
        grid-area: item2;

    }

    .grid-item-filter:nth-child(2) {
        grid-area: item2;

    }


    .figure-image-title-book { /*positioneren van de boeken en de tekst*/
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;


    }

    .figure-image-title-book__title-book-link { /*kind van div*/
        display: grid;
        align-self: center;
    }
}`
    ```

</details>
<details>
    <summary>
        uitleg over de javascript code zoekfunctie
    </summary>
<br>


```javascript
function searchBooks () {
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
function eventsClick (button) {
    let buttonicon = document.querySelector(button)
    buttonicon.addEventListener('click', () => {
        searchBooks();
    })

    document.querySelector('#form__input-searchfunciton').addEventListener('keydown', (click) => {
        if (click.key === "Enter") {
            click.preventDefault();
            searchBooks();
        }
    });

}

```

uitleg over voeg toe aan leeslisjt functie 
<br>
```javascript
function addList  (button, message, books) {
let buttons = document.querySelectorAll(button);/*select all buttons with specific class*/
let bookTitles = document.querySelectorAll(books);/*select booktitles with specific class*/
let displayListBooks = [];
let list = document.querySelector(".arrayreadlist");

    let removeButton = document.querySelector('.remove-readinglist');
    let showreadinglist = document.querySelector("h3");
    buttons.forEach((button, book) => {/*forloop through all buttons of the nodelist and use 2 calbackfunctions*/
        /*book is 1 book every time from the 18 loops total because there are 18 books*/
        button.addEventListener('click', () => {/*click event if 1 button is pressed from all buttons*/
            console.log(`Button clicked: ${button.textContent}`);/*show button and the content*/
            button.disabled = true;/*make button not clicalble*/
            button.textContent = message;/*show the message*/
            button.classList.add('afterclick');/*give this css proporties to the */
            // console.log(`${book}:booknummer`);/*log the number of the nodelist*/

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
            removeButton.addEventListener('click', () => {
              /*if click on bin button remove the book of the displaylsistbooks
              * remove the button with : uw boek is toegevaad aan */

            })

        });
    });
}
```

</details>

## programmeertalen
klik op de link om de volledige code te zien
<li><a href="https://github.com/yujing-student/fix-the-flow-interactive-website/blob/main/index.html">Html</a></li>
<li><a href="https://github.com/yujing-student/fix-the-flow-interactive-website/blob/main/styles/styles2.css">Css</a></li>
<li><a href="https://github.com/yujing-student/fix-the-flow-interactive-website/blob/main/scripts/script-enterkey2.js">Javascript</a></li>

In de code kunt u zien hoe ik dit heb gerealiseerd de navbar heb ik niet gemaakt die erin staat die is door
Amber gemaakt <a href ="https://github.com/Amberhva/fix-the-flow-interactive-website">link naar haar repository</a>
## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


