
<?php
  include 'conn.php';

  $album_id = $_REQUEST["album_id"];

  //query med ID restriktioner (hvis vi vil pege på et specifikt album)
  $sql = "SELECT 
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
              ON album.genre_id = genre.genre_id
          WHERE album_id = $album_id";

  $result = $conn->query($sql); 

  
  //hvis resultatets antal af linjer vi får tilbage er større end 0 (altså hvis der er noget)
  if ($result->num_rows > 0) {   
    //output data of each row (row = linje nummeret, result går gennem alle linjerne)
    while ($row = $result->fetch_assoc()){    
      //vores echo i det her tilfælde vil vi gerne have returneret til vores ajaxkald i js
      //den pakker det hele som en lang string som sendes tilbage til AJAx
      echo $row['album_title']."|".$row['kunstnernavn']."|".$row['genre']."|".$row['img_src']."|".$row['pris'];
      
    }
  } 
  else {
    echo "0 results";
  }

  $conn->close();
?>
      


