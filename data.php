<?php

function runMyFunction() {
   echo 'I just ran a php function';
 }

 if (isset($_GET['hello'])) {
 takeData();
 }
  

  function takeData(){


   $host        = "host = localhost";
   $port        = "port = 5432";
   $dbname      = "dbname = cycki";
   $credentials = "user = xyloh password=xylo1991";

   $db = pg_connect( "$host $port $dbname $credentials"  );
   if(!$db) {
      echo "Error : Unable to open database\n";
   } else {
 
   }

   $sql =<<<EOF
      SELECT * from person where name='Jada Facer';
EOF;

   $ret = pg_query($db, $sql);
   if(!$ret) {
      echo pg_last_error($db);
      exit;
   } 
   echo "<div width='200' id='cycki' name='Jada'>";
   while ($ro = pg_fetch_object($ret)) {
      echo "<br>";
   
      echo "Imie i nazwisko: " . $ro->name . " <br>";
      echo $ro->wiek . " <br>";
     
  }
  echo "</div>";

  

   pg_close($db);


   

  }

function insertLinki($table, $link, $img){
   $host        = "host = localhost";
   $port        = "port = 5432";
   $dbname      = "dbname = cycki";
   $credentials = "user = xyloh password=xylo1991";

   $db = pg_connect( "$host $port $dbname $credentials"  );
   if(!$db) {
      echo "Error : Unable to open database\n";
   } else {
 
   }

   $sql =<<<EOF
      insert into $table values(1,$link,$img);
EOF;

   $ret = pg_query($db, $sql);
   if(!$ret) {
      echo pg_last_error($db);
      exit;
   } 



}
?>

