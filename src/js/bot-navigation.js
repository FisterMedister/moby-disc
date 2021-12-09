//globale variabler oprettes i window.onload og skal kunne tilgås i stickyTopMenu
var navbar, sticky, record;

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

    //fjerner opret får en tilbage til login
    document.getElementById('btn-goto-login').onclick=function() {
        document.getElementById('main-opret').classList.add('hidden');
        document.getElementById('main-login').classList.remove('hidden');
    }
    //opretter bruger, får en tilbage så man kan logge ind 
    document.getElementById('btn-opret').onclick=function() {
        document.getElementById('main-opret').classList.add('hidden');
        document.getElementById('main-login').classList.remove('hidden');
        document.getElementById('login-besked').classList.remove('hidden');   
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
        populateAnbefalinger();

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

    /*------------------------Mine Genre side - marker knapper-------------------------------------------------*/
    
    document.getElementById('klas').onclick=function(){
        this.classList.toggle("selected");
    }

    document.getElementById('hip').onclick=function(){
        this.classList.toggle("selected");
    }  

    document.getElementById('count').onclick=function(){
        this.classList.toggle("selected");
    }  

    document.getElementById('rock').onclick=function(){
        this.classList.toggle("selected");
    }  

    document.getElementById('rap').onclick=function(){
        this.classList.toggle("selected");
    }  

    document.getElementById('blues').onclick=function(){
        this.classList.toggle("selected");
    }  

    document.getElementById('k-pop').onclick=function(){
        this.classList.toggle("selected");
    }  

    document.getElementById('ind').onclick=function(){
        this.classList.toggle("selected");
    }  

    document.getElementById('metal').onclick=function(){
        this.classList.toggle("selected");
    }
 
    document.getElementById('heavy').onclick=function(){
        this.classList.toggle("selected");
    }
      
    document.getElementById('pop').onclick=function(){
        this.classList.toggle("selected");
    }
      
    document.getElementById('rega').onclick=function(){
        this.classList.toggle("selected");
    }
     

/*------------------------MAIN-CONTENT:SHOP: TOP MENU: HANDLES ON SCROLL(STICKY)-------------------------------------------------*/

    // Get the navbar
    navbar = document.getElementById("top-nav");

    // When the user scrolls the page, execute stickyTopMenu
    window.onscroll = function() {stickyTopMenu()};
}

//denne funktion generere og indsætter dummy data, så der kan scrolles når der trykkes på anbefalinger
function populateAnbefalinger() {

    //dummy data - her kommer vi til at hente data fra databasen i stedet for 
   
    records = [
        ['src/img/placeholder.svg','Kunstner','Titel','Genre','Pris'],
        ['src/img/placeholder.svg','Liv Krogshede','Lad os Skændes','Pop','20000kr'],
        ['src/img/placeholder.svg','ABBA','Voyage','Pop','199kr'],
        ['src/img/placeholder.svg','Amy Winehouse','Back to Black','Jazz','155kr']
    ];

    //finder en div via ID (content-shop-anbefalinger)
    divAnbefalinger = document.getElementById('content-shop-anbefalinger');
    //rydder alt indhold i div (content-shop-anbefalinger)
    divAnbefalinger.innerHTML = "";
    
    //opretter en ny variable til HTML indhold - e.g. returned record set from DB
    anbefalingerContent = ""; 

    //i er 0, så længe i er mindre end længden på arrayet (records), så læg en til
    for(i=0; i< records.length; i++) {
        //opbygger html indhold basseret på dummy data array
        anbefalingerContent += 
            '<div class="centerCon">' +
            '<input onclick="viewRecord('+i+')" class="medium" type="image" src="'+records[i][0]+'" />' +
                '<span class="titelRec"><h4>'+records[i][1]+' - '+records[i][2]+'<h4></span>'+
                '<span class="titelGenre"><h4>Genre: '+records[i][3]+'</h4></span>'+
                '<button onclick="addRecord('+i+')" class="buyRec">' +
                    '<span class="priceTag">Køb: '+records[i][4]+'</span>' +
                    '<img class="small" src="src/img/placeholder.svg">' + 
                '</button>' +
            '</div>';
    }

    //indsætter indholdet af variablen (anbefalingerContent) i div (content-shop-anbefalinger)
    divAnbefalinger.innerHTML += anbefalingerContent;
}

function addRecord(albumID) {
    console.log(albumID);
}


function viewRecord(albumID) {
    console.log(albumID);
    //viser content fra Mere om Pladen
    getTopMenuContent("content-shop-anbefalinger-viewRecord");
    //henter data fra array og sætter ind på plads
    document.getElementById("kunstnerTitel").innerHTML=records[albumID][1]+ " " + records[albumID][2];
    document.getElementById("addGenre").innerHTML="Genre: " + records[albumID][3];
    document.getElementById("addImg").innerHTML='<img class="medium" src="' + records[albumID][0] +'">';
    document.getElementById("addPris").innerHTML="Pris: " + records[albumID][4];
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
    document.getElementById("content-shop-anbefalinger-viewRecord").classList.add("hidden");
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

