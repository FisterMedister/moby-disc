
<?php
  $album_id = $_REQUEST["album_id"]; //parameter kan fjernes

  include 'conn.php';


  //query med ID restriktioner (hvis vi vil pege på et specifikt album)
  $sql = "SELECT track.track 
            FROM track, album_tracks 
            WHERE album_tracks.album_id=$album_id
            AND track.track_id = album_tracks.track_id";

  $result = $conn->query($sql); 

  echo "<b>Track list:</b><br/>";

  //hvis resultatets antal af linjer vi får tilbage er større end 0 (altså hvis der er noget)
  if ($result->num_rows > 0) {   
    //output data of each row (row = linje nummeret, result går gennem alle linjerne)
    $counter = 1;
    while ($row = $result->fetch_assoc()){    
      //vores echo i det her tilfælde vil vi gerne have returneret til vores ajaxkald i js
      //den pakker det hele som en lang string som sendes tilbage til AJAx      
    if ($counter < 10) {
      echo "0".$counter.": ".$row['track']."<br/>"; 
    } 
    else {
      echo "".$counter.": ".$row['track']."<br/>";
    }
      
      $counter += 1;
    }
  } 
  else {
    echo "0 results";
  }

  $conn->close();
?>
      


