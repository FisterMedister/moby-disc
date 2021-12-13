//globale variabler oprettes i window.onload og skal kunne tilgås i stickyTopMenu
var navbar, sticky;

//når den er færdig med at oprette DOM køres dette stykke kode, fordi ellers kan dene ikke fange dem
//for det er ikke oprettet endnu
window.onload = function() {

/*------------------------NAVIGER MELLEM LOGIN, OPRET, MAIN-CONTENT-------------------------------------------------*/
    
    //fjerner login-side, får en hen til content 
    document.getElementById('btn-goto-main').onclick=function() {
        //det her virker ikke
        /*
        console.log(document.getElementById('login-mail').value);
        console.log(document.getElementById('login-pw').value);

        var loginMail = document.getElementById('login-mail').value;
        var loginPW = document.getElementById('login-pw').value;
        
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            //this.responseText er en string der indeholder alt det echo vi har fra PHP
            //var loginID = this.responseText;
            //console.log('vi forventer'+this.responseText);
            var login = "tempSucces";
            if(login == "tempSucces") {
            */
                //skjuler main-login med klassen hidden
                document.getElementById('main-login').classList.add('hidden');
                //synliggør main-content ved at fjerne klassen hidden
                document.getElementById('main-content').classList.remove('hidden');
                document.getElementById('login-side').classList.add('hidden');
            /*
            }
            else {
                console.log('feeeehl');
            }    
        }
        //onload bliver først kørt, når vi har loadet vores PHP
        xhttp.open("GET", "login.php?loginMail="+loginMail+"&loginPW="+loginPW); //parameter kan fjernes
        xhttp.send();
        */
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

    //får en fra main-login og hen til login-side
    document.getElementById('log-ind').onclick=function() {
        document.getElementById('main-login').classList.add('hidden');
        document.getElementById('login-side').classList.remove('hidden');
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

//denne funktion henter vores record data for alle records
function populateAnbefalinger() {
    //denne konstant opretter et objekt af XMLHttpRequest typen
    const xhttp = new XMLHttpRequest();
    //bliver først kørt efter vi har fået respons fra getallrecords.php
    xhttp.onload = function() {
        //this.responseText er en string der indeholder alt det echo vi har fra PHP
        //finder en div via ID (content-shop-anbefalinger) og indsætter this.responseText
        divAnbefalinger = document.getElementById('content-shop-anbefalinger').innerHTML = this.responseText;
    }
    //onload bliver først kørt, når vi har loadet vores PHP
    //GET request er en måde at kontakte en server på gennem url
    xhttp.open("GET", "getallrecords.php");
    xhttp.send();
}

function addRecord(albumID) {
    console.log(albumID);
}

//når getallrecords.php indsætter html indsætter den også et onclick event der kalder denne funktion med albumID som parameter
function viewRecord(albumID) {
    console.log(albumID);
    //viser content fra Mere om Pladen
    getTopMenuContent("content-shop-anbefalinger-viewRecord");
    //indsætter record data
    addRecordData(albumID);
    //indsætter tracklistdata
    addTrackList(albumID);
}

function addRecordData(albumID){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        //this.responseText er en string der indeholder alt det echo vi har fra PHP
        //var myString = "titelnavn|kustnernavn|genredims|placeholder|800";
        var myRecord = this.responseText.split("|");
        console.log(myRecord);
        //henter data fra array og sætter ind på plads
        document.getElementById("kunstnerTitel").innerHTML=myRecord[0]+ " " + myRecord[1];
        document.getElementById("addGenre").innerHTML="Genre: " + myRecord[2];
        document.getElementById("addImg").innerHTML='<img class="medium" src="' + myRecord[3] +'">';
        document.getElementById("addPris").innerHTML="Pris: " + myRecord[4];
    }
    //onload bliver først kørt, når vi har loadet vores PHP
    xhttp.open("GET", "getspecificrecord.php?album_id="+albumID);
    xhttp.send();
}

function addTrackList(albumID){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        //this.responseText er en string der indeholder alt det echo vi har fra PHP
        console.log(this.responseText);
        document.getElementById("trackList").innerHTML = this.responseText;
    }
    //onload bliver først kørt, når vi har loadet vores PHP
    xhttp.open("GET", "gettracklist.php?album_id="+albumID);
    xhttp.send();
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

