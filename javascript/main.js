const firstName = prompt("Inserisci il Tuo Nome");
const lastName = prompt("inserisci il tuo Cognome");
const favColour = prompt("inserisci il tuo colore preferito");

document.getElementById("name").innerHTML = `Benvenuto: ${firstName} ${lastName}`
document.getElementById("pssw").innerHTML = `Questa è la tua password: ${firstName}${lastName}${favColour}21`;