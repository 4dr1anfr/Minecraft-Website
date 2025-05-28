    function copyIP() {
      const ipText = document.getElementById('ip').textContent;
      const copiedMsg = document.getElementById('copied-msg');

      navigator.clipboard.writeText(ipText).then(() => {
        copiedMsg.style.display = 'inline';
        setTimeout(() => {
          copiedMsg.style.display = 'none';
        }, 2000);
      }).catch(err => {
        alert("Kopieren fehlgeschlagen: " + err);
      });
    }