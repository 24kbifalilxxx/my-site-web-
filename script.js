function effectuerReservation() {
  var nom = document.getElementById('nom').value;
  var dateArrivee = document.getElementById('dateArrivee').value;
  var dateDepart = document.getElementById('dateDepart').value;

  // Afficher un message de confirmation (simulation côté serveur)
  var resultat = document.getElementById('resultatReservation');
  resultat.innerHTML = `Réservation effectuée pour ${nom} du ${dateArrivee} au ${dateDepart}.`;
}
