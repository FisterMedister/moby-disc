
<?php
  //inkluderer connection til databasen gemt i en variable som hedder $conn
  include 'conn.php';

  //variablen indeholder min query string
  $sql = "SELECT 
            album.album_id,
            album.pris, 
            album.aarstal, 
            album.album_title,
            album.img_src, 
            kunstner.kunstnernavn, 
            genre.genre
          FROM album 
            INNER JOIN kunstner
              ON album.kunstner_id = kunstner.kunstner_id
            INNER JOIN genre
              ON album.genre_id = genre.genre_id";

  //gemmer resultatet fra min query string i en variablen result
  $result = $conn->query($sql); 

  
  //hvis resultatets antal af linjer vi får tilbage er større end 0 (altså hvis der er noget)
  if ($result->num_rows > 0) {   
    //output data of each row (row = linje nummeret, result går gennem alle linjerne)
    while ($row = $result->fetch_assoc()){    
      //vores echo i det her tilfælde vil vi gerne have returneret til vores ajaxkald i js
      //den pakker det hele som en lang string som sendes tilbage til AJAx
      //det den pakker er det html data som skal indsættes i content-shop-anbefalinger

      //html data indeholder funktionskald i onclick til viewRecord med albumID som parameter
      echo '<div class="centerCon">
              <input onclick="viewRecord('.$row['album_id'].')" class="medium" type="image" src="'.$row['img_src'].'" />
              <span class="titelRec"><h4>'.$row['album_title'].' - '.$row['kunstnernavn'].'<h4></span>
              <span class="titelGenre"><h4>Genre: '.$row['genre'].' </h4></span>
              <button onclick="addRecord('.$row['album_id'].')" class="buyRec">
                <span class="priceTag">Køb: '.$row['pris'].'</span>
                <img class="small" src="src/img/placeholder.svg">
              </button>
            </div>';
    }
  } 
  else {
    echo "0 results";
  }

  $conn->close();
?>
      


