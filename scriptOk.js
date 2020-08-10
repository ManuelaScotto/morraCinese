/**************************************************************
                    VARIABLES
************************************************************ */
let userScore = 0;
let cpuScore = 0;
let userPick;
let cpuPick;
let allOption = [
    {
        name: 'sasso',
        image: "img/stone.svg"
    },
    {
        name: 'forbici',
        image: "img/scissors.svg"
    },
    {
        name: 'carta',
        image: "img/attach.svg"
    }
]

/***********************************************************
 creo un array che abbia tutti gli elementi con classe 'user-choise'
********************************************************* */
let possibleUserPicks = document.getElementsByClassName('user-choice');


/********************************************************
 ciclo for per poter utilizzare addEventListener in ogni immagine
***************************************************** */
for (let i = 0; i < possibleUserPicks.length; i++) {
    possibleUserPicks[i].addEventListener('click', onUserPick)
};

/***********************************************************
 Funzione dell'evento click
 *************************************************************/
function onUserPick() {
    userPick = this.dataset.name;
    generateCpuPick();
    check();
    let cpuImage = '<img src="' + cpuPick.image + '"/>';
    document.getElementById('computer-choice').innerHTML = 'Il computer ha scelto: ' + cpuImage;
    document.getElementById('result').innerHTML = check();
    document.getElementById('cpu-score').innerHTML = cpuScore;
    document.getElementById('player-score').innerHTML = userScore;
}

/**********************************************************
 * funzione per generare l'indice dell'array allOption in maniera casuale 
*********************************************************** */
function generateCpuPick() {
    cpuPick = allOption[Math.floor(Math.random() * allOption.length)];
}

/**********************************************************
 * funzione per il risultato
 ***********************************************************/
let mess = "";
function check() {
    if (userPick == cpuPick.name) {
        mess = 'Hai pareggiato';
    } else if (userPick == 'sasso' && cpuPick.name == 'forbici' || userPick == 'carta' && cpuPick.name == 'sasso' || userPick == 'forbici' && cpuPick.name == 'carta') {
        userScore += 0.5;
        mess = 'Bravo!!! Hai vinto!!';
    } else {
        cpuScore += 0.5;
        mess = 'Hai perso!';
    }
    return mess;
}

/**********************************************************
 * funzione per il risultato personalizzando i messaggi di vittoria
 ***********************************************************/

 // let mess = "";
// function check() {
//     if (userPick == cpuPick.name) {
//         mess = 'Hai pareggiato';
//     } else if (userPick == 'sasso' && cpuPick.name == 'forbici') {
//         userScore += 0.5;
//         mess = 'Il sasso ha distrutto le forbici! Bravo!!! Hai vinto!!';
//     } else if (userPick == 'carta' && cpuPick.name == 'sasso') {
//         userScore += 0.5;
//         mess = 'La carta ha avvolto il sasso! Bravo!! Hai vinto!!';
//     } else if (userPick == 'forbici' && cpuPick.name == 'carta') {
//         userScore += 0.5;
//         mess = 'Le forbici hanno tagliato la carta! Bravo!! Hai vinto!!';
//     } else {
//         cpuScore += 0.5;
//         mess = 'Hai perso';
//     }
//     return mess;
// }


