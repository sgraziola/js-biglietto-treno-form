const btnEl = document.querySelector("button");
btnEl.addEventListener ("click", 
    function(){
        //Prendere numero km da percorrere.
        const kmEl = document.getElementById("km");
        //Prendere l'età del passeggero.
        const ageEl = document.getElementById("age");
        console.log(kmEl.value, ageEl.value);
        //Calcolare il prezzo del biglietto in base ai km (0.21 € al km)
        const eurosPerKm = 0.21;
        const travelFullPrice = kmEl.value * eurosPerKm;
        //console.log(travelFullPrice);
        //prezzo pieno
        let finalPrice = travelFullPrice;
        //calcolare sconti
        const juniorDiscount = 20 / 100;
        const seniorDiscount = 40 / 100;
        if (ageEl.value < 18) {
            //Aggiungere uno sconto del 20% per i minorenni
            finalPrice = travelFullPrice - (travelFullPrice * juniorDiscount);  
            console.log(finalPrice);  
        } else if (ageEl.value >= 65) {
            //Aggiungere uno sconto del 40% per gli over 65.
            finalPrice = travelFullPrice - (travelFullPrice * seniorDiscount);
            console.log(finalPrice);
        } 
        
        //L'output del prezzo finale in console(con massimo due decimali).
        const ticketPrice = document.querySelector("span");
        ticketPrice.innerHTML = finalPrice.toFixed(2);

});