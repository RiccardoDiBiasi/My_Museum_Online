<script src="index.php">

<?php

if(isset($_POST['submit'])) {
    $file = $_FILES['file'];

    $fileName = $_FILES['file']['name'];
    $fileTmpName =$_FILES['file']['tmp_name'];
    $fileSize = $_FILES['file']['size'];
    $fileError = $_FILES['file']['error'];
    $fileType = $_FILES['file']['type'];

    $fileExt = explode('.', $fileName); //separiamo il nome del file dall'estensione
    $fileActualExt = strtolower(end($fileExt)); //prendo gli ultimi elementi dell'array ottenuto sopra che sono l'estensione

    $allowed = array('jpg', 'jpeg', 'png');

    if(in_array($fileActualExt, $allowed)){ 
        if($fileError === 0){  //Controllo che non ci siano errori
            if($fileSize < 500000){ //Controllo la grandezza del file
                $fileNameNew = uniqid('', true).".".$fileActualExt; //evito che file con lo stesso nome di altri gia presenti li sovrascrivano
                                                                    //creando un ID basato sul tempo corrente in ms
                $fileDest = 'uploads/'.$fileNameNew;
                move_uploaded_file($fileTmpName, $fileDest);
                /* APRE L'IMMAGINE A TUTTO SCHERMO DOPO CHE L'HAI CARICATA 
                
                header('Content-Type: image/jpeg');
                readfile($fileDest);

                */
                
                
                
            } else {
                echo "Il tuo file è troppo grande!";
            }
        } else {
            echo "C'è stato un errore nell'upload del file";
        }

    } else {
        echo "Non puoi caricare file di questo formato.";
    }


}

?>
