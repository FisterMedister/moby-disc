
<?php
  include 'conn.php';

  $loginMail = $_REQUEST["loginMail"]; 
  $loginPW = $_REQUEST["loginPW"]; 

  //query med ID restriktioner (hvis vi vil pege på et specifikt album)
  $sql = "SELECT * FROM users 
          WHERE email = $loginMail AND adgangskode = $loginPW";

  $result = $conn->query($sql); 
 
  //hvis resultatets antal af linjer vi får tilbage er større end 0 (altså hvis der er noget)
  if ($result->num_rows > 0) { 
    //output data of each row (row = linje nummeret, result går gennem alle linjerne)
    while ($row = $result->fetch_assoc()){    
      //vores echo i det her tilfælde vil vi gerne have returneret til vores ajaxkald i js
      //den pakker det hele som en lang string som sendes tilbage til AJAx
      echo $row['user_id'];
      
    }
  } 
  else {
    echo "0 results";
  }

  $conn->close();
?>
      


