> _Fork_ deze leertaak en ga aan de slag. 
Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. 
De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# welkompagina voor de oba
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Ik heb voor de oba een welkompagina gemaakt zodat de gebruiker direct ziet wat diegene kan doen op de oba mijn omgeving
<img width="1728" alt="Schermafbeelding 2023-11-28 104526" src="https://github.com/yujing-student/look-and-feel-corporate-identity/assets/100352887/7a89071c-e8e9-4ab1-92e1-2d3c07273641">



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
    <img width="375" alt="image" src="https://github.com/yujing-student/look-and-feel-corporate-identity/assets/100352887/e15304f5-82c3-4d62-9dae-d5f12493338e">
    <br>
    <img width="375" alt="image" src="https://github.com/yujing-student/look-and-feel-corporate-identity/assets/100352887/e90627a6-c830-48ba-a283-0d0631b8c5b0">
</details>

<details>
    <summary>
        tablet
    </summary>
    <img alt="20231128_083615175_iOS" src="https://github.com/yujing-student/look-and-feel-corporate-identity/assets/100352887/05407d0f-df67-4612-a1ca-dbaf20a017c4"
         width="1069">
    <img alt="20231128_083512790_iOS" src="https://github.com/yujing-student/look-and-feel-corporate-identity/assets/100352887/34f11b73-07c1-49ea-ba22-b17228d47d60"
         width="1080">

</details>
<details>
    <summary>
        Desktop
    </summary>
    <img width="951" alt="image" src="https://github.com/yujing-student/look-and-feel-corporate-identity/assets/100352887/dd2ebb09-f444-41dc-b00c-e83f3047e3bb">
    <img width="942" alt="image" src="https://github.com/yujing-student/look-and-feel-corporate-identity/assets/100352887/47048260-937c-4e5f-aa22-e8af89aa47fd">

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
    ```
   
    @media (min-width: 60em)  and (max-width: 80em) {
    /*mini ipad*/
    .grid-container {
    display: grid;
    grid-template-areas:   var(--grid-template-areas-indeling);
    grid-template-columns: var(--grid-template-columns-indeling);


    }

    .grid-item:nth-child(1) {
    margin: 0 1em 0 0;
    }

    p:nth-child(3), .inleiding-text-boeken-overzicht { /*dit is Welkom op uw persoonlijke pagina van de website van de OBA. p */
    max-width: 30em;
    }

    .grid-container-filter {
    display: grid;
    grid-template-areas:   var(--grid-template-areas-indeling);
    grid-template-columns: var(--grid-template-columns-indeling);
    margin-top: 5em;


    }

    .grid-item-filter:nth-child(1) { /*meer info*/
    grid-area: inleiding-zoekvak;


    }

    .grid-item-filter, .grid-item-filter:nth-child(2) { /*meer info*/
    grid-area: meer-info-filters;
    margin-bottom: var(--margin-bottom-1em);


    }

    .grid-item-filter, .grid-item-filter:nth-child(3) { /*meer info*/
    grid-area: boeken-overzicht-boeken;


    }

    .grid-books-blocks { /*dit zijn de boeken die getoond worden*/
    display: grid;
    grid-template-areas: "boek1 boek2";
    }

    .figure-image-title-book { /*positioneren van de boeken en de tekst*/
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }


    }
    ```

</details>
<details>
    <summary>
        uitleg over de javascript code zoekfunctie
    </summary>
    ```


   
    ```

</details>

## programmeertalen
klik op de link om de volledige code te zien
<li><a href="">Html</a></li>
<li><a href="">Css</a></li>
<li><a href="">Javascript</a></li>

In de code kunt u zien hoe ik dit heb gerealiseerd de navbar heb ik niet gemaakt die erin staat die is door
Amber gemaakt <a href ="https://github.com/Amberhva/fix-the-flow-interactive-website">link naar haar repository</a>
## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


