//TESTIAMO SE FUNZIONA
console.log('JS OK');

//RECUPERO L'ELEMENTO NELLA PAGINA
const finalprice = document.getElementById('final-price');
console.log(finalprice);

//CHIEDIAMO ALL'UTENTE IL NUMERO DI CHILOMETRI CHE VUOLE PERCORRERE
const kilometers = prompt('Quanti Km desidera fare caro ospite?');
console.log(kilometers);

//CHIEDIAMO ALL'UTENTE L'ETA'
const age = prompt('Quanti anni hai caro utente?');
console.log(age);

//CALCOLIAMO LA TARIFFA
const calcprice = (kilometers * 0.21);
console.log(calcprice);

//TRASFORMIAMO IL PREZZO IN UNA CIFRA CON MASSIMO DUE DECIMALI
const calcdecimalprice = Math.floor(calcprice);
console.log(calcdecimalprice);

//PREPARO IL TESTO DA SCRIVERE
const textprice = "Il prezzo che lei deve sganciare è € "

//SCRIVO ALL'UTENTE IL PREZZO
finalprice.innerText = textprice + calcdecimalprice;