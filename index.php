<!DOCTYPE html>
<html lang="da">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/css/style.css">
    <title>Moby Disc - Home</title>
    <script src="src/js/bot-navigation.js"></script>
</head>

<body>
    <div class="global-wrapper">

<!-----------------------------LOGIN FORSIDE ----------------------------------------->
                                      
        <div id="main-login">
            <img src="src/img/logo.png" class="logo-login" />
            <span  id="login-besked" class="centerCon hidden">Tillykke du er nu oprettet og kan logge ind</span>
            <button class="btn-login" id="log-ind" >Log Ind</button>
            <button class="btn-login" id="btn-goto-opret">Opret Bruger</button>
            <p id="or">Eller</p>
            <button class="btn-loginwith-apple"><img src="src/img/apple-16.png"/>Sign up with apple</button>
            <button class="btn-loginwith-google"><img src="src/img/google-16.png" />Sign up with google</button>
        </div>
<!-----------------------------LOGIN SIDE ----------------------------------------->
        <div class="hidden" id="login-side">
            <div class="userlogin-container">
                <img src="src/img/logo.png" class="logo-login" />
                <input id="login-mail" type="text" class="opret-input" />
                <input id="login-pw" type="password" class="opret-input" />
                <button id="btn-goto-main" value="submit" class="btn-login">Login</button>
            </div>
        </div>

<!-----------------------------OPRET ----------------------------------------->
                  
        <div id="main-opret" class="hidden">
            <img src="src/img/Logo.png" class="logo-login" alt="Logo">
            <h1 class="h1-signup">Velkommen til Moby Disc</h1>
        <form  method="POST" action="test-data.php" class="signup-wrapper">
            <p class="p-signup">Indtast venligst dine oplysninger. Felter markeret med * skal udfyldes</p>
            <input type="text" name="fornavn" placeholder="Fornavn*" class="opret-input" required />
            <input type="text" name="efternavn" placeholder="Efternavn*" class="opret-input" />
            <input type="email" name="email" placeholder="Email*" class="opret-input" />
            <input type="text" name="gadenavn" placeholder="Gadenavn*" class="opret-input" />
            <input type="text" name="husnr" placeholder="Hus nr.*" class="opret-input" />
            <!--<input type="text" name="postnummer" placeholder="Postnummer*" class="opret-input" />-->
            <input type="password" name="adgangskode" placeholder="Adgangskode*" class="opret-input" />
            <input class="btn-login" id="btn-opret" type="submit" name="submit" value="Opret"/>
    </form>
    <button class="btn-login" id="btn-goto-login">Log Ind</button>
        </div>

<!-----------------------------MAIN CONTENT ----------------------------------------->
                    
        <div id="main-content" class="hidden">
            <header>
                <img src="src/img/Logo.png" class="logo-login" />
                
            </header>

<!-----------------------------MAIN CONTENT: HOME ----------------------------------------->
                        
            <div id="content-home" class="">
                <h1 class="h1-bundles">Velkommen til Moby Disc! 
                    <br>Optjen point ved at shoppe, og anbefale plader</h1>
        
                <div class="front-page-container">
                    <div class="grid-box1">
                        <h2>Medlem</h2>
                    </div>
                    <div class="grid-box2">
                        <h2>Anbefalet til dig</h2>
                    </div>
                    <div class="grid-box3">
                        <h2>Bundles</h2>
                    </div>
                    <div class="grid-box4">
                        <h2>Vinyl</h2>
                    </div>
                    <div class="grid-box5">
                        <h2>Forudbestil</h2>
                    </div>
                </div>
        
                <div class="personlige">
                    <h2>Personlige oplysninger/indstillinger</h2>
                </div>        
            </div>

<!-----------------------------MAIN CONTENT: SHOP ----------------------------------------->
                                    
            <div id="content-shop" class="hidden">
                <nav id="top-nav" class="top-nav-non-sticky">
                    <ul class="bot-menu-list">
                    <li id="btn-anbefalinger" class="bot-list-item-text bot-list-item-active">Anbefalinger til dig</li>
                    <li id="btn-bundles" class="bot-list-item-text">Bundles</li>
                    <li id="btn-genre" class="bot-list-item-text">Mine genre</li>
                    </ul>
                </nav>

