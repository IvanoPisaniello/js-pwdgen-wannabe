const firstName = prompt("Inserisci il Tuo Nome");
const lastName = prompt("inserisci il tuo Cognome");
const favColour = prompt("inserisci il tuo colore preferito");
const age = prompt("inserisci la tua età")

document.getElementById("name").innerHTML = `Benvenuto: ${firstName} ${lastName}`
document.getElementById("pssw").innerHTML = `Questa è la tua password: ${firstName}${lastName}${favColour}${parseInt(age) + 21}`;