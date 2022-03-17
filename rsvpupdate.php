<?php
// process.php

$errors         = array();      // array to hold validation errors
$data           = array();      // array to pass back data

// validate the variables ======================================================
    // if any of these variables don't exist, add an error to our $errors array

    if (empty($_POST['attend']))
        $errors['name'] = 'this field is required.';

    if (empty($_POST['firstname']))
        $errors['name'] = 'this field is required.';

    if (empty($_POST['lastname']))
        $errors['name'] = 'this field is required.';

    if (empty($_POST['email']))
        $errors['name'] = 'this field is required.';

    if (empty($_POST['guest']))
        $errors['name'] = 'this field is required.';



// return a response ===========================================================

    // if there are any errors in our errors array, return a success boolean of false
    if ( ! empty($errors)) {

        // if there are items in our errors array, return those errors
        $data['success'] = false;
        $data['errors']  = $errors;
    } else {

        // if there are no errors process our form, then return a message

        define('DB_NAME', 'gkqpfcsi_rsvp_data');
        define('DB_USER', 'gkqpfcsi_admin');
        define('DB_PASSWORD', 'Herooftime613!');
        define('DB_HOST', 'localhost');

        $link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD);

        if (!$link) {
            die('Could not connect: ' . mysql_error());
        }

        $db_selected = mysql_select_db(DB_NAME, $link);

        if (!$db_selected) {
            die('Can\'t use ' . DB_NAME . ': ' . mysql_error());
        }

        $value1 = $_POST['attend'];
        $value2 = $_POST['firstname'];
        $value3 = $_POST['lastname'];
        $value4 = $_POST['email'];
        $value5 = $_POST['guest'];

        $sql = "INSERT INTO rsvp (attend, firstname, lastname, email, guest) VALUES ('$value1', '$value2', '$value3', '$value4', '$value5')";

        if (!mysql_query($sql)) {
            die('Error: ' . mysql_error());
        }

        mysql_close();

        // show a message of success and provide a true success variable
        $data['success'] = true;
        $data['message'] = 'Success!';
    }

    // return all our data to an AJAX call
    echo json_encode($data);

    ?>