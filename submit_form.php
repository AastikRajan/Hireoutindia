<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // In a real application, you would process the form data here.
    // For example, you might send an email, store the data in a database, etc.

    // For this example, we'll just display a success message.
    echo "<!DOCTYPE html>";
    echo "<html>";
    echo "<head>";
    echo "<title>Thank You</title>";
    echo "</head>";
    echo "<body>";
    echo "<h1>Thank you for your message!</h1>";
    echo "<p>We will get back to you shortly.</p>";
    echo "</body>";
    echo "</html>";
} else {
    // If the form wasn't submitted via POST, redirect to the contact page.
    header("Location: contact.html");
    exit();
}?>
<?php
//... (Previous code to check request method and retrieve data)...

// Basic input sanitization (important!)
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$message = htmlspecialchars($message);

// In a real application, you would use a library like PHPMailer
// to send emails.  For this example, we'll just log the data.

// Log the data to a file (for demonstration purposes)
$logFile = 'form_data.txt';
$logMessage = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message\n\n";
file_put_contents($logFile, $logMessage, FILE_APPEND);

// Respond to the AJAX request (Important!)
echo "Thank you for your message! We will get back to you shortly."; // Or a JSON success message?>