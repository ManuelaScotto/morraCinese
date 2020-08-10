// QUESTO SCRIPT NON FUNZIONA MA SONO PRESENTI PASSAGGI E SPIEGAZIONI DELL'ESERCIZIO
// let userScore = 0;
// let cpuScore = 0;

let userPick = ""; //valore dato dalla scelta dell'utente
let cpuPick = ""; //valore dato dal cpu

// creo un oggetto score assegnando valori 0 
let score = {
    userScore: 0,
    cpuScore: 0
}

// creo un array per la scelta casuale del cpu
const allOption = ['sasso', 'carta', 'forbici']

//creo una funzione per generare gli elementi casuali del cpu basandosi sull'array appena creato
function generateCpuPick() {
    // genenro un numero casuale tra 0 e 2 utilizzando la lunghezza dell'array
    cpuPick = allOption[Math.floor(Math.random() * allOption.length)];
    // cpuPick sarà uguale all'indice dell'array allOption alla posizione indicata con il math.random
    // console.log(cpuPick);
}


// creo un array che abbia tutti gli elementi con classe user-choise
let possibleUserPicks = document.getElementsByClassName('user-choice');
// console.log(possibleUserPicks);
// con document.getElementsByClassName('user-choice') prendo tutto ciò che ha classe 'user-choice' quindi name restituirà un array che contiene le 3 immagini 
// all'interno di ogni immagine possiamo vedere che esiste una proprietà chiamata dataset che ci restituirà il nome che gli abbiamo assegnato in html con data e ci darà ad esempio name='sasso'

// se vogliamo prendere la prima immagine aggiungiamo l'indice 0
let firstImg = document.getElementsByClassName('user-choice')[0];
// console.log(firstImg);

// se vogliamo prendere il nome che abbiamo inserito in data-name in html
let dataName = document.getElementsByClassName('user-choice')[0].dataset.name;
// console.log(dataName);

// cliccando solo su  quell'elemento (class user-choice indice 0) faccio qualcosa
let pickClick = document.getElementsByClassName('user-choice')[0].addEventListener('click', function () { })
// addEventListener accetta 2 parametri, il primo è il tipo di evento, il secondo è una funzione (questa funzione rappresenta le istruzioni che devono essere eseguite al momento del click )

// creo un ciclo for per far sì che posso cliccare su tutte le immagini per svolgere la funzione (ciclo all'interno di tutti gli elementi con classe 'user-choise) => che è la variabile possibleUserPicks
for (let i = 0; i < possibleUserPicks.length; i++) {
    possibleUserPicks[i].addEventListener('click', function () {
        // this prende di mira quell'elemento che ha generato l'evento
        console.log('la tua scelta è: ', this.dataset.name);
        // in questo modo cliccando sull'img mi darà il nome di dataset di quell'elemento
        userPick = this.dataset.name;
        // adesso siamo in grado di registrare la scelta dell'utente e di avviare la funzione per la generazione casuale del computer
        generateCpuPick();
        console.log('la scelta del computer è: ', cpuPick);
        check();
        // con check ottengo il risultato
    })
}
// possiamo poi creare una funzione che contenga il codice scritto sopra e all'addEventListener scrivere come secondo parametro solo il nome della funzione


// per mostrare a schermo l'immagine che rappresenta la scelta del computer dobbiamo prima di tutto convertire l'array di stringhe allOptions in un array di oggetti, dove ogni oggetto rappresenta una possibile scelta e inserire il nome e il percorso dell'img

let allOption = [
    {
        name: 'sasso',
        image: "./img/stone.svg"
    },
    {
        name: 'forbici',
        image: "./img/scissors.svg"
    },
    {
        name: 'foglio',
        image: "./img/attach.svg"
    }
]

// quindi se faccio
document.getElementsById('result').innerHTML = cpuPick;

// su schermo mi darà object object
// idem per la funzione check, per cui dovrò aggiungere cpuPick.name per ottenere il nome 
// creeremo poi 2 variabili una per il testo e una per l'immagine da stampare
let cpuImage = '<img src="' + cpuPick.image + '"/>';
let cpuText = "<h3>" + cpuPick.name + "</h3>";
document.getElementById('computer-choice').innerHTML = cpuImage + cpuText;


// creo la funzione per il risultato
function check() {
    if (userPick === cpuPick) {
        console.log('Hai pareggiato');

    } else {
        if (userPick == 'sasso') {
            if (cpuPick == 'forbici') {
                console.log('Hai vinto');
                score.userScore++; //per aggiornare il punteggio 
                // ogni volta che vinci aumenti il punteggio di 1
                // fatto questo devo poi aggiornare l'interfaccia utilizzando innerHtml sugli span dei punteggi

            } else {
                console.log('Hai perso');
                score.cpuScore++; //ogni volta che il computer vince aumento il punteggio
            }
        } else if (userPick == 'carta') {
            if (cpuPick == 'sasso') {
                console.log('Hai vinto');
                score.userScore++
            } else {
                console.log('Hai perso');
                score.cpuScore++;
            }
        } else if (userPick == 'forbici') {
            if (cpuPick == 'carta') {
                console.log('Hai vinto');
                score.userScore++
            } else {
                console.log('Hai perso');
                score.cpuScore++;
            }
        }
        // document.getElementsById('result').innerHTML = check();
    }
    // per stampare a schermo il risultato dobbiamo utilizzare return (in quanto ritorna un valore) noi adesso stiamo scrivendo in console il risultato, però questo testo non può essere utilizzato in alcun modo. Un modo per rendere questo comportamento più flessibile è appunto ritornare il valore
    // la keyword RETURN una volta che viene eseguita ferma l'esecuzione del metodo di conseguenza anche document.getelementbyId. Bisogna quindi spostare questa riga all'interno del ciclo for dopo l'esecuzione della funzione check

    // document.getElementsById('result').innerHTML = check(); per ottenere il risultato 
}

// snellire la funzione check 
// possiamo creare una variabile che contenga un messaggio vuoto e creare un if generico in caso di pareggio, uno in caso di vittoria (inserendo tutte le possibilità e un else per la perdita)


