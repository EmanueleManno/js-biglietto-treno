//TESTIAMO SE FUNZIONA
console.log('JS OK');

//RECUPERO GLI ELEMENTI NELLA PAGINA
const finalprice = document.getElementById('final-price');
console.log(finalprice);
const discount = document.getElementById('discount');
console.log(discount);
const fullprice = document.getElementById('full-price');
console.log(fullprice);

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
const textprice = "Il prezzo che lei deve sganciare senza aver diritto a sconti è € ";

//SCRIVO ALL'UTENTE IL PREZZO SENZA SCONTI
fullprice.innerText = textprice + calcdecimalprice;

//SE L'ETA' E' MINORE DI 18 ANNI CALCOLO SCONTO E PREZZO SCONTATO
if (age < 18)
{
    const minordiscount = (((calcdecimalprice*20)/100)).toFixed(2);
    console.log(minordiscount);
    const calcminorprice = (calcdecimalprice - minordiscount).toFixed(2);
    console.log(calcminorprice);

    //PREPARO IL TESTO DA SCRIVERE PER LO SCONTO SE MINORENNE
    const textminordiscount = "Lo sconto a lei riservato da minorenne è € ";

    //PREPARO IL TESTO DA SCRIVERE PER IL PREZZO SCONTATO SE MINORENNE
    const textminorprice = "Il prezzo che lei deve sganciare da minorenne è € "; 

    //SCRIVO ALL'UTENTE IL LO SCONTO
    discount.innerText = textminordiscount + minordiscount;

    //SCRIVO ALL'UTENTE IL PREZZO SCONTATO
    finalprice.innerText = textminorprice + calcminorprice;
}

//SE L'ETA' E' MAGGIORE O UGUALE A 65 ANNI CALCOLO SCONTO E PREZZO SCONTATO
else if (age >= 65) 
{
    const majordiscount = (((calcdecimalprice*40)/100)).toFixed(2);
    console.log(majordiscount);
    const calcmajorprice = (calcdecimalprice - majordiscount).toFixed(2);
    console.log(calcmajorprice);

    //PREPARO IL TESTO DA SCRIVERE PER LO SCONTO SE OVER 65
    const textmajordiscount = "Lo sconto a lei riservato da over 65 è € ";

    //PREPARO IL TESTO DA SCRIVERE PER IL PREZZO SCONTATO SE OVER 65
    const textmajorprice = "Il prezzo che lei deve sganciare da over 65 è € ";

    //SCRIVO ALL'UTENTE IL LO SCONTO
    discount.innerText = textmajordiscount + majordiscount;

    //SCRIVO ALL'UTENTE IL PREZZO SCONTATO
    finalprice.innerText = textmajorprice + calcmajorprice;
}