<!-----------------------------MAIN CONTENT: SHOP: ANBEFALINGER ----------------------------------------->
                                        
                <div id="content-shop-anbefalinger" class="">
                </div>

<!-----------------------------MAIN CONTENT: SHOP: ANBEFALINGER: MERE OM PLADEN ----------------------------------------->
                <div class="hidden" id="content-shop-anbefalinger-viewRecord">
                    <h1 id="kunstnerTitel" class="item-title">Album titel og kunstner</h1>
                    <div id="addImg">
                    <img src="src/img/itemplaceholder.png" class="item-cover" />
                </div>
                    <div class="thumps-container">
                        <img src="src/img/thumpsplaceholder.png" onclick=toogle(this) class="thumps" />
                    </div>
                <div class="item-grid-container"> 
                    <div class="item-container">
                        <p>NU. PR. STK</p>
                        <button class="minus-btn" onclick="minus()">-</button>
                        <input class="counter" id="cart" placeholder="0"/>
                        <button class="plus-btn" onclick="plus()">+</button>
                        <p id="trackList" class="Track-list">
                            
                        </p>
                        <div class="bot-menu-spacer">
                            <!--Empty space-->   
                            &nbsp;
                        </div>
                    </div>
                        <div class="item-container">
                            <button class="cart">Læg i kurv</button>
                            <p>Album info:</p>
                        
                            <p>Udgivet:</p>
                            
                            <p>Varenumer:</p>
                            
                            <p id="addGenre">Genre:</p>
                            
                            <p id="addPris">Pris:</p>
                        </div>
                        <div class="bot-menu-spacer">
                            <!--Empty space-->   
                            &nbsp;
                        </div>
                    </div>  
                </div>

<!-----------------------------MAIN CONTENT: SHOP: BUNDLES ----------------------------------------->
                                               
                <div id="content-shop-bundles" class="hidden">
                    
                    <section class="bundle1">
                        <h2>Moby's top picks</h2>
                        <button>Læg i kurv</button>
                        <div class="bundle-container">
                            <div>
                                <p>ACDC - Back In Black</p>
                                <img src="src/img/acdc-backinblack.jpg" alt="">
                                <button class="see-more">Se mere</button>
                            </div>
                            <div>
                                <p>The Doobie Brothers - Liberté</p>
                                <img src="src/img/thedoobiebrothers.jpg" alt="">
                                <button class="see-more">Se mere</button>
                            </div>
                            <div>
                                <p>Ahmed Abdul-Malik - Jazz Sahara</p>
                                <img src="src/img/ahmed-abdul-malik.jpg" alt="">
                                <button class="see-more">Se mere</button>
                            </div>
                        </div>
                    </section> <!-- Bundle 1 -->

                    <section class="bundle2">
                        <h2>Populære</h2>
                        <button>Læg i kurv</button>
                        <div class="bundle-container">
                            <div>
                                <p>Bille Ellish - Happier than ever</p>
                                <img src="src/img/happierthanever.jpg" alt="">
                                <button class="see-more">Se mere</button>
                            </div>
                            <div>
                                <p>Michael Jackson - Thriller</p>
                                <img src="src/img/michaeljackson-thriller.jpg" alt="">
                                <button class="see-more">Se mere</button>
                            </div>
                            <div>
                                <p>Queen - Queen II</p>
                                <img src="src/img/queen-queenII.jpg" alt="">
                                <button class="see-more">Se mere</button>
                            </div>
                        </div>
                    </section><!-- Bundle 2 -->

                    <section class="bundle3">
                        <h2>Vinyl-nørden</h2>
                        <button>Læg i kurv</button>
                        <div class="bundle-container">
                            <div>
                                <p>Herb Alpert & The Tijuana Brass - Going Places</p>
                                <img src="src/img/herbalbert-goingplaces.jpg" alt="">
                                <button class="see-more">Se mere</button>
                            </div>
                            <div>
                                <p>Buggles - Video Killed the Radio Star</p>
                                <img src="src/img/buggles-videokilled.jpg" alt="">
                                <button class="see-more">Se mere</button>
                            </div>
                            <div>
                                <p>Eggstone - waiting for the bell</p>
                                <img src="src/img/eggstone-waitingforthebell.jpg" alt="">
                                <button class="see-more">Se mere</button>
                            </div>
                        </div>
                    </section><!-- Bundle 3 -->

                    <section class="bundle4">
                        <h2>Til den nye samler</h2>
                        <button>Læg i kurv</button>
                        <div class="bundle-container">
                            <div>
                                <p>ACDC Highway to Hell</p>
                                <img src="src/img/acdc-highway-to-hell.jpg" alt="">
                                <button class="see-more">Se mere</button>
                            </div>
                            <div>
                                <p>The Rolling Stones - Paint It, Black</p>
                                <img src="src/img/therollingstones-paintitblack.jpg" alt="">
                                <button class="see-more">Se mere</button>
                            </div>
                            <div>
                                <p>Dizzy Mizz Lizzy</p>
                                <img src="src/img/dizzymizzylizzy.jpg" alt="">
                                <button class="see-more">Se mere</button>
                            </div>
                        </div>
                    </section><!-- Bundle 4 -->

                </div>

