<?php

    if(isset($_POST['fornavn']))
    {
        $fornavn = $_POST['fornavn'];
        $efternavn = $_POST['efternavn'];
        $email = $_POST['email'];
        $adgangskode = $_POST['adgangskode'];
        $gadenavn = $_POST['gadenavn'];
        $husnr = $_POST['husnr'];
        //$postnummer = $_POST['postnummer'];
       

        //database details. You have created these details in the third step. Use your own.
        $server="localhost";
        $user="root";
        $pw="";
        $db="moby_disc_records";

        // Create connection
          $conn = new mysqli($server, $user, $pw, $db);
          // Check connection
          if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
          }
          echo "Connected successfully";



        //This below line is a code to Send form entries to database
        $sql = "INSERT INTO users (fornavn, efternavn, email, adgangskode, gadenavn, husnr) 
        VALUES ('$fornavn', '$efternavn', '$email', '$adgangskode', '$gadenavn', '$husnr')";
        if ($conn->query($sql) === TRUE) {
          echo "New record created successfully";
        } else {
          echo "Error: " . $sql . "<br>" . $conn->error;
        }
        $conn->close();

      }
?>
