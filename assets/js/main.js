const btnEl = document.querySelector("button");
btnEl.addEventListener ("click", 
    function(){
        //prendere nome passeggero
        const nameEl= document.getElementById("name");
        const passengerName = document.querySelector(".col-4 h2");
        passengerName.innerHTML = nameEl.value; 
        //Prendere numero km da percorrere.
        const kmEl = document.getElementById("km");
        //Prendere l'età del passeggero.
        const ageEl = document.getElementById("age");
        //console.log(kmEl.value, ageEl.value);
        //Calcolare il prezzo del biglietto in base ai km (0.21 € al km)
        const eurosPerKm = 0.21;
        const travelFullPrice = kmEl.value * eurosPerKm;
        //console.log(travelFullPrice);
        //prezzo pieno
        let finalPrice = travelFullPrice;
        //calcolare sconti
        const juniorDiscount = 20 / 100;
        const seniorDiscount = 40 / 100;
        const saleEl = document.querySelector("span.sale");
        if (ageEl.value < 18) {
            //Aggiungere uno sconto del 20% per i minorenni
            finalPrice = travelFullPrice - (travelFullPrice * juniorDiscount);  
            //console.log(finalPrice);  
            saleEl.innerHTML = "Junior 20%";
        } else if (ageEl.value >= 65) {
            //Aggiungere uno sconto del 40% per gli over 65.
            finalPrice = travelFullPrice - (travelFullPrice * seniorDiscount);
            //console.log(finalPrice);
            saleEl.innerHTML = "Senior 20%";
        } else {
            saleEl.innerHTML = "Nessuna";
        }


        
        //L'output del prezzo finale in console(con massimo due decimali).
        const ticketPrice = document.querySelector("span.ticket_cost");
        ticketPrice.innerHTML = finalPrice.toFixed(2);

        //far apparire il biglietto
        const ticketEl = document.querySelector(".ticket_container");
        ticketEl.style.display = "block";
        // far apparire carrozza
        const carriageEl = document.querySelector("span.carriage");
        carriageEl.innerHTML = Math.floor(Math.random()*10 + 1);
        //random CP number
        const codexEl = document.querySelector("span.codex");
        codexEl.innerHTML = Math.floor(Math.random()*90000 + 10000);
});