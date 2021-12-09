<?php

//database details. You have created these details in the third step. Use your own.
$server="localhost:3307";
$user="Liv";
$pw="1234";
$db="moby_disc_records";

        // Create connection
          $conn = new mysqli($server, $user, $pw, $db);
          // Check connection
          if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
          }
          echo "Connected successfully";

        ?>