<!-----------------------------MAIN CONTENT: SHOP: GENRE ----------------------------------------->
                                               
                <div id="content-shop-genre" class="hidden">
                

                    <p class="genrer-text">Vælg dine yndlingsgernrer
                    Psst. Du kan altid ændre disse senere</p>
                    
                    
                    <div class="grid-genrer-container">
                        <div id="klas" class="grid-item"><p>Klassisk</p></div>
                        <div id="hip" class="grid-item"><p>Hip-Hop</p></div>
                        <div id="count" class="grid-item"><p>Country</p></div>
                        <div id="rock" class="grid-item"><p>Rock</p></div>
                        <div id="rap" class="grid-item"><p>Rap</p></div>
                        <div id="blues" class="grid-item"><p>Blues</p></div>
                        <div id="k-pop" class="grid-item"><p>K-pop</p></div>
                        <div id="ind" class="grid-item"><p>Indie</p></div>
                        <div id="metal" class="grid-item"><p>Metal</p></div>
                        <div id="heavy" class="grid-item"><p>Heavy Metal</p></div>
                        <div id="pop" class="grid-item"><p>Pop</p></div>
                        <div id="rega" class="grid-item"><p>Reggae</p></div>
                    
                    
                   
                    
                    
                    </div>
                </div>
            </div>

<!-----------------------------MAIN CONTENT: PROFILE ----------------------------------------->
                                           
            <div id="content-profile" class="hidden">
            <img src="https://via.placeholder.com/100" class="profile-img" />

                        <div class="reward-title">
                            <img src="" alt=""> </div>

                        <div class="progress-grid">
                                <div class="grid-star1"></div>
                                <div class="grid-star2"></div>
                                <div class="grid-star3"></div>
                                <div class="grid-star4"></div>
                                <div class="grid-star5"></div>
                                <div class="grid-star6"></div>
                                <div class="grid-progress"></div>
                                <div class="fill"></div>
                        </div>

                        <div class="grid-profile">
                            <div class="samling">
                                <h2>Din samling</h2>
                                <h3>Her kan du se din køb. Du kan optjene point ved at købe eller anbefale plader</h3>
                            </div>
                            <div class="profile-anbefalet">
                                <h2>Anbefalet</h2>
                                <div class="anbefal-vinyl"></div>
                                <div class="anbefal-vinyl"></div>
                                <div class="anbefal-vinyl"></div>
                            </div>
                        </div>
                    
            </div>
            <div class="bot-menu-spacer">
                <!--Empty space-->   
                &nbsp;
            </div>

<!-----------------------------MAIN CONTENT: BOTTOM NAVIGATION ----------------------------------------->
                                           
            <footer>
                <nav class="bot-nav">
                    <ul class="bot-menu-list">
                        <li id="btn-home" class="bot-list-item bot-list-item-active">
                            <img class="bot-list-item-img" src="src/img/Icon_home.svg">
                        </li>
                        <li id="btn-shop" class="bot-list-item-text">
                            SHOP
                        </li>
                        <li id="btn-profile" class="bot-list-item">
                            <img class="bot-list-item-img" src="src/img/user_profile_icon.svg">
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    </div>
</body>


</html>