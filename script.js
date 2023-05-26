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
const calcdecimalprice = calcprice.toFixed(2);
console.log(calcdecimalprice);

//PREPARO IL TESTO DA SCRIVERE PER IL PREZZO SENZA SCONTI
const textprice = "Il prezzo che lei deve sganciare senza aver diritto a sconti è € "

//SCRIVO ALL'UTENTE IL PREZZO SENZA SCONTI
finalprice.innerText = textprice + calcdecimalprice;

//SE L'ETA' E' MINORE DI 18 ANNI CALCOLO SCONTO E PREZZO SCONTATO
if (age < 18); {
    const minordiscount = ((calcdecimalprice*20)/100);
    console.log(minordiscount);
    const calcminorprice = calcdecimalprice - minordiscount;
    console.log(calcminorprice);

    //PREPARO IL TESTO DA SCRIVERE PER IL PREZZO SE MINORENNE
    const textminorprice = "Il prezzo che lei deve sganciare da minorenne è € " 
    
    //SCRIVO ALL'UTENTE IL PREZZO SENZA SCONTI
    finalprice.innerText = textminorprice + calcminorprice;
}



