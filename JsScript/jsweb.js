function copyIP_TAB2() {
  const ipAddress = "play.smp-craft.de";
  navigator.clipboard.writeText(ipAddress)
    .then(() => {
      document.getElementById("demo").innerText = "Copied the text: " + ipAddress;
    })
    .catch(err => console.error(err));
}
