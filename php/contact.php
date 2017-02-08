<?php
  if(isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = nl2br($_POST["message"]);
    $to = "themalni@live.co.uk";
    $from = $email;
    $subject = "Contact Form Mesage";
    $message = "<b>Name:</b> ".$name." <br><b>Email:</b> ".$email." <p>".$message."</p>";
    $headers = "From: $from\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";
    if(mail($to, $subject, $message, $headers)){
      echo "success";
    }else{
      echo "The server failed to send the message. Please try again later.";
    }
  }
?>
