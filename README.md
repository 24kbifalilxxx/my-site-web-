<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Adresse IP</title>
</head>
<body>

  <h1>Adresse IP</h1>
  <p id="ip-address">En attente de l'adresse IP...</p>

  <script>
    // Obtient l'adresse IP du client
    function getIP(callback){
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          const ip = response.ip;
          callback(ip);
        }
      };
      xhr.open('GET', 'https://api.ipify.org?format=json', true);
      xhr.send();
    }

    // Met à jour l'élément HTML avec l'adresse IP
    function updateIP(ip) {
      document.getElementById('ip-address').innerText = 'Votre adresse IP est : ' + ip + '. Happy happy happy';
    }

    // Appelle la fonction pour obtenir et afficher l'adresse IP
    getIP(updateIP);
  </script>

</body>
</html>
