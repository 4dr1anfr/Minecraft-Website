function copyIP() {
  const ip = document.getElementById("ip-address").textContent; //in index.html ip-addresse "id"

  navigator.clipboard.writeText(ip).then(() => {
    alert("Die IP-Adresse "+ "'" + ip + "'" + " wurde kopiert.");
  }).catch(err => {
    alert("Fehler beim Kopieren: " + err);
  });
}



