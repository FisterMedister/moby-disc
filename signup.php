<!DOCTYPE html>
<html lang="da">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/css/style.css">
    <title>Moby Disc Sign Up</title>
</head>

<body>


<div class="global-wrapper">
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
        <input type="submit" name="submit" value="Opret"/>
    </form>
    <button class="btn-login" id="btn-goto-login">Log Ind</button>

       

    
</div>
</body>



</html>