<?php
$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    $entry = "==== Neue Anfrage ====\n";
    $entry .= "IP: " . $data['ip'] . "\n";
    $entry .= "Ort: " . $data['location'] . "\n";
    $entry .= "Browser: " . $data['userAgent'] . "\n";
    $entry .= "Betriebssystem: " . $data['platform'] . "\n";
    $entry .= "Sprache: " . $data['language'] . "\n";
    $entry .= "Zeit: " . date("Y-m-d H:i:s") . "\n\n";

    file_put_contents("logs.txt", $entry, FILE_APPEND);
    echo "Daten gespeichert!";
} else {
    echo "Keine Daten empfangen.";
}
?>
