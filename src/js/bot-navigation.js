//globale variabler oprettes i window.onload og skal kunne tilgås i stickyTopMenu
var navbar, sticky;

//når den er færdig med at oprette DOM køres dette stykke kode, fordi ellers kan dene ikke fange dem
//for det er ikke oprettet endnu
window.onload = function() {

/*------------------------NAVIGER MELLEM LOGIN, OPRET, MAIN-CONTENT-------------------------------------------------*/
    
    //fjerner login, får en hen til content 
    document.getElementById('btn-goto-main').onclick=function() {
        //skjuler main-login med klassen hidden
        document.getElementById('main-login').classList.add('hidden');
        //synliggør main-content ved at fjerne klassen hidden
        document.getElementById('main-content').classList.remove('hidden');
    }
    //fjerner login, får en hen til opret
    document.getElementById('btn-goto-opret').onclick=function() {
        document.getElementById('main-login').classList.add('hidden');
        document.getElementById('main-opret').classList.remove('hidden');
    }

    //fjerner opretm får en tilbage til login
    document.getElementById('btn-goto-login').onclick=function() {
        document.getElementById('main-opret').classList.add('hidden');
        document.getElementById('main-login').classList.remove('hidden');
    }
    //opretter bruger, får en tilbage så man kan logge ind 
    document.getElementById('btn-opret').onclick=function() {
        document.getElementById('main-opret').classList.add('hidden');
        document.getElementById('login-besked').classList.remove('hidden');
        document.getElementById('main-login').classList.remove('hidden');
    }

/*------------------------MAIN-CONTENT: BOTTOM MENU-------------------------------------------------*/

    //finder element(knap-home) via dets ID, og kører funktion setActiv og getMenuContent
    document.getElementById('btn-home').onclick=function() {
        //fjerner highlight fra alle knapper undtagen this(btn-home)
        setActive(this);
        //skjuler alt content undtagen content-home
        getMenuContent("content-home");
    };

    document.getElementById('btn-shop').onclick=function() {
        setActive(this);
        getMenuContent("content-shop");

        // Get the offset position of the navbar
        sticky = navbar.offsetTop;
    };

    document.getElementById('btn-profile').onclick=function() {
        setActive(this);
        getMenuContent("content-profile");
    };

/*------------------------MAIN-CONTENT:SHOP: TOP MENU-------------------------------------------------*/

    document.getElementById('btn-anbefalinger').onclick=function(){
        //fjerner highlight fra alle knapper undtagen this(btn-anbefalinger)
        setTopActive(this);
        //skjuler alt content undtagen content-shop-anbefalinger
        getTopMenuContent("content-shop-anbefalinger");
        //laver dummy data, så man kan scrolle
        populateAnbefalinger();
    }

    document.getElementById('btn-bundles').onclick=function(){
        setTopActive(this);
        getTopMenuContent("content-shop-bundles");
    }

    document.getElementById('btn-genre').onclick=function(){
        setTopActive(this);
        getTopMenuContent("content-shop-genre");
    }

/*------------------------MAIN-CONTENT:SHOP: TOP MENU: HANDLES ON SCROLL(STICKY)-------------------------------------------------*/

    // Get the navbar
    navbar = document.getElementById("top-nav");

    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {stickyTopMenu()};
}

//denne funktion generere og indsætter dummy data, så der kan scrolles når der trykkes på anbefalinger
function populateAnbefalinger() {
    //finder en div via ID (content-shop-anbefalinger)
    divAnbefalinger = document.getElementById('content-shop-anbefalinger');
    //rydder alt indhold i div (content-shop-anbefalinger)
    divAnbefalinger.innerHTML = "";
    
    //opretter en ny variable til HTML indhold - e.g. returned record set from DB
    anbefalingerContent = ""; 

    //i er 0, så længe i er mindre end 100, lægges 1 til i
    for(i=0; i<100; i++) {
        //tilføjer (string "ANBEFALING" + i + et <br/> line break) til variablen(anbefalingerContent)
        anbefalingerContent += "ANBEFALING: " + i + "<br/>"; //Add record from DB
    }

    //indsætter indholdet af variablen (anbefalingerContent) i div (content-shop-anbefalinger)
    divAnbefalinger.innerHTML += anbefalingerContent;
}

/*------------------------MAIN-CONTENT: BOTTOM MENU: SUPPORT FUNKTIONS-------------------------------------------------*/

//putter klassen bot-list-item-active (gør den grøn) på det element der bliver klikket på
function setActive(listItem) {
    //fjerner klassen (bot-list-item-active) fra alle knapper
    document.getElementById('btn-home').classList.remove("bot-list-item-active");
    document.getElementById('btn-shop').classList.remove("bot-list-item-active");
    document.getElementById('btn-profile').classList.remove("bot-list-item-active");
    
    //tilføjer klassen bot-list-item-active til den knap der bliver trykket på(this er gemt i listItem variablen)
    listItem.classList.add("bot-list-item-active");
}

//fjerner klassen hidden, så content bliver vist
function getMenuContent(menuContent) {
    document.getElementById("content-profile").classList.add("hidden");
    document.getElementById("content-shop").classList.add("hidden");
    document.getElementById("content-home").classList.add("hidden");
    document.getElementById(menuContent).classList.remove("hidden");
}

/*------------------------MAIN-CONTENT: TOP MENU: SUPPORT FUNKTIONS-------------------------------------------------*/

function setTopActive(listItem) {
    document.getElementById('btn-anbefalinger').classList.remove("bot-list-item-active");
    document.getElementById('btn-bundles').classList.remove("bot-list-item-active");
    document.getElementById('btn-genre').classList.remove("bot-list-item-active");
    listItem.classList.add("bot-list-item-active");
}

//fjerner klassen hidden, så content bliver vist
function getTopMenuContent(menuContent) {
    document.getElementById("content-shop-anbefalinger").classList.add("hidden");
    document.getElementById("content-shop-bundles").classList.add("hidden");
    document.getElementById("content-shop-genre").classList.add("hidden");
    document.getElementById(menuContent).classList.remove("hidden");
}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyTopMenu() {
    //hvis der er scrollet længere ned end hvad den er fra toppen, så skal den blive sticky
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("top-nav-sticky");
        navbar.classList.remove("top-nav-non-sticky");
    } 
    //hvis ikke der er scrollet længere ned end hvad den er fra toppen, så skal den ikke være sticky
    else {
        navbar.classList.remove("top-nav-sticky");
        navbar.classList.add("top-nav-non-sticky");
    }
}